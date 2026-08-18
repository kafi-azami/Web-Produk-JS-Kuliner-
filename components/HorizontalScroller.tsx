"use client";

import { useRef } from "react";

type HorizontalScrollerProps = {
  children: React.ReactNode;
};

export default function HorizontalScroller({ children }: HorizontalScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <div className="group relative">
      <div
        ref={scrollRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Geser ke kiri"
        className="absolute left-0 top-1/2 hidden -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-katering-dark opacity-0 shadow-card ring-1 ring-katering-light/50 transition hover:bg-white group-hover:opacity-100 sm:flex"
      >
        <ChevronIcon direction="left" />
      </button>

      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Geser ke kanan"
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-2 items-center justify-center rounded-full bg-white/90 p-2 text-katering-dark opacity-0 shadow-card ring-1 ring-katering-light/50 transition hover:bg-white group-hover:opacity-100 sm:flex"
      >
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}