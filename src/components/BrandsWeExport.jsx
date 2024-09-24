import React from "react";
import BoxReveal from "./magicui/box-reveal";
import { BrandWeExportGlobe } from "./BrandWeExportGlobe";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import huawei from "../assets/huawei.svg";
import motorola from "../assets/motorola.svg";
import nokia from "../assets/nokia.svg";
import oneplus from "../assets/oneplus.svg";
import oppo from "../assets/oppo.svg";
import samsung from "../assets/samsung.svg";
import sony from "../assets/sony.svg";
import vivo from "../assets/vivo.svg";
import xiaomi from "../assets/xiaomi.svg";

const brandLogos = [
  { name: "Apple", image: apple },
  { name: "Google", image: google },
  { name: "Huawei", image: huawei },
  { name: "Motorola", image: motorola },
  { name: "Nokia", image: nokia },
  { name: "OnePlus", image: oneplus },
  { name: "Oppo", image: oppo },
  { name: "Samsung", image: samsung },
  { name: "Sony", image: sony },
  { name: "Vivo", image: vivo },
  { name: "Xiaomi", image: xiaomi },
];

export default function BrandsWeExport() {
  return (
    <div className="relative w-full py-16 px-4 lg:px-20 bg-gray-100 rounded-lg shadow-md flex flex-col">
      <section className="flex flex-col lg:flex-row items-center mb-12">
        {/* Title Section */}
        <div className="w-full text-center mb-8 lg:mb-0 flex-1">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
            Brands We Export
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly export smartphones from the world's leading mobile
            companies, offering the best devices globally.
          </p>
        </div>

        {/* Globe Section */}
        <div className="w-full lg:w-1/2 flex justify-center flex-1">
          <BrandWeExportGlobe />
        </div>
      </section>

      {/* Brand Logos Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full mt-8">
        <div className="overflow-x-auto w-full py-4 flex gap-x-6 scrollbar-hide">
          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 w-full">
            {brandLogos.map((brand, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  alt={brand.name}
                  src={brand.image}
                  className="max-h-16 w-auto object-contain aspect-square mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
