"use client";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const GoToTop = () => {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledToTop(window.scrollY === 0);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    !isScrolledToTop && (
      <div
        className="fixed cursor-pointer bottom-3 right-3 w-[60px] h-[60px] bg-black text-white rounded-full flex justify-center items-center z-50 bg-opacity-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUp size={32} strokeWidth={2.5} />
      </div>
    )
  );
};

export default GoToTop;
