import React from "react";
import GridPattern from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import SliderCarousal from "./SliderCarousal";

function HomeBanner() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10 lg:p-20 ">
      {/* Main content */}
      <div className="flex flex-col lg:flex-row">
        <div className="z-10 text-start space-y-5 flex-1">
          {/* Main headline */}
          <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white">
            Bringing India’s Best Smartphones to the World
          </h1>

          {/* Sub-headline */}
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Your trusted partner for exporting premium iPhones and smartphones
            globally.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center items-center">
            {/* Learn More Button */}
            <a
              href="#about-us"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
            >
              Learn More
            </a>

            {/* Get a Quote Button */}
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-200"
            >
              Get a Quote
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className=" mt-8 lg:mt-0 lg:ml-10 w-full max-w-lg">
            <SliderCarousal />
          </div>
        </div>
      </div>

      {/* Animated Grid Pattern */}
      <GridPattern
        numSquares={100}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[100%] skew-y-12"
        )}
      />
    </div>
  );
}

export default HomeBanner;
