import React from "react";
import GridPattern from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import SliderCarousal from "./SliderCarousal";

function HomeBanner() {
  const handleClick = () => {
    const message = `Hello Mighty Mustard! I would like to inquire about products. Thank you!`;
    const encodedMessage = encodeURIComponent(message);

    // Replace 'PHONE_NUMBER' with the actual phone number (including country code)
    const phoneNumber = "+918484091132"; // e.g., '919876543210' for India
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10 lg:p-10">
      {/* Main content */}
      <div className="flex flex-col lg:flex-row">
        <div className="z-10 text-start space-y-5 flex-1">
          {/* Main headline */}
          <div>
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-black leading-snug">
              Bringing India’s Best Smartphones to the World
            </h1>
          </div>
          {/* Sub-headline */}
          <div>
            <p className="text-lg lg:text-xl font-medium text-gray-600 text-opacity-90">
              Your trusted partner for exporting premium iPhones and smartphones
              globally.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center items-center">
            {/* Get a Quote Button */}
            <div>
              <span
                onClick={handleClick} // Call handleClick function on click
                className="inline-block px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-200"
              >
                Get a Quote
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center z-10">
          <div className="mt-8 lg:mt-0 lg:ml-10 w-full max-w-lg">
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
