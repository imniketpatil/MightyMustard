import React, { useState, useRef, useEffect } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState([]);

  const answerRefs = useRef([]);

  useEffect(() => {
    const newHeights = answerRefs.current.map((ref) => ref.scrollHeight);
    setHeights(newHeights);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Is international shipping available?",
      answer:
        "Yes, we ship to Dubai, Russia, and other international locations.",
    },
    {
      question: "Are all iPhones genuine and new?",
      answer:
        "Yes, all iPhones are 100% genuine and sourced through authorized channels.",
      icon: KeyboardArrowDownOutlinedIcon,
    },
    {
      question: "Do the iPhones come with a warranty?",
      answer:
        "Yes, they come with an international warranty, subject to the brand’s policies in your region.",
    },
    {
      question: "Can I order in bulk?",
      answer:
        " Absolutely! Use the Target Price to inquire about bulk pricing and availability.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Shipping times vary by destination. Typically, delivery to Dubai and Russia takes 7-14 business days.",
    },
    {
      question: "Are all models Made in India?",
      answer: "Yes, all iPhones listed on our site are manufactured in India",
    },
    {
      question: "What payment methods do you accept? ",
      answer:
        "We accept bank transfers, Letters of Credit, and other secure payment methods.",
    },
  ];

  return (
    <>
      <div className="lg:container lg:mx-auto  py-12 px-4 font-body">
        <h1 className="text-center  lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
          FAQ's
        </h1>

        <div className="lg:mt-12 bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
          <div className="flex justify-between md:flex-row flex-col">
            <div className="md:mb-0 mb-8 md:text-left text-center">
              <h2 className="font-medium  text-xl leading-5 text-gray-800 lg:mb-2 mb-4">
                Question
              </h2>
              <p className="font-normal text-sm lg:text-md leading-5 text-gray-600 md:w-full md:ml-0 w-11/12 mx-auto md:font-semibold ">
                If you don’t find your answer,
                <br /> Please contact us, <br />
                We’ll be more than happy to assist you.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-slate-200 md:justify-center justify-center items-center px-4 py-3 w-full ">
                <a
                  href="https://wa.me/+918484091132"
                  target="_black"
                  className=" outline-none relative inline-flex items-center justify-center leading-normal no-underline  py-2 pr-4 pl-3  text-slate-700 font-sans font-bold text-sm uppercase hover:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group lg:text-lg"
                >
                  Get In Touch
                  <svg
                    className="icon icon-tabler icon-tabler-arrow-up-right"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-8/12 w-full mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} onClick={() => toggleFAQ(index)}>
              <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

              <div className="w-full md:px-6 hover:cursor-pointer">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="flex justify-center items-center  font-medium text-md lg:text-lg leading-6 text-gray-800">
                      <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 font-semibold text-gray-800">
                        Q{index + 1}.
                      </span>
                      {faq.question}
                    </p>
                  </div>
                  <KeyboardArrowDownOutlinedIcon
                    className={`h-6 w-6 text-slate-900 transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <div
                  ref={(el) => (answerRefs.current[index] = el)}
                  style={{
                    maxHeight: activeIndex === index ? heights[index] : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p className="text-md lg:text-xl leading-6 text-gray-600 font-normal mt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <hr className="w-full lg:mt-10 my-8" />
        </div>
      </div>
    </>
  );
};

export default FAQ;
