import {
  FaHandshake,
  FaCheckCircle,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";

function WhoWeAre() {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 px-10 lg:px-20">
      <div className="text-center mb-12">
        {/* Headline */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Who We Are ?
        </h1>
      </div>

      {/* Paragraph */}
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
          At Mighty Mustard, we specialize in exporting high-quality,
          India-manufactured smartphones with a particular focus on iPhones to
          international markets. With a commitment to excellence, efficiency,
          and global customer satisfaction, we connect you with the best of
          India’s smartphone industry.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Our Mission Statement
        </h2>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
          To bridge India’s technological advancements with the world by
          exporting high-quality smartphones that exceed global expectations.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {/* Quality */}
        <div className="text-center">
          <FaCheckCircle className="text-6xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Quality
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            We ensure each smartphone meets international standards.
          </p>
        </div>

        {/* Integrity */}
        <div className="text-center">
          <FaHandshake className="text-6xl text-green-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Integrity
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Transparent, reliable, and ethical business practices.
          </p>
        </div>

        {/* Customer Focus */}
        <div className="text-center">
          <FaGlobe className="text-6xl text-yellow-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Customer Focus
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            We prioritize seamless service from inquiry to delivery.
          </p>
        </div>

        {/* Innovation */}
        <div className="text-center">
          <FaLightbulb className="text-6xl text-red-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Innovation
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Staying ahead with the latest technology and logistics solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
