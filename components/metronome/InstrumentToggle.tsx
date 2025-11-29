"use client";

type InstrumentToggleProps = {
  name: string;
  enabled: boolean;
  inPattern: boolean;
  toggle: (name: string) => void;
  imageSrc: string;
};

export default function InstrumentToggle({
  name,
  enabled,
  inPattern,
  toggle,
  imageSrc,
}: InstrumentToggleProps) {
  const disabled = !inPattern;
  const opacityClasses = disabled
    ? "opacity-10"
    : enabled
    ? "opacity-100"
    : "opacity-30";

  return (
    <button
      onClick={() => !disabled && toggle(name)}
      disabled={disabled}
      className={`
        relative 
        w-24 h-24
        rounded-xl border border-gray-600
        transition-opacity duration-200
        flex items-center justify-center
        ${opacityClasses}
        ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
      `}
      style={{ "--img": `url(${imageSrc})` } as React.CSSProperties}
      title={name}
    >
      <div
        className="
          w-[90%] h-[90%]
          bg-center bg-contain bg-no-repeat
          rounded-lg
          bg-[image:var(--img)]
        "
      />

      <span
        className="
          absolute bottom-1
          px-2 py-0.5
          text-xs rounded-md
          bg-black/60 text-white
          opacity-0
          transition-opacity duration-200
          group-hover:opacity-100
        "
      >
        {name}
      </span>
    </button>
  );
}