import React from "react";
import { FlipWords } from "./ui/flip-words";
import {PlaceholdersAndVanishInputDemo} from '@/components/input';


export function FlipWordsDemo() {
  const words = ["Instagram", "Linkedin", "Twitter", "Github", "Snapchat", "Facebook"];

  return (
    <div className="min-h-[20rem] sm:min-h-[30rem] lg:h-[40rem] flex flex-col justify-center px-4 sm:px-8">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left text-white/80">
        Effortlessly connect with people around you.
        Discover their <FlipWords words={words} /> and turn <br className="hidden sm:block" /> nearby encounters into <br className="hidden sm:block" /> lasting connections!
      </div>
      <div className="mt-6 sm:mt-10">
        <p className="text-white font-semibold text-sm sm:text-base mb-4 bg-white/10 px-4 py-2 rounded-full inline-block">Drop in your email below. We will notify you when we launch.</p>
        <PlaceholdersAndVanishInputDemo/>
      </div>
    </div>
  );
}
