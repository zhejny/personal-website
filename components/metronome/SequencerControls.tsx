"use client";

import { useState } from "react";
import { useSequencer } from "./useSequencer";
import { patterns } from "@/lib/metronome/patterns";
import { instruments } from "@/lib/metronome/instruments";
import InstrumentToggle from "./InstrumentToggle";
import { LoadingModal } from "./LoadingModal";
import { useAudio } from "./AudioContextProvider";

export default function SequencerControls() {
  const {
    isPlaying,
    start,
    stop,
    tempo,
    updateTempo,
    volume,
    setVolume,
    loadPattern,
    currentPattern,
    enabledInstruments,
    toggleInstrument,
  } = useSequencer();

  const { loading, progress } = useAudio();

  const [selected, setSelected] = useState<string>("");

  const handlePatternChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);

    const [piece, section] = value.split(":");
    const pattern = patterns[piece][section];

    if (pattern) {
      loadPattern(pattern);
    }
  };

  const selectedPiece = selected ? selected.split(":")[0] : "";

  return (
    <div className="text-center">
      {/* <h2 className="text-xl font-semibold mb-1">Kendang Metronome</h2> */}

      <LoadingModal isLoading={loading} progress={progress} />

      <div className="text-md font-semibold h-5">
        {selectedPiece || "\u00A0"}
      </div>

      {/* <div className="h-6">
        {selectedPiece ? (
          <span className="text-md font-semibold">{selectedPiece}</span>
        ) : (
          <span className="text-md font-regular opacity-50">
            a metronome practice aid for Balinese <i>kendang tunggal</i>
          </span>
        )}
      </div> */}

      {/* Pattern Selector */}
      <select
        value={selected}
        onChange={handlePatternChange}
        className="border rounded px-2 py-1 text-md"
      >
        <option value="" disabled>
          [choose pattern]
        </option>
        {Object.entries(patterns).map(([piece, sections]) => (
          <optgroup key={piece} label={piece}>
            {Object.keys(sections).map((section) => (
              <option key={section} value={`${piece}:${section}`}>
                {section}
              </option>
            ))}
          </optgroup>
        ))}
      </select>

      {/* Transport */}
      <div className="mt-3">
        <button
          onClick={isPlaying ? stop : start}
          disabled={!currentPattern}
          className="px-4 py-2 rounded bg-blue-600 text-white disabled:bg-gray-500"
        >
          {isPlaying ? "Stop" : "Play"}
        </button>
      </div>

      {/* Tempo Control */}
      <div className="mt-3">
        <label className="block">
          <strong>Tempo:</strong> {Math.round(tempo)} BPM
        </label>
        <input
          type="range"
          min={45}
          max={200}
          step={1}
          value={tempo}
          onChange={(e) => updateTempo(Number(e.target.value))}
          className="w-56 mt-1"
        />
      </div>

      {/* Volume Control */}
      <div className="mt-1">
        <label className="block">
          <strong>Volume:</strong> {(volume * 100).toFixed(0)}%
        </label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-56 mt-1"
        />
      </div>

      {/* Instrument Toggles */}
      <div className="mt-1">
        <label className="block mb-2">
          <strong>Instruments</strong>
        </label>

        <div className="grid grid-cols-3 gap-1 place-items-center w-fit mx-auto">
          {Object.keys(instruments).map((name) => (
            <InstrumentToggle
              key={name}
              name={name}
              enabled={enabledInstruments[name] ?? false}
              inPattern={
                currentPattern ? name in currentPattern.instrumentParts : false
              }
              toggle={toggleInstrument}
              imageSrc={instruments[name].imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
