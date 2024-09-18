import React from "react";
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

export default function Companies() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-2 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-3 lg:max-w-none lg:grid-cols-4">
          {brandLogos.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white "
            >
              <img
                alt={brand.name}
                src={brand.image}
                className="max-h-16 w-auto object-contain aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
