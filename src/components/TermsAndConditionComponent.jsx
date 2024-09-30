import React from "react";
import {
  FaBalanceScale,
  FaGlobe,
  FaTrademark,
  FaShippingFast,
  FaLock,
  FaHandshake,
  FaShieldAlt,
  FaRecycle,
  FaMoneyBillWave,
} from "react-icons/fa";

function TermsAndConditionComponent() {
  return (
    <div className="flex justify-center py-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b pb-2">
          Compliance and Regulatory Policies
        </h1>
        <div className="space-y-6">
          {/* Compliance with Export Laws */}
          <div className="border-l-4 border-blue-500 pl-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaBalanceScale className="text-blue-500 mr-2" />
              Compliance with Export Laws
            </h2>
            <p className="text-gray-700 mb-2">
              Mighty Misturd ensures full adherence to all applicable export
              laws and regulations.
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Adherence to Indian Export Regulations:</strong> Full
                compliance with the Foreign Trade Policy (FTP) and Customs Act
                of 1962, obtaining necessary licenses and permissions.
              </li>
              <li>
                <strong>Destination Country Compliance:</strong> Ensure
                compliance with the import laws of Dubai (UAE) and Russia,
                including certification requirements and duties.
              </li>
              <li>
                <strong>Sanctions and Embargoes:</strong> Stay updated on
                international sanctions that affect trade with Russia, adhering
                to restrictions by authorities like the UN or EU.
              </li>
            </ul>
          </div>

          {/* Intellectual Property and Trademark Protection */}
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaTrademark className="text-green-500 mr-2" />
              Intellectual Property and Trademark Protection
            </h2>
            <p className="text-gray-700 mb-2">
              We prioritize safeguarding intellectual property rights.
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Brand Protection:</strong> Secure necessary permissions
                from smartphone brands, such as Apple, for authorized export and
                sale.
              </li>
              <li>
                <strong>Anti-Counterfeit Measures:</strong> Strict measures to
                prevent counterfeit products, ensuring all smartphones are
                verified with proper documentation.
              </li>
            </ul>
          </div>

          {/* Warranties and After-Sales Support */}
          <div className="border-l-4 border-yellow-500 pl-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaHandshake className="text-yellow-500 mr-2" />
              Warranties and After-Sales Support
            </h2>
            <p className="text-gray-700 mb-2">
              Our commitment to post-sale satisfaction includes clear policies
              on warranties and returns.
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Warranty Policies:</strong> Clearly defined terms,
                specifying whether warranties are international or local.
              </li>
              <li>
                <strong>Return and Refund Policies:</strong> Transparent
                policies compliant with the laws of India and destination
                countries.
              </li>
            </ul>
          </div>

          {/* Data Protection and Privacy Laws */}
          <div className="border-l-4 border-red-500 pl-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaLock className="text-red-500 mr-2" />
              Data Protection and Privacy Laws
            </h2>
            <p className="text-gray-700 mb-2">
              We handle sensitive data in strict compliance with global
              regulations.
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Customer Data Handling:</strong> Compliance with India's
                Digital Personal Data Protection Act and GDPR for exports to
                regions under its jurisdiction.
              </li>
              <li>
                <strong>Secure Transactions:</strong> Online transactions are
                secured and comply with international anti-money laundering
                laws.
              </li>
            </ul>
          </div>

          {/* Shipping and Logistics Policy */}
          <div className="border-l-4 border-purple-500 pl-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaShippingFast className="text-purple-500 mr-2" />
              Shipping and Logistics Policy
            </h2>
            <p className="text-gray-700 mb-2">
              Our logistics are streamlined for efficiency and legal compliance.
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Shipping Terms:</strong> Clear Incoterms (FOB, CIF,
                etc.) to define shipping responsibility.
              </li>
              <li>
                <strong>Customs Clearance:</strong> Proper documentation for
                customs clearance, partnering with trusted shipping companies to
                avoid delays.
              </li>
            </ul>
          </div>

          {/* Pricing and Payment Policies */}
          <div className="border-l-4 border-teal-500 pl-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaMoneyBillWave className="text-teal-500 mr-2" />
              Pricing and Payment Policies
            </h2>
            <p className="text-gray-700 mb-2">
              Our pricing policies are clear and aligned with international
              trade practices.
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Currency and Exchange Rates:</strong> Transactions
                handled in a defined currency with policies for exchange rate
                fluctuations.
              </li>
              <li>
                <strong>Payment Terms:</strong> Secured payment terms (advance,
                LoC), and clear penalties for late or non-payment.
              </li>
            </ul>
          </div>

          {/* Corporate Social Responsibility */}
          <div className="border-l-4 border-indigo-500 pl-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaRecycle className="text-indigo-500 mr-2" />
              Corporate Social Responsibility (CSR)
            </h2>
            <p className="text-gray-700 mb-2">
              We are committed to ethical and sustainable business practices.
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Ethical Sourcing:</strong> Ensuring compliance with
                labor and environmental laws in sourcing.
              </li>
              <li>
                <strong>Sustainability:</strong> Implementing policies for
                recycling and e-waste management.
              </li>
            </ul>
          </div>

          {/* Anti-Corruption and Anti-Bribery */}
          <div className="border-l-4 border-orange-500 pl-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaShieldAlt className="text-orange-500 mr-2" />
              Anti-Corruption and Anti-Bribery
            </h2>
            <p className="text-gray-700 mb-2">
              We maintain strict compliance with international anti-corruption
              laws, including the FCPA and UK Bribery Act.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditionComponent;
