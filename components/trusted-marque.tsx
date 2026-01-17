"use client";

import React from "react";

interface TrustedLogosMarqueeProps {
  title: string;
  logos: string[];
  height?: number; // height of the logos in px
  speed?: number; // animation duration in seconds
  bgColor?: string; // background color
}

export const TrustedLogosMarquee: React.FC<TrustedLogosMarqueeProps> = ({
  title,
  logos,
  height = 80,
  speed = 20,
  bgColor = "bg-white",
}) => {
  return (
    <section className={`py-12 md:py-20 px-4 ${bgColor}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        {title}
      </h2>

      <div className="overflow-hidden relative w-full">
        <div
          className="flex gap-10 absolute whitespace-nowrap"
          style={{
            animation: `marquee ${speed}s linear infinite`,
          }}
        >
          {/* Repeat logos for infinite loop effect */}
          {logos.concat(logos).map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="partner logo"
              className={`h-[${height}px] w-auto object-contain`}
            />
          ))}
        </div>

        {/* Marquee Animation */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
};
