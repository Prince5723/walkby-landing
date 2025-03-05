"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-between  bg-[#0E0E10]  rounded-2xl ">
      <TextRevealCard
        text="Saw them, but didn't ask"
        revealText="We got you covered!"
      >
        <TextRevealCardTitle>
          Connections at your fingertips.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          We let you know the socials of people around you. Spread the word!
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
