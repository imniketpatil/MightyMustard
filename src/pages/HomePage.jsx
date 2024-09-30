import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import GlobeComponent from "../components/GlobeComponent";
import WhoWeAre from "../components/WhoWeAre";
import WhyMightyMustard from "../components/WhyMightyMustard";
import Footer from "@/components/Footer";
import BrandsWeExport from "@/components/BrandsWeExport";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductHomePageComponent from "@/components/ProductHomePageComponent";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <HomeBanner />
      <GlobeComponent />
      <BrandsWeExport />
      {/* <Companies /> */}
      <ProductHomePageComponent />
      <WhoWeAre />
      <WhyMightyMustard />
      {/* <ProductPage /> */}
      {/* <ProductsList /> */}
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default HomePage;
