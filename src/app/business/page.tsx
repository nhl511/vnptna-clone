import React from "react";
import MainCarousel from "../components/MainCarousel";
import Products from "../components/Products";
import { getBanner } from "@/services/apis/partner.service";

const BusinessPage = async () => {
  const banner = await getBanner(2);
  return (
    <div>
      <MainCarousel images={banner} />
      {/* <Products products={products2} /> */}
    </div>
  );
};

export default BusinessPage;
