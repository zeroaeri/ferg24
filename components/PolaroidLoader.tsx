"use client";
import { useEffect, useState } from "react";

export default function PolaroidLoader({ onComplete }: { onComplete: () => void }) {
  const [flash, setFlash] = useState(true);

  useEffect(() => {
    // The flash lasts for 0.5 seconds
    const flashTimer = setTimeout(() => setFlash(false), 500);
    // The whole loading screen lasts for 4.5 seconds before triggering onComplete
    const completeTimer = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(flashTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* The Camera Flash */}
      <div 
        className={`absolute inset-0 z-50 bg-white transition-opacity duration-700 pointer-events-none ${
          flash ? "opacity-100" : "opacity-0"
        }`} 
      />

      {/* The Polaroid Container (Prints downwards using our custom CSS animation) */}
      <div className="relative z-40 translate-y-[-20px] animate-slideDown cursor-pointer">
        <div className="bg-white p-4 pb-12 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
          
          {/* IMAGE PLACEHOLDER - Replace the src with your image later! */}
          <div className="w-64 h-64 bg-gray-200 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center text-gray-500 overflow-hidden">
            <img 
                src="/ferg-small.jpg" 
                alt="small bb" 
                className="w-full h-full object-cover grayscale-[100%] contrast-125 brightness-95" 
            />
          </div>
          
            <div className="mt-5 w-full flex justify-center items-center px-2">
            <img 
                src="/happy-birthday.png" 
                alt="happy 24th birthdayyyy" 
                className="w-[85%] max-w-[210px] h-auto object-contain mix-blend-multiply" 
            />
            </div>
        </div>
      </div>
    </div>
  );
}