"use client";

import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isMounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-98"
      }`}
    >
      {children}
    </div>
  );
}