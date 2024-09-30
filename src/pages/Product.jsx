import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductPage from "../components/ProductPage";
import React, { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <ProductPage />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}

export default Product;
