import React from "react";
import { FlipWords } from "./ui/flip-words";
import {PlaceholdersAndVanishInputDemo} from '@/components/input';


export function FlipWordsDemo() {
  const words = ["Instagram", "Linkedin", "Twitter", "Github", "Snapchat", "Onlyfans"];

  return (
    <div className="h-[40rem] flex flex-col justify-center px-4">
      <div className="text-5xl font-bold text-left text-white/80">
        Effortlessly connect with 
        <br /> people around you. Discover <br /> their 
        <FlipWords words={words} />
         and turn <br /> nearby encounters into <br /> lasting connections!
      </div>
      <div className="mt-10">
        <PlaceholdersAndVanishInputDemo/>
      </div>
    </div>
  );
}
