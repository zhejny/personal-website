"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import { instruments } from "@/lib/metronome/instruments";

type AudioContextType = {
  audioCtx: AudioContext | null;
  samples: Record<string, AudioBuffer[]> | null;
  playSample: (name: string, index?: number) => void;
  loading: boolean;
  progress: number;
};

const AudioContextCtx = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [samples, setSamples] = useState<Record<string, AudioBuffer[]> | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const masterGain = useRef<GainNode | null>(null);
  const masterCompressor = useRef<DynamicsCompressorNode | null>(null);

  useEffect(() => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    setAudioCtx(ctx);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.8, ctx.currentTime);

    const compressor = ctx.createDynamicsCompressor();
    gain.connect(compressor).connect(ctx.destination);

    masterGain.current = gain;
    masterCompressor.current = compressor;

    const loadSamples = async () => {
      const buffers: Record<string, AudioBuffer[]> = {};

      let totalSamples = 0;
      Object.values(instruments).forEach((instr) => {
        totalSamples += instr.samplePaths.length;
      });

      let loadedSamples = 0;

      for (const [instrumentName, instrument] of Object.entries(instruments)) {
        buffers[instrumentName] = [];

        for (let i = 0; i < instrument.samplePaths.length; i++) {
          const path = instrument.samplePaths[i];

          try {
            const res = await fetch(path);
            if (!res.ok) {
              console.error(`Failed to fetch ${path}: ${res.status}`);
              continue;
            }

            const arrayBuffer = await res.arrayBuffer();
            if (ctx.state === "suspended") await ctx.resume();

            const audioBuf = await ctx.decodeAudioData(arrayBuffer);
            buffers[instrumentName][i] = audioBuf;
          } catch (err) {
            console.error(`Error loading sample ${path}:`, err);
          }

          // Update progress
          loadedSamples++;
          setProgress(Math.round((loadedSamples / totalSamples) * 100));
        }
      }

      setSamples(buffers);
      setLoading(false);
    };

    loadSamples();

    return () => {
      ctx.close();
    };
  }, []);

  const playSample = async (name: string, index: number = 0) => {
    if (!audioCtx || !samples?.[name]?.[index]) return;

    if (audioCtx.state === "suspended") {
      await audioCtx.resume();
    }

    const source = audioCtx.createBufferSource();
    source.buffer = samples[name][index];

    const panNode = audioCtx.createStereoPanner();
    panNode.pan.setValueAtTime(instruments[name].pan ?? 0, audioCtx.currentTime);

    const lowPass = audioCtx.createBiquadFilter();
    lowPass.type = "lowpass";
    lowPass.frequency.setValueAtTime(
      instruments[name].lowpass ?? 20000,
      audioCtx.currentTime
    );

    const highPass = audioCtx.createBiquadFilter();
    highPass.type = "highpass";
    highPass.frequency.setValueAtTime(
      instruments[name].highpass ?? 20,
      audioCtx.currentTime
    );

    source
      .connect(highPass)
      .connect(lowPass)
      .connect(panNode)
      .connect(masterGain.current!);

    source.start();
  };

  return (
    <AudioContextCtx.Provider value={{ audioCtx, samples, playSample, loading, progress }}>
      {children}
    </AudioContextCtx.Provider>
  );
}

export const useAudio = () => {
  const context = useContext(AudioContextCtx);
  if (!context) throw new Error("useAudio must be used within an AudioProvider");
  return context;
};