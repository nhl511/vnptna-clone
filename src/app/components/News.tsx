"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import NewsCard from "./NewsCard";
import Autoplay from "embla-carousel-autoplay";

const News = ({ news }: { news: newsType[] }) => {
  return (
    <div className="bg-[var(--news-bg)] pt-10 pb-20 mt-10">
      <div className="xl:container xl:mx-auto mt-10">
        <h3 className="text-2xl font-bold text-start mb-10">
          TIN TỨC - KHUYẾN MÃI
        </h3>

        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {news.map((item: newsType) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <NewsCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default News;
