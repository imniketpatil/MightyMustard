import React from "react";

function TermOfUseComponent() {
  return (
    <div className="flex justify-center py-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b pb-2">
          Terms of Use
        </h1>

        <section className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl font-semibold text-blue-600">
            1. Copyright and Trademark Information
          </h2>
          <p className="mt-2 text-gray-700">
            This website and its contents, including text, graphics, images,
            data, reports, and other materials provided through Mighty Musturd's
            services, are owned by Mighty Musturd, its affiliates, and
            licensors. These materials are protected under U.S. copyright,
            trademark laws, and international conventions. The trademarks
            “Mighty Musturd” and its logo are registered trademarks of Mighty
            Musturd, Inc. Other product names or logos are also trademarks of
            Mighty Musturd. The absence of a name from this list does not waive
            Mighty Musturd's trademark rights.
          </p>
        </section>

        <section className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl font-semibold text-blue-600">
            2. Software as a Service
          </h2>
          <h3 className="mt-2 font-semibold">2.1 Public & Private Access</h3>
          <p className="mt-1 text-gray-700">
            Mighty Musturd provides various services accessible through this
            website. Access may be public, trial-based, or subscription-based.
            You agree to use only services that are publicly available or for
            which you have a valid subscription.
          </p>
          <h3 className="mt-2 font-semibold">2.2 Private Subscription</h3>
          <p className="mt-1 text-gray-700">
            Subscription to Mighty Musturd's database is strictly confidential
            and for self-use only.
          </p>
          <h3 className="mt-2 font-semibold">
            2.3 Mighty Musturd Does Not Provide Commercial Advice
          </h3>
          <p className="mt-1 text-gray-700">
            The content is for informational purposes only. Mighty Musturd
            collects data but does not guarantee its accuracy or completeness.
          </p>
          <h3 className="mt-2 font-semibold">
            2.4 Addition, Modification, or Deletion of Data
          </h3>
          <p className="mt-1 text-gray-700">
            Data availability may change based on legal restrictions and other
            factors.
          </p>
        </section>

        <section className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl font-semibold text-blue-600">
            3. User Guidelines
          </h2>
          <h3 className="mt-2 font-semibold">3.1 Intended Users</h3>
          <p className="mt-1 text-gray-700">
            Mighty Musturd.com and App.Mighty Musturd.com are intended for
            end-users involved in importing and exporting. Market research
            companies must register for a dedicated plan.
          </p>
          <h3 className="mt-2 font-semibold">3.2 Prohibited Activities</h3>
          <p className="mt-1 text-gray-700">
            Data scraping, mining, or unauthorized collection of data from
            Mighty Musturd.com is prohibited. Users must utilize designated data
            download features.
          </p>
          <h3 className="mt-2 font-semibold">3.3 Access Restrictions</h3>
          <p className="mt-1 text-gray-700">
            Access is restricted to authorized users. Unauthorized access or
            tampering is prohibited.
          </p>
          <h3 className="mt-2 font-semibold">3.4 Monitoring</h3>
          <p className="mt-1 text-gray-700">
            Mighty Musturd may monitor data availability and usage.
          </p>
          <h3 className="mt-2 font-semibold">3.5 Rights to Use</h3>
          <p className="mt-1 text-gray-700">
            Your right to use the website is limited, revocable, and
            non-transferable. You are responsible for obtaining necessary
            equipment and internet service.
          </p>
          <h3 className="mt-2 font-semibold">3.6 Penalties for Violations</h3>
          <p className="mt-1 text-gray-700">
            Violations may lead to revocation of access and legal actions.
          </p>
          <h3 className="mt-2 font-semibold">3.7 Notification Requirement</h3>
          <p className="mt-1 text-gray-700">
            You must notify Mighty Musturd of any unauthorized access or
            security breaches.
          </p>
          <h3 className="mt-2 font-semibold">3.8 Liability for Violations</h3>
          <p className="mt-1 text-gray-700">
            Users violating these terms are liable for damages incurred by
            Mighty Musturd.
          </p>
        </section>

        <section className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl font-semibold text-blue-600">
            4. Copyright Infringement Notice and Procedures
          </h2>
          <p className="mt-2 text-gray-700">
            To report copyright infringement, provide detailed information about
            the copyright, infringing material, contact details, and a
            declaration of good faith belief regarding the infringement.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermOfUseComponent;
