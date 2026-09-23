"use client";

import { useState } from "react";

interface GiftCardProps {
  number: number;
  message: string;
  unlockTimeLabel: string;
  isUnlocked: boolean;
}

export default function GiftCard({
  number,
  message,
  unlockTimeLabel,
  isUnlocked,
}: GiftCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (!isUnlocked) return;
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`w-full h-64 perspective-1000 ${
        isUnlocked ? "cursor-pointer" : "cursor-not-allowed opacity-75"
      }`}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full duration-700 preserve-3d ${
          isFlipped && isUnlocked ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT OF THE CARD */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-xl flex flex-col items-center justify-center p-4 shadow-lg border-2 transition-all ${
            isUnlocked
              ? "bg-emerald-900 border-emerald-400 shadow-emerald-900/50 hover:scale-[1.02]"
              : "bg-stone-800/90 border-stone-700 text-stone-400"
          }`}
        >
          <span className="text-3xl mb-2">{isUnlocked ? "🎁" : "🔒"}</span>
          <span className="text-white text-2xl font-bold">#{number}</span>

          {isUnlocked ? (
            <span className="text-emerald-300 text-sm mt-3 animate-pulse">
              click to open!
            </span>
          ) : (
            <div className="text-center mt-3">
              <p className="text-xs text-stone-400">Locked until</p>
              <p className="text-sm font-semibold text-emerald-400">
                {unlockTimeLabel}
              </p>
            </div>
          )}
        </div>

        {/* BACK OF THE CARD (Message) */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-stone-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-xl border-4 border-emerald-800">
          <p className="text-stone-800 text-base md:text-lg font-medium">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}