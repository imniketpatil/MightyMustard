import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductPage from "../components/ProductPage";
import React, { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQ from "@/components/FAQ";

function Product() {
  const model = localStorage.getItem("product");
  console.log(model);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [model]);
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <ProductPage />
          <FAQ />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}

export default Product;
