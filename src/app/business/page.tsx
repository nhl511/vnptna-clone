import React from "react";
import MainCarousel from "../components/MainCarousel";
import { images2, products2 } from "@/data/data";
import Products from "../components/Products";

const BusinessPage = () => {
  return (
    <div>
      <MainCarousel images={images2} />
      <Products products={products2} />
    </div>
  );
};

export default BusinessPage;
