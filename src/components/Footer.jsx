import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col mx-3 bg-white rounded-lg">
        <div className="w-full draggable">
          <div className="container flex flex-col mx-auto">
            <div className="flex flex-col items-center w-full my-10">
              <span className="mb-8">
                {/* Placeholder for SVG */}
                <div className="text-6xl text-purple-600">Mighty Mustard</div>
              </span>
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                  <a
                    href="javascript:void(0)"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Legal Policy
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Terms and Conditions
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </div>
                <div className="flex items-center gap-8">
                  <a
                    href="javascript:void(0)"
                    className="text-grey-700 hover:text-grey-900"
                  >
                    {/* Placeholder for icon */}
                    <div className="text-2xl text-gray-600">
                      <FaInstagram />
                    </div>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-grey-700 hover:text-grey-900"
                  >
                    {/* Placeholder for icon */}
                    <div className="text-2xl text-gray-600">
                      <FaWhatsapp />
                    </div>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-grey-700 hover:text-grey-900"
                  >
                    {/* Placeholder for icon */}
                    <div className="text-2xl text-gray-600">
                      <IoMailSharp />
                    </div>
                  </a>
                  {/* Repeat the above block for additional icons */}
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-base font-normal leading-7 text-center text-grey-700">
                  2024 Mighty Mustard. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
