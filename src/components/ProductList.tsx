import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: internetProduct[] }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {products?.map((item: internetProduct) => (
        <ProductCard key={item.P_ID} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
