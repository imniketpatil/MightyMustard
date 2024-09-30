import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RefundPolicyComponent from "@/components/RefundPolicyComponent";
import WhatsAppButton from "@/components/WhatsAppButton";
import React, { useEffect } from "react";

function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <RefundPolicyComponent />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}

export default RefundPolicy;
