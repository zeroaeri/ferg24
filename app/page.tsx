"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PolaroidLoader from "@/components/PolaroidLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  // Smooth exit transition handler
  const handleOpenGifts = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExiting(true);
    setTimeout(() => {
      router.push("/cards");
    }, 500); // 500ms matching the CSS exit fade
  };

  return (
    <main className="relative min-h-screen text-stone-100 flex flex-col items-center justify-center p-8 overflow-hidden">
      
      {/* Dreamy Fixed Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-stone-900">
        <img 
          src="/watercolor.jpeg" 
          alt="bg" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-transparent to-stone-900/80" />
      </div>

      {/* Loading Screen */}
      {isLoading && <PolaroidLoader onComplete={() => setIsLoading(false)} />}

      {/* Main Content */}
      <div 
        className={`flex flex-col items-center max-w-2xl text-center space-y-8 transition-all duration-500 ease-in-out ${
          isLoading || isExiting ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-none"
        }`}
      >
        <h1 className="font-cursive text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] text-emerald-200 whitespace-nowrap my-4">
          happy birthday, baby!
        </h1>
        
        <p className="text-lg text-stone-300">
          wishing you a day filled with love and amazing joy ! <br /> you got this, i'm with you every step of the way! 
        </p>

        <div className="w-full max-w-md aspect-square flex items-center justify-center p-4">
          <img 
            src="/liliesss.png" 
            alt="bouquet" 
            className="max-h-full max-w-full object-contain drop-shadow-[0_10px_25px_rgba(16,185,129,0.25)]"
          />
        </div>

        <button 
          onClick={handleOpenGifts}
          className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-emerald-900/50 hover:scale-105 active:scale-95 cursor-pointer"
        >
          open some gifts here!
        </button>
      </div>
    </main>
  );
}