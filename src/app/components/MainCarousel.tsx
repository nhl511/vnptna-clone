"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ControlCarousel from "./ControlCarousel";

export default function MainCarousel({ images }: { images: bannerType[] }) {
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
    <div>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image: bannerType) => (
            <CarouselItem key={image.BANNER_ID}>
              <Image
                src={image.BANNER_SOURCE}
                alt=""
                layout="responsive"
                width={100}
                height={50}
                loader={(item) => item.src}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <ControlCarousel current={current} count={count} api={api} />
    </div>
  );
}
