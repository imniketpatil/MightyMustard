import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TermsAndConditionComponent from "@/components/TermsAndConditionComponent";
import WhatsAppButton from "@/components/WhatsAppButton";
import React, { useEffect } from "react";

function TermsAndCondition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <TermsAndConditionComponent />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}

export default TermsAndCondition;
