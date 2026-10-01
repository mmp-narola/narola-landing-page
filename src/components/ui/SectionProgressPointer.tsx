"use client";

import { useEffect, useState } from "react";

const NarolaO = ({ className }: { className?: string }) => (
  <svg viewBox="87 2 30 34" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M91.7793 6.3333C102.779 2.3333 116.224 9.22219 116.224 21.3333C116.224 29.1111 109.89 35.5555 102.002 35.5555C94.2237 35.5555 87.7793 29.2222 87.7793 21.3333C87.7793 14.5555 92.6682 8.88886 99.0015 7.44441C98.446 7.22219 95.1126 6.22219 91.7793 6.3333ZM102.113 14.3333C98.2237 14.3333 95.0015 17.5555 95.0015 21.4444C95.0015 25.3333 98.2237 28.5555 102.113 28.5555C106.002 28.5555 109.224 25.3333 109.224 21.4444C109.224 17.4444 106.002 14.3333 102.113 14.3333Z" fill="#0084FF" />
    <path fillRule="evenodd" clipRule="evenodd" d="M91.7793 6.33336C102.668 2.22225 116.224 9.22225 116.224 21.3334C116.224 29.1111 109.89 35.5556 102.002 35.5556C94.2237 35.5556 87.7793 29.2222 87.7793 21.3334C89.0015 25.3334 91.8904 28.1111 95.3349 29.3334C100.335 31.1111 104.89 29.2222 107.779 25.7778C109.446 23.7778 110.335 21.5556 110.557 19.3334C110.779 17.2222 110.335 15.1111 109.446 13.2222C106.557 7.00003 98.3349 5.11114 91.7793 6.33336Z" fill="url(#paint0_linear_1_11769)" />
    <defs>
      <linearGradient id="paint0_linear_1_11769" x1="91.8281" y1="15.1189" x2="110.743" y2="26.0396" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2194FF" />
        <stop offset="1" stopColor="#CBEDFF" />
      </linearGradient>
    </defs>
  </svg>
);

type Point = { x: number, y: number };
type Segment = { p0: Point, p1: Point, p2: Point, p3: Point };

export function SectionProgressPointer() {
  const [pathData, setPathData] = useState<{ segments: Segment[], logo: Point, height: number } | null>(null);
  const [targetState, setTargetState] = useState({ x: -100, y: -100, absoluteY: 0, isTracking: false, rotation: 0 });

  useEffect(() => {
    const updatePath = () => {
      const targets = Array.from(document.querySelectorAll('[data-pointer-target="true"]'));

      const pts: Point[] = [];
      targets.forEach((t, i) => {
        const rect = t.getBoundingClientRect();
        const xOffset = i % 2 === 0 ? 50 : -50;
        const x = i % 2 === 0 ? rect.right + xOffset : rect.left + xOffset;
        pts.push({ x: x + window.scrollX, y: rect.top + rect.height / 2 + window.scrollY });
      });

      if (pts.length > 0) {
        const segments: Segment[] = [];
        for (let i = 0; i < pts.length - 1; i++) {
          const p0 = pts[i];
          const p3 = pts[i + 1];

          const swingRight = i % 2 === 0;
          const swingX = swingRight ? window.innerWidth * 1.15 : -window.innerWidth * 0.15;

          const p1 = { x: swingX, y: p0.y + (p3.y - p0.y) / 3 };
          const p2 = { x: swingX, y: p0.y + 2 * (p3.y - p0.y) / 3 };

          segments.push({ p0, p1, p2, p3 });
        }

        let logoPt = { x: window.innerWidth / 2, y: 0 };
        const logo = document.querySelector('[data-logo-target="true"]');
        if (logo) {
          const r = logo.getBoundingClientRect();
          logoPt = { x: r.left + r.width / 2 + window.scrollX, y: r.top + r.height / 2 + window.scrollY };
        }

        setPathData({ segments, logo: logoPt, height: document.documentElement.scrollHeight });
      }
    };

    updatePath();
    const observer = new ResizeObserver(updatePath);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!pathData || pathData.segments.length === 0) return;

    const handleScroll = () => {
      const { segments, logo } = pathData;

      const offset = window.innerHeight / 2;
      const sIdeal = window.scrollY + offset;
      let targetY = sIdeal;
      let isTracking = true;
      const stickyRatio = 0.02; // Pointer stays glued to the text for 2% of the distance

      const lastSegment = segments[segments.length - 1];
      const lastBadgeY = lastSegment.p3.y;

      if (sIdeal < segments[0].p0.y) {
        targetY = logo.y; // Park at the header logo!
        isTracking = false;
      } else if (sIdeal > lastBadgeY) {
        targetY = lastBadgeY;
        isTracking = false;
      } else {
        for (let i = 0; i < segments.length; i++) {
          const y0 = segments[i].p0.y;
          const y1 = segments[i].p3.y;

          if (sIdeal >= y0 && sIdeal < y1) {
            const dist = y1 - y0;
            const stickyDist = dist * stickyRatio;
            const traveled = sIdeal - y0;

            if (traveled <= stickyDist) {
              targetY = y0;
              isTracking = false; // Paused at badge
            } else {
              const travelRatio = (traveled - stickyDist) / (dist - stickyDist);
              const smoothTravel = travelRatio * travelRatio * (3 - 2 * travelRatio);
              targetY = y0 + smoothTravel * dist;
              isTracking = true; // Moving along path
            }
            break;
          }
        }
      }

      let x = segments[0].p0.x;
      if (targetY === logo.y) {
        x = logo.x;
      } else if (targetY <= segments[0].p0.y) {
        x = segments[0].p0.x;
      } else if (targetY >= lastBadgeY) {
        x = lastSegment.p3.x;
      } else {
        for (let i = 0; i < segments.length; i++) {
          if (targetY >= segments[i].p0.y && targetY <= segments[i].p3.y) {
            const { p0, p1, p2, p3 } = segments[i];
            const t = (targetY - p0.y) / (p3.y - p0.y);
            x = p0.x * Math.pow(1 - t, 3) +
              3 * p1.x * Math.pow(1 - t, 2) * t +
              3 * p2.x * (1 - t) * Math.pow(t, 2) +
              p3.x * Math.pow(t, 3);
            break;
          }
        }
      }

      setTargetState({
        x: x - window.scrollX - 16,
        y: targetY - window.scrollY - 16,
        absoluteY: targetY,
        isTracking,
        rotation: window.scrollY * 0.2
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathData]);

  let d = "";
  if (pathData && pathData.segments.length > 0) {
    const segs = pathData.segments;
    d = `M ${segs[0].p0.x} ${segs[0].p0.y}`;
    for (let i = 0; i < segs.length; i++) {
      const { p1, p2, p3 } = segs[i];
      d += ` C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`;
    }
  }

  return (
    <>
      {pathData && (
        <svg
          className="absolute top-0 left-0 w-full pointer-events-none z-30 opacity-30"
          style={{ height: pathData.height }}
        >
          <defs>
            <mask id="trail-mask">
              <rect x="0" y="0" width="100%" height={Math.max(0, targetState.absoluteY)} fill="white" />
            </mask>
          </defs>
          <path
            d={d}
            fill="none"
            stroke="#0084FF"
            strokeWidth="2"
            strokeDasharray="6 6"
            mask="url(#trail-mask)"
          />
        </svg>
      )}
      <div
        className="fixed top-0 left-0 z-[45] pointer-events-none will-change-transform"
        style={{
          transform: `translate(${targetState.x}px, ${targetState.y}px)`,
          transition: targetState.isTracking ? 'transform 0.1s ease-out' : 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <div
          style={{ transform: `rotate(${targetState.rotation}deg)` }}
          className="transition-transform duration-100 ease-out will-change-transform"
        >
          <NarolaO className="h-8 w-8 drop-shadow-2xl scale-110" />
        </div>
      </div>
    </>
  );
}
