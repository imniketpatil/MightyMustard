import { FaCheckCircle, FaGlobe, FaTag, FaHeadset } from "react-icons/fa";

function WhyMightyMustard() {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 px-10 lg:px-20">
      <div className="text-center mb-12">
        {/* Headline */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Why Mighty Mustard?
        </h1>
      </div>

      {/* Icons & Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
        {/* Authentic Quality */}
        <div className="text-center">
          <FaCheckCircle className="text-6xl text-yellow-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Authentic Quality
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            We deliver certified, India-made iPhones and smartphones.
          </p>
        </div>

        {/* Global Distribution */}
        <div className="text-center">
          <FaGlobe className="text-6xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Global Distribution
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Efficient logistics that ensure timely delivery across continents.
          </p>
        </div>

        {/* Competitive Pricing */}
        <div className="text-center">
          <FaTag className="text-6xl text-green-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Competitive Pricing
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            We offer top-notch products at competitive prices by sourcing
            directly from India.
          </p>
        </div>

        {/* Dedicated Support */}
        <div className="text-center">
          <FaHeadset className="text-6xl text-red-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Dedicated Support
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Our customer service team ensures a smooth and hassle-free
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyMightyMustard;
