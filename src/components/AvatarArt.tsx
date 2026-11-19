import React from "react";

interface AvatarArtProps {
  name: string;
  nationality: "Indian" | "Russian";
  accentHue: string;
  className?: string;
}

export function AvatarArt({ name, nationality, accentHue, className = "" }: AvatarArtProps) {
  const initials = name.slice(0, 2).toUpperCase();
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${accentHue} flex items-center justify-center select-none ${className}`}
    >
      {/* Subtle luxury radial spotlight */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(212,175,55,0.45), transparent 65%)",
        }}
      />
      {/* Editorial silhouette & monogram */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full border border-gold/40 bg-black/40 backdrop-blur-sm flex items-center justify-center mb-2">
          <span className="font-serif text-xl tracking-widest text-gold-light">
            {initials}
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.25em] text-gold/70 font-medium">
          {nationality} • Verified
        </span>
      </div>
    </div>
  );
}
