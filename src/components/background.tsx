import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import {FlipWordsDemo} from '@/components/flip-words';
import { TextRevealCardPreview } from "@/components/text-vanish";
import { ThreeDCardDemo } from '@/components/3d-card';
import { ThreeDCardDemo1 } from '@/components/3d-card1';

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 overflow-y-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mx-4 sm:mx-8 lg:mx-0 py-8 lg:py-0 min-h-screen">
          <FlipWordsDemo/>
          <div className="flex flex-col items-center w-full lg:w-auto mt-8 lg:mt-0 px-4 sm:px-8">
            <div className="w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-none">
              <TextRevealCardPreview/> 
            </div>
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-4">
              <ThreeDCardDemo/>
              <ThreeDCardDemo1/>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
