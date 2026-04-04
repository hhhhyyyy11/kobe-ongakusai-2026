import React from "react";

interface WavePatternProps {
  fillColor?: string;
  className?: string;
  backgroundColor?: string;
}

export function WavePattern({
  fillColor = "#F59E0B",
  className = "",
  backgroundColor = "bg-kobe-light-blue",
}: WavePatternProps) {
  return (
    <div className={`absolute top-0 left-0 right-0 h-16 ${backgroundColor} ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C200,0 400,120 600,60 C800,0 1000,120 1200,60 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
