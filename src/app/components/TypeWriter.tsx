"use client";

import React, { useState, useEffect, useMemo } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 20 }) => {
  //   const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState(0);
  const displayedText = useMemo(() => text.slice(0, index), [index]);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    console.log(index, text);
    if (index >= text.length) return;

    const timeoutId = setTimeout(() => {
      setIndex((i) => i + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, text, speed]);

  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlinkInterval);
  }, []);

  return (
    <span className="mb-4 items-center text-4xl font-bold sm:text-left lg:text-8xl">
      {displayedText}
      <span
        className={`${
          cursorVisible ? "opacity-100 z-0" : "opacity-0"
        } transition-opacity duration-300`}
      >
        |
      </span>
    </span>
  );
};

export default Typewriter;
