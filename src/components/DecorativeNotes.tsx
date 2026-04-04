import React from "react";
import { BsMusicNote } from "react-icons/bs";

export function DecorativeNotes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 md:top-28 md:left-12 text-3xl md:text-4xl text-kobe-dark-teal animate-bounce delay-100">
        <BsMusicNote />
      </div>
      <div className="absolute top-32 right-12 md:top-40 md:right-24 text-2xl md:text-3xl text-kobe-yellow animate-bounce delay-300">
        <BsMusicNote />
      </div>
      <div className="absolute bottom-32 left-24 md:bottom-40 md:left-32 text-4xl md:text-5xl text-kobe-dark-teal animate-bounce delay-500">
        <BsMusicNote />
      </div>
      <div className="absolute bottom-20 right-16 md:bottom-24 md:right-20 text-3xl md:text-4xl text-kobe-yellow animate-bounce delay-700">
        <BsMusicNote />
      </div>
      <div className="absolute top-1/2 left-8 md:left-12 text-2xl md:text-3xl text-kobe-yellow/70 animate-bounce delay-900">
        <BsMusicNote />
      </div>
      <div className="absolute top-1/3 right-8 md:right-12 text-2xl md:text-3xl text-kobe-dark-teal/70 animate-bounce delay-1100">
        <BsMusicNote />
      </div>
    </div>
  );
}
