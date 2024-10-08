import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TermOfUseComponent from "@/components/TermOfUseComponent";
import WhatsAppButton from "@/components/WhatsAppButton";
import React, { useEffect } from "react";

function TermOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <TermOfUseComponent />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}

export default TermOfUse;
