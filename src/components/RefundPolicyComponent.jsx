import React from "react";

function RefundPolicyComponent() {
  return (
    <div className="flex justify-center py-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b pb-2">
          100% Money Back Guarantee
        </h1>

        <section className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl font-semibold text-blue-600">
            Your Satisfaction, Our Goal
          </h2>
          <p className="mt-2 text-gray-700">
            At Mighty Mustard, your satisfaction is our priority. We're
            confident in the quality of our export-import shipment data and are
            pleased to offer a straightforward, 100% money-back guarantee within
            the first 3 days of your purchase. No questions asked—if you meet
            the following simple conditions:
          </p>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>The data you received is incorrect.</li>
            <li>Your download and summary usage do not exceed 200 points.</li>
            <li>You have made fewer than 30 searches.</li>
            <li>Your payment was processed online via PayPal/Stripe.</li>
          </ul>
        </section>

        <section className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl font-semibold text-blue-600">
            How to Claim Your Refund
          </h2>
          <p className="mt-2 text-gray-700">
            Easily request a refund by submitting a ticket through our app. Our
            dedicated team will promptly assist you with the process via
            PayPal/Stripe.
          </p>
        </section>

        <section className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl font-semibold text-blue-600">Please Note</h2>
          <p className="mt-2 text-gray-700">
            Our guarantee covers most of our services; however, it excludes
            refunds for contact profiles and information, and changes in data
            coverage and availability of any specific country’s data due to
            external policies or circumstances.
          </p>
        </section>

        <section className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl font-semibold text-blue-600">
            Your Feedback is Precious
          </h2>
          <p className="mt-2 text-gray-700">
            We will require explanations for refunds; your feedback is valuable
            for enhancing our services. We aim for your complete satisfaction
            and continuously evolve our services based on customer insights.
          </p>
        </section>
      </div>
    </div>
  );
}

export default RefundPolicyComponent;
