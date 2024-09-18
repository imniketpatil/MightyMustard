import React from "react";
import BoxReveal from "./magicui/box-reveal";
import { BrandWeExportGlobe } from "./BrandWeExportGlobe";

const slugs = [
  "apple",
  "samsung",
  "google",
  "oneplus",
  "xiaomi",
  "oppo",
  "vivo",
  "huawei",
  "nokia",
  "sony",
  "lg",
  "motorola",
  "asus",
  "lenovo",
  "honor",
  "blackberry",
  "panasonic",
  "realme",
  "zte",
  "htc",
  "micromax",
  "infinix",
  "meizu",
];

export default function BrandsWeExport() {
  return (
    <section className="relative w-full py-16 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between bg-gray-100 rounded-lg shadow-md">
      {/* Title Section */}
      <div className="text-center lg:text-left flex flex-col justify-center lg:max-w-md mb-12 lg:mb-0">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Brands We Export
          </h2>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="mt-4 text-lg text-gray-600 max-w-lg">
            We proudly export smartphones from the world's leading mobile
            companies, offering the best devices globally.
          </p>
        </BoxReveal>
      </div>

      {/* Brand Logos Globe Section */}
      <div className="w-full max-w-3xl flex justify-center items-center relative lg:ml-12">
        <BrandWeExportGlobe />
        {/* Optional animated background or glow effect */}
        <div className="absolute rounded-full "></div>
      </div>
    </section>
  );
}
