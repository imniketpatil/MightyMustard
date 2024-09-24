import React from "react";
import {
  FaLock,
  FaCookie,
  FaInfoCircle,
  FaShieldAlt,
  FaAdjust,
} from "react-icons/fa";

function PrivacyPolicyComponent() {
  return (
    <div className="flex justify-center py-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b pb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-6">
          Mighty Misturd is committed to safeguarding your privacy. We request
          you to read the following 'privacy policy' to understand how your
          personal & business information will be treated, as they make full use
          of our services to their benefit. This policy is applicable only to
          the website operated by Mighty Misturd and not by any other company.
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaInfoCircle className="text-blue-500 mr-2" />
              Types of Information Collected
            </h2>
            <p className="text-gray-700">
              In connection with your use of our site, we ask for and may
              collect a variety of information from and about you in different
              ways. For example, when you register to use our site, we ask for
              and store your and/or your business' name, address, email address,
              and other identifying contact data. In addition, our web servers
              automatically collect the IP addresses from which you accessed the
              site. We may also collect the information you disclose in chat
              rooms.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaCookie className="text-green-500 mr-2" />
              Use of Cookies
            </h2>
            <p className="text-gray-700">
              Use of our site requires that you accept the use of cookies, which
              are small data files that our website sends to your browser for
              storage on your computer's hard drive. We use cookies to protect
              confidential data, track activity at our site, and better serve
              your needs and interests.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaAdjust className="text-yellow-500 mr-2" />
              Use of Information
            </h2>
            <p className="text-gray-700">
              We use your personally identifying information to identify you as
              a user of the site, to improve your service, and to improve your
              experience with the site. We may use your email address to contact
              you directly regarding services or products that we believe may be
              of interest to you. We may also associate your personally
              identifying information with information we collect about your
              preferences and activities at the site, such as the particular
              pages you request at the site and purchases or other transactions
              you effect through the site. We may vary the content you receive
              in future visits to the site based on your preferences and
              activities.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaShieldAlt className="text-red-500 mr-2" />
              Security
            </h2>
            <p className="text-gray-700">
              We use industry-standard encryption methods to transmit your
              personal registration information from your computer to ours
              across the Internet, and we restrict access to any transactional
              portions of our site to computers running web browsers that
              support Secure Socket Layer ("SSL") protocol. Please remember that
              you play a valuable part in security as well. Your password to
              access our site, which you select at registration, should never be
              shared with anyone and should be changed frequently. And, after
              you have finished using our site, you should log off and exit your
              browser so no unauthorized persons can use our site with your name
              and account information. Regardless of the precautions taken by
              you or by us, “perfect security” does not exist on the Internet.
              We cannot ensure or warrant the security of any information you
              transmit to us, and you transmit such information at your own
              risk.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center">
              <FaLock className="text-purple-500 mr-2" />
              Changes to Privacy Policy
            </h2>
            <p className="text-gray-700">
              It may be necessary from time to time for us to modify this policy
              to reflect changes in the way we collect and use information or
              changes in privacy-related laws, regulations, and industry
              standards. Accordingly, we reserve the right to change this policy
              at any time by posting the revised policy on this website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyComponent;
