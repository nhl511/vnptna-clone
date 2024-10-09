import React from "react";
import MainCarousel from "../components/MainCarousel";
import Products from "../components/Products";

const getBanner = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
      `/api/v1/portal/partner/getBanner?partner_id=66&pos=2&type=2`
  );
  const result = await res.json();
  return result.data;
};

const BusinessPage = async () => {
  const banner = await getBanner();
  return (
    <div>
      <MainCarousel images={banner} />
      {/* <Products products={products2} /> */}
    </div>
  );
};

export default BusinessPage;
