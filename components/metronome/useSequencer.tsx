"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useAudio } from "./AudioContextProvider";
import { Pattern } from "@/lib/metronome/patterns";
import { instruments } from "@/lib/metronome/instruments";

export function useSequencer() {
  const { audioCtx, samples } = useAudio();

  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(135);
  const [volume, setVolume] = useState(0.33);
  const [currentPatternState, setCurrentPatternState] = useState<Pattern | null>(null);
  const [enabledInstruments, setEnabledInstruments] = useState<Record<string, boolean>>({});

  const masterGain = useRef<GainNode | null>(null);
  const masterCompressor = useRef<DynamicsCompressorNode | null>(null);

  const schedulerTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const sampleCursor = useRef(0);
  const samplesPerStep = useRef(0);

  const currentStep = useRef(0);
  const fractionalStep = useRef(0);

  const activeNotes = useRef<Record<string, Set<GainNode>>>({});

  const tempoRef = useRef(tempo);
  const enabledInstrumentsRef = useRef(enabledInstruments);
  const patternRef = useRef<Pattern | null>(currentPatternState);

  useEffect(() => { tempoRef.current = tempo; }, [tempo]);
  useEffect(() => { enabledInstrumentsRef.current = enabledInstruments; }, [enabledInstruments]);
  useEffect(() => { patternRef.current = currentPatternState; }, [currentPatternState]);

  useEffect(() => {
    if (!audioCtx) return;
    const secondsPerStep = 60 / tempo / 4;
    samplesPerStep.current = secondsPerStep * audioCtx.sampleRate;
  }, [tempo, audioCtx]);

  useEffect(() => {
    if (!audioCtx) return;

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(volume, audioCtx.currentTime);

    const compressor = audioCtx.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-24, audioCtx.currentTime);
    compressor.knee.setValueAtTime(30, audioCtx.currentTime);
    compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
    compressor.attack.setValueAtTime(0.003, audioCtx.currentTime);
    compressor.release.setValueAtTime(0.25, audioCtx.currentTime);

    gain.connect(compressor).connect(audioCtx.destination);

    masterGain.current = gain;
    masterCompressor.current = compressor;
  }, [audioCtx]);

  useEffect(() => {
    if (masterGain.current && audioCtx) {
      masterGain.current.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + 0.05);
    }
  }, [volume, audioCtx]);

  const playNote = useCallback(
    (instrumentName: string, buffer: AudioBuffer, startTime: number, duration: number) => {
      if (!audioCtx || !masterGain.current) return;

      const source = audioCtx.createBufferSource();
      source.buffer = buffer;

      const ampGain = audioCtx.createGain();

      const attack = 0.01;
      const release = 0.12;
      const sustain = Math.max(0, duration - attack - release);

      ampGain.gain.setValueAtTime(0, startTime);
      ampGain.gain.linearRampToValueAtTime(1, startTime + attack);
      ampGain.gain.setValueAtTime(1, startTime + attack + sustain);
      ampGain.gain.linearRampToValueAtTime(0, startTime + attack + sustain + release);

      const hp = audioCtx.createBiquadFilter();
      hp.type = "highpass";
      hp.frequency.setValueAtTime(instruments[instrumentName].highpass ?? 20, startTime);

      const lp = audioCtx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.setValueAtTime(instruments[instrumentName].lowpass ?? 20000, startTime);

      const panNode = audioCtx.createStereoPanner();
      panNode.pan.setValueAtTime(instruments[instrumentName].pan ?? 0, startTime);

      source
        .connect(ampGain)
        .connect(hp)
        .connect(lp)
        .connect(panNode)
        .connect(masterGain.current);

      if (!activeNotes.current[instrumentName]) activeNotes.current[instrumentName] = new Set();
      activeNotes.current[instrumentName].add(ampGain);

      source.onended = () => {
        activeNotes.current[instrumentName]?.delete(ampGain);
      };

      source.start(startTime);
      source.stop(startTime + duration + 0.05);
    },
    [audioCtx]
  );

  const scheduleStep = useCallback(() => {
    if (!audioCtx || !samples || !patternRef.current) return;

    const sampleRate = audioCtx.sampleRate;
    const lookaheadSamples = Math.floor(sampleRate * 0.1);

    while (sampleCursor.current < audioCtx.currentTime * sampleRate + lookaheadSamples) {
      const startTime = sampleCursor.current / sampleRate;

      Object.entries(patternRef.current.instrumentParts).forEach(([instrument, part]) => {
        if (!enabledInstrumentsRef.current[instrument]) return;

        part.onsets.forEach((onset, i) => {
          const absStep = currentStep.current + fractionalStep.current;
          if (onset !== Math.floor(absStep)) return;

          const sampleIndex = part.melody?.[i] ?? 0;
          const buffer = samples[instrument][sampleIndex];
          if (!buffer) return;

          const durationRatio = part.durations?.[i] ?? 1;
          const durationSeconds = durationRatio * (60 / tempoRef.current);

          playNote(instrument, buffer, startTime, durationSeconds);
        });
      });

      fractionalStep.current += 1;

      if (fractionalStep.current >= 1) {
        currentStep.current =
          (currentStep.current + Math.floor(fractionalStep.current)) %
          patternRef.current.length;
        fractionalStep.current %= 1;
      }

      sampleCursor.current += samplesPerStep.current;
    }
  }, [audioCtx, samples, playNote]);

  const start = useCallback(async () => {
    if (!audioCtx || !patternRef.current) return;

    if (audioCtx.state === "suspended") await audioCtx.resume();

    sampleCursor.current = audioCtx.currentTime * audioCtx.sampleRate;
    currentStep.current = 0;
    fractionalStep.current = 0;

    setIsPlaying(true);


    schedulerTimer.current = setInterval(() => {
      scheduleStep();
    }, 25);
  }, [audioCtx, scheduleStep]);

  const stop = useCallback(() => {
    if (!audioCtx) return;

    if (schedulerTimer.current) {
      clearInterval(schedulerTimer.current);
      schedulerTimer.current = null;
    }

    const now = audioCtx.currentTime;

    Object.values(activeNotes.current).forEach((set) => {
      set.forEach((gain) => {
        const param = gain.gain;
        const current = param.value;

        param.cancelScheduledValues(now);
        param.setValueAtTime(current, now);
        param.linearRampToValueAtTime(0, now + 0.12);
      });

      set.clear();
    });

    setIsPlaying(false);
  }, [audioCtx]);

  const loadPattern = useCallback(
    (pattern: Pattern) => {
      const now = audioCtx?.currentTime ?? 0;

      Object.values(activeNotes.current).forEach((set) => {
        set.forEach((gain) => {
          const param = gain.gain;
          const current = param.value;

          param.cancelScheduledValues(now);
          param.setValueAtTime(current, now);
          param.linearRampToValueAtTime(0, now + 0.12);
        });
      });

      setCurrentPatternState(pattern);
      patternRef.current = pattern;

      currentStep.current = 0;
      fractionalStep.current = 0;
      sampleCursor.current = now * (audioCtx?.sampleRate || 44100);

      const newEnabled: Record<string, boolean> = {};
      Object.keys(pattern.instrumentParts).forEach((inst) => {
        newEnabled[inst] = true;
        if (!activeNotes.current[inst]) activeNotes.current[inst] = new Set();
      });

      setEnabledInstruments(newEnabled);
      setTempo(pattern.defaultTempo);
    },
    [audioCtx]
  );

  const toggleInstrument = useCallback(
    (name: string) => {
      setEnabledInstruments((prev) => {
        const newState = { ...prev, [name]: !prev[name] };
        const now = audioCtx!.currentTime;

        if (activeNotes.current[name]) {
          activeNotes.current[name].forEach((gain) => {
            const param = gain.gain;
            const current = param.value;

            param.cancelScheduledValues(now);
            param.setValueAtTime(current, now);

            if (!newState[name]) {
              param.linearRampToValueAtTime(0, now + 0.12);
            } else {
              param.linearRampToValueAtTime(1, now + 0.05);
            }
          });

          if (!newState[name]) activeNotes.current[name].clear();
        }

        return newState;
      });
    },
    [audioCtx]
  );

  return {
    isPlaying,
    start,
    stop,
    tempo,
    updateTempo: setTempo,
    volume,
    setVolume,
    currentPattern: currentPatternState,
    enabledInstruments,
    loadPattern,
    toggleInstrument,
    setEnabledInstruments,
  };
}
