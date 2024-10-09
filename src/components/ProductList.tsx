import React from "react";
import ProductCard from "./ProductCard";

const ProductList = async ({ id }: { id: number }) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
      `/api/v1/portal/product/getProductsByServiceCate?partner_id=66&service_cate_id=${id}`
  );
  const result = await res.json();

  return (
    <div className="grid grid-cols-12 gap-4">
      {result?.data?.map((item: internetProduct) => (
        <ProductCard key={item.P_ID} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
