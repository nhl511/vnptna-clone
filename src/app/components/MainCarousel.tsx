"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function MainCarousel({
  images,
}: {
  images: carouselImageType[];
}) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image: carouselImageType) => (
          <CarouselItem>
            <Image
              src={image.url}
              alt=""
              layout="responsive"
              width={100}
              height={50}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
