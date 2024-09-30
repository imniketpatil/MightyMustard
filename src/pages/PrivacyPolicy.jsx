import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrivacyPolicyComponent from "@/components/PrivacyPolicyComponent";
import WhatsAppButton from "@/components/WhatsAppButton";
import React, { useEffect } from "react";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <PrivacyPolicyComponent />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}

export default PrivacyPolicy;
