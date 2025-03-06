"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-72 h-72 rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="text-sm font-bold text-neutral-600 dark:text-white"
        >
          Walkby : Redifing connections
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/walkby-landing1.png"
            height="1000"
            width="1000"
            className="h-full w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
