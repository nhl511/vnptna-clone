"use client";
import React from "react";
import Card from "./Card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import ControlCarouselInfi2 from "./ControlCarouselInfi2";

const Products = ({ products }: { products: internetProduct[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="xl:container xl:mx-auto mt-20  px-4 xl:px-0">
      <h3 className="text-2xl font-bold text-center">
        CÁC SẢN PHẨM HOT HIỆN NAY
      </h3>
      <hr className="my-5" />
      <Carousel
        setApi={setApi}
        opts={{
          slidesToScroll: 1,
          loop: true,
          breakpoints: {
            "(min-width: 640px)": { slidesToScroll: 2 },
            "(min-width: 1024px)": { slidesToScroll: 3 },
          },
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4 lg:-ml-6 xl-ml-12">
          {products.map((product: internetProduct) => (
            <CarouselItem
              key={product.P_ID}
              className="xs:basis-1/1 sm:basis-1/2 lg:basis-1/3 pl-2 md:pl-4 lg:pl-6 xl:pl-12"
            >
              <Card product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* <ControlCarousel current={current} count={count} api={api} /> */}
      {/* <ControlCarouselInfi api={api} /> */}
      <ControlCarouselInfi2 count={count} parentApi={api} current={current} />
    </div>
  );
};

export default Products;
