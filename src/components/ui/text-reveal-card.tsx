"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [cardMetrics, setCardMetrics] = useState<{ left: number, width: number }>({ 
    left: 0, 
    width: 0 
  });

  useEffect(() => {
    setIsClient(true);
    
    const updateCardMetrics = () => {
      if (cardRef.current) {
        const { left, width } = cardRef.current.getBoundingClientRect();
        setCardMetrics({ left, width });
      }
    };

    // Initial measurement
    updateCardMetrics();

    // Remeasure on window resize
    window.addEventListener('resize', updateCardMetrics);

    return () => {
      window.removeEventListener('resize', updateCardMetrics);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isClient) return;

    const clientX = 'touches' in event 
      ? event.touches[0]?.clientX 
      : (event as React.MouseEvent).clientX;

    if (clientX !== undefined && cardRef.current) {
      const relativeX = clientX - cardMetrics.left;
      const newWidthPercentage = Math.max(0, Math.min(100, (relativeX / cardMetrics.width) * 100));
      setWidthPercentage(newWidthPercentage);
    }
  };

  const handleMouseLeave = () => {
    setWidthPercentage(0);
  };

  // Prevent server-side render of animated content
  if (!isClient) {
    return (
      <div 
        ref={cardRef}
        className={cn(
          "bg-[#1d1c20] border border-white/[0.08] w-[40rem] rounded-lg p-8 relative overflow-hidden",
          className
        )}
      >
        {children}
        <div className="h-40 relative flex items-center overflow-hidden">
          <p className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238]">
            {text}
          </p>
        </div>
      </div>
    );
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseLeave}
      ref={cardRef}
      className={cn(
        "bg-[#1d1c20] border border-white/[0.08] w-[40rem] rounded-lg p-8 relative overflow-hidden",
        className
      )}
    >
      {children}

      <div className="h-40 relative flex items-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={{
            opacity: widthPercentage > 0 ? 1 : 0,
            clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
          }}
          transition={{ duration: 0.4 }}
          className="absolute bg-[#1d1c20] z-20 will-change-transform"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
            className="text-base sm:text-[3rem] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
        ></motion.div>

        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238]">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

// Remaining components stay the same as in the previous implementation
export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-white text-lg mb-2", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);