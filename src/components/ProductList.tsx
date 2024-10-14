import React from "react";
import ProductCard from "./ProductCard";
import { getProductsByServiceCate } from "@/apiRequests/product";

const ProductList = async ({ id }: { id: number }) => {
  const result = await getProductsByServiceCate(id);

  return (
    <div className="grid grid-cols-12 gap-4">
      {result?.data?.map((item: internetProduct) => (
        <ProductCard key={item.P_ID} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
