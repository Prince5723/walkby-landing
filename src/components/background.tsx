import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import {FlipWordsDemo} from '@/components/flip-words';
import { TextRevealCardPreview } from "@/components/text-vanish";
import { ThreeDCardDemo } from '@/components/3d-card';
import { ThreeDCardDemo1 } from '@/components/3d-card1';

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0">
        <div className="flex flex-wrap items-center justify-between mx-8">
          <FlipWordsDemo/>
          <div className="flex flex-col items-center">
            <TextRevealCardPreview/> 
            <div className="w-full flex items-center justify-evenly mt-2">
              <ThreeDCardDemo/>
              <ThreeDCardDemo1/>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
