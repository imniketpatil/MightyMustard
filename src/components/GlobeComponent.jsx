import React from "react";
import { ImportGlobe } from "./ImportGlobe";
import BlurIn from "./magicui/blur-in";

function GlobeComponent() {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10 lg:p-20">
        <div className="flex flex-col lg:flex-row">
          <div className="z-10 text-start space-y-5 flex-1">
            {/* Main headline */}
            <p className="text-5xl font-bold tracking-tight text-black dark:text-white">
              Expanding Global Reach with High-Quality Smartphones
            </p>

            {/* Sub-headline */}
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
              Proudly exporting India's finest smartphones to countries across
              the globe, including the US, UK, Australia, Canada, and more.
            </p>

            {/* Market details */}
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
              {" "}
              With a network spanning over 30 countries, we deliver premium
              devices to regions in Europe, North America, the Middle East, and
              Asia. Our focus on providing the best in mobile technology has
              made us a trusted supplier worldwide.
            </p>

            {/* Buttons */}
          </div>
          <div className="flex-1  justify-center items-center  hidden md:flex ">
            <div className="mt-8 lg:mt-0 lg:ml-10 w-full max-w-lg">
              <ImportGlobe />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobeComponent;
