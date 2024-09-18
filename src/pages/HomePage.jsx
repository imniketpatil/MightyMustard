import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import Home from "../components/Home";
import { ImportGlobe } from "../components/ImportGlobe";
import GlobeComponent from "../components/GlobeComponent";
import WhoWeAre from "../components/WhoWeAre";
import WhyMightyMustard from "../components/WhyMightyMustard";
import ProductsList from "@/components/ProductsList";
import Footer from "@/components/Footer";
import BrandsWeExport from "@/components/BrandsWeExport";

function HomePage() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <GlobeComponent />
      <WhoWeAre />
      <WhyMightyMustard />
      {/* <ProductsList /> */}
      <BrandsWeExport />
      <Footer />
    </>
  );
}

export default HomePage;
