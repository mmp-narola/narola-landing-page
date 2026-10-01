"use client";

import { useEffect, useState } from "react";

const NarolaO = ({ className }: { className?: string }) => (
  <svg viewBox="87 2 30 34" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M91.7793 6.3333C102.779 2.3333 116.224 9.22219 116.224 21.3333C116.224 29.1111 109.89 35.5555 102.002 35.5555C94.2237 35.5555 87.7793 29.2222 87.7793 21.3333C87.7793 14.5555 92.6682 8.88886 99.0015 7.44441C98.446 7.22219 95.1126 6.22219 91.7793 6.3333ZM102.113 14.3333C98.2237 14.3333 95.0015 17.5555 95.0015 21.4444C95.0015 25.3333 98.2237 28.5555 102.113 28.5555C106.002 28.5555 109.224 25.3333 109.224 21.4444C109.224 17.4444 106.002 14.3333 102.113 14.3333Z" fill="#0084FF"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M91.7793 6.33336C102.668 2.22225 116.224 9.22225 116.224 21.3334C116.224 29.1111 109.89 35.5556 102.002 35.5556C94.2237 35.5556 87.7793 29.2222 87.7793 21.3334C89.0015 25.3334 91.8904 28.1111 95.3349 29.3334C100.335 31.1111 104.89 29.2222 107.779 25.7778C109.446 23.7778 110.335 21.5556 110.557 19.3334C110.779 17.2222 110.335 15.1111 109.446 13.2222C106.557 7.00003 98.3349 5.11114 91.7793 6.33336Z" fill="url(#paint0_linear_1_11769)"/>
    <defs>
      <linearGradient id="paint0_linear_1_11769" x1="91.8281" y1="15.1189" x2="110.743" y2="26.0396" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2194FF"/>
        <stop offset="1" stopColor="#CBEDFF"/>
      </linearGradient>
    </defs>
  </svg>
);

export function SectionProgressPointer() {
  const [targetState, setTargetState] = useState({
    y: -100,
    x: 0,
    isVisible: false,
    hasReached: false,
    rotation: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const targets = Array.from(document.querySelectorAll('[data-pointer-target="true"]'));
      if (targets.length === 0) return;

      const viewportCenter = window.innerHeight / 2;
      const clampTop = 120;
      const clampBottom = window.innerHeight - 120;

      let activeTarget: Element | null = null;
      let minDistance = Infinity;

      for (const target of targets) {
        const rect = target.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          activeTarget = target;
        }
      }

      if (!activeTarget) return;

      const rect = activeTarget.getBoundingClientRect();
      
      // Determine if the pointer should be visible based on first and last target
      const firstRect = targets[0].getBoundingClientRect();
      const lastRect = targets[targets.length - 1].getBoundingClientRect();
      const isVisible = firstRect.top < window.innerHeight && lastRect.bottom > 0;

      // Calculate Y position with clamping
      let y = rect.top + rect.height / 2;
      let hasReached = true;

      if (y > clampBottom) {
        y = clampBottom;
        hasReached = false;
      } else if (y < clampTop) {
        y = clampTop;
        hasReached = false;
      }

      const rotation = window.scrollY * 0.2; // Adjust multiplier for rotation speed

      setTargetState({
        y,
        x: rect.left - 48, // 48px to the left of the title
        isVisible,
        hasReached,
        rotation,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once after a short delay to ensure layout is complete
    const timeout = setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 pointer-events-none will-change-transform"
      style={{
        transform: `translate(${targetState.x}px, ${targetState.y}px)`,
        transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.4s ease",
        opacity: targetState.isVisible ? 1 : 0,
      }}
    >
      <div 
        style={{ transform: `rotate(${targetState.rotation}deg)` }}
        className="transition-transform duration-100 ease-out will-change-transform"
      >
        <NarolaO
          className={`h-8 w-8 drop-shadow-2xl transition-all duration-700 ease-out ${
            targetState.hasReached
              ? "animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] scale-110"
              : "scale-75 opacity-60"
          }`}
        />
      </div>
    </div>
  );
}
