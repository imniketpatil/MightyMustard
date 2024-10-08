import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col mx-3 bg-white rounded-lg">
        <div className="w-full draggable">
          <div className="container flex flex-col mx-auto">
            <div className="flex flex-col items-center w-full my-10">
              <span className="mb-8">
                {/* Placeholder for SVG */}

                <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                  <img src={Logo} alt="Logo" className="h-14" />
                  <Link to="/">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                      Mighty Mustard
                    </span>
                  </Link>
                </div>
              </span>
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                  <Link to="/terms-and-condition">
                    <span
                      href="javascript:void(0)"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Terms And Condition
                    </span>
                  </Link>

                  <Link to="/refund-policy">
                    <span
                      href="javascript:void(0)"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Refund Policy
                    </span>
                  </Link>
                  <Link to="/privacy-policy">
                    <span
                      href="javascript:void(0)"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Privacy Policy
                    </span>
                  </Link>
                  <Link to="/terms-of-use">
                    <span
                      href="javascript:void(0)"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Term Of Use
                    </span>
                  </Link>
                </div>
                <div className="flex items-center gap-8">
                  <span
                    href="javascript:void(0)"
                    className="text-grey-700 hover:text-grey-900"
                  >
                    {/* Placeholder for icon */}
                    <div className="text-2xl text-gray-600">
                      <a
                        href="https://www.instagram.com/mightymustardprivatelimited?igsh=MTAxZGQyeXY2Z3dsOA=="
                        target="_black"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </span>
                  <span
                    href="javascript:void(0)"
                    className="text-grey-700 hover:text-grey-900"
                  >
                    {/* Placeholder for icon */}
                    <div className="text-2xl text-gray-600">
                      <a href="https://wa.me/+918484091132" target="_blank">
                        <FaWhatsapp />
                      </a>
                    </div>
                  </span>
                  <span
                    href="javascript:void(0)"
                    className="text-grey-700 hover:text-grey-900"
                  >
                    {/* Placeholder for icon */}
                    <div className="text-2xl text-gray-600">
                      <IoMailSharp />
                    </div>
                  </span>
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
