"use client";

import { useState, useEffect } from "react";
import GiftCard from "@/components/GiftCard";
import Link from "next/link";

export default function CardsPage() {
  const [now, setNow] = useState<Date | null>(null);

  // Keep live time updated every second
  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // NZ Standard Time offset is +12:00 in September
  const midnightNZ = new Date("2026-09-25T00:00:00+12:00");

  const cardSchedule = [
    { number: 1, unlockAt: "2026-09-24T21:00:00+12:00", label: "9:00 PM", message: "i love your amazing smile. you're just perfect and oh so breathtaking, i could kiss you all day long. come home!" },
    { number: 2, unlockAt: "2026-09-24T21:15:00+12:00", label: "9:15 PM", message: "you're a good, good man, with a big, big heart for everyone. the people who know you are so blessed to have you in their lives." },
    { number: 3, unlockAt: "2026-09-24T21:30:00+12:00", label: "9:30 PM", message: "thank you for being around, for being my favorite person. i know lots of people would concur with me when i say that you're the best person around!" },
    { number: 4, unlockAt: "2026-09-24T21:45:00+12:00", label: "9:45 PM", message: "your clever mind and quick wit just keep me, and a lot of people, going! you're just so smart and so knowledgeable and i have always loved that about you." },
    { number: 5, unlockAt: "2026-09-24T22:00:00+12:00", label: "10:00 PM", message: "i hope you see how kind you are to everyone around you. you make me so happy and so proud that you're in my life, whenever i see you, i feel the fulfillment of having you." },
    { number: 6, unlockAt: "2026-09-24T22:15:00+12:00", label: "10:15 PM", message: "i love how responsible you are, and always doing what is right, even when no one is watching. you are honorable." },
    { number: 7, unlockAt: "2026-09-24T22:30:00+12:00", label: "10:30 PM", message: "please see around you, and look how much you mean to us, the people around. you are truly special, and are one of the best people we could ever have in our lives." },
    { number: 8, unlockAt: "2026-09-24T22:45:00+12:00", label: "10:45 PM", message: "i know thesis and the hci project is hard, but like you made possible in college, you can make these possible now. i know your capabilities and i know you can do it - easy peasy!" },
    { number: 9, unlockAt: "2026-09-24T23:00:00+12:00", label: "11:00 PM", message: "you are gonna be a successful young man, i can see it! with your level of skill and hard work, there will come a day that everyone who doubted you will fall and be amazed by your success." },
    { number: 10, unlockAt: "2026-09-24T23:15:00+12:00", label: "11:15 PM", message: "thank you for being who you are. you make me oh so incredibly proud every single day." },
    { number: 11, unlockAt: "2026-09-24T23:30:00+12:00", label: "11:30 PM", message: "i hope you see how much light you bring into every room you come into, and how much energy you bring to this world. the world is a better place with you in it." },
    { number: 12, unlockAt: "2026-09-24T23:45:00+12:00", label: "11:45 PM", message: "you are a child of God - don't ever forget that. you are born special, and you are made beautiful - like the image of God. you are made extraordinary. i pray for you every single day." },
  ];

  // Prevent SSR hydration mismatch while reading client date
  if (!now) return null;

  const isMidnightOrLater = now.getTime() >= midnightNZ.getTime();

  return (
    <main className="min-h-screen bg-stone-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Midnight Birthday Banner */}
        {isMidnightOrLater && (
          <div className="bg-gradient-to-r from-teal-500 via-emerald-600 to-amber-500 text-white p-6 rounded-2xl shadow-2xl border-2 border-emerald-300 text-center mb-10">
            <h1 className="text-5xl md:text-5xl font-cursive">
              Happiest birthday, my baby!
            </h1>
            <p className="text-emerald-100 text-base md:text-lg mt-2">
              i love you, my sweet, sweet boy! i hope this day is as bright as you are! continue being who you are, and becoming who you are destined to be. don't mind the outside noise, just keep doing what you love, and what you intend to do, and everything will be alright. i'm sorry for being too stubborn and being just a pain in the ass, but i love you so much and i promise to never stop loving you. i pray for you everyday, and i hope you see that the people in your life hold you in high regard, as you deserve. may the Lord bless you, and keep you; may His face shine upon you and be gracious unto you; may He lift his countenance upon you, and give you peace. i love you, and i hope you have the best birthday so far, my loveee. God bless you always!
            </p>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-[3.5rem] lg:text-[5rem] font-cursive text-emerald-200 mb-4">
            twelve gifts for twenty-four years
          </h1>
          <p className="text-stone-300 text-lg">
            {isMidnightOrLater
              ? "happy birthday! click each card to see a note <3"
              : "hey baby boo !! since i'm stuck in class today, click each card to see a note from me! (side note: they'll unlock every 15 minutes :D)"}
          </p>
          <Link href="/" className="text-emerald-400 hover:text-emerald-300 text-sm mt-4 inline-block">
            ← back home
          </Link>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardSchedule.map((item) => {
            const unlockTime = new Date(item.unlockAt);
            const isUnlocked = isMidnightOrLater || now.getTime() >= unlockTime.getTime();

            return (
              <GiftCard
                key={item.number}
                number={item.number}
                message={item.message}
                unlockTimeLabel={item.label}
                isUnlocked={isUnlocked}
              />
            );
          })}
        </div>

      </div>
    </main>
  );
}