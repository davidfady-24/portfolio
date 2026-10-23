"use client";

import { useState, useEffect, useCallback } from "react";

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterText({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentText = texts[textIndex];

  const handleTyping = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (charIndex > 0) {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [charIndex, currentText, isDeleting, isPaused, pauseDuration, texts.length]);

  useEffect(() => {
    if (isPaused) return;

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting, isPaused, deletingSpeed, typingSpeed]);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-[#D4A853]">{displayText}</span>
      <span className="ml-0.5 inline-block w-[2px] h-[1.1em] bg-[#D4A853] align-middle animate-[typewriter-blink_1s_step-end_infinite]" />
    </span>
  );
}
