"use client";
import React from "react";
import Card from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Products = ({ products }: { products: productType[] }) => {
  return (
    <div className="xl:container xl:mx-auto mt-10">
      <h3 className="text-2xl font-bold text-center">
        CÁC SẢN PHẨM HOT HIỆN NAY
      </h3>

      <Carousel
        opts={{
          slidesToScroll: 3,
        }}
      >
        <CarouselContent>
          {products.map((product: productType) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Products;
