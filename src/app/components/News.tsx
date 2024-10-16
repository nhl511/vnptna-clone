"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";

import ControlCarouselInfi2 from "./ControlCarouselInfi2";

const News = ({ news }: { news: newsType[] }) => {
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
    <div className="bg-[var(--news-bg)] pt-10 pb-20 mt-10 px-4 xl:px-0">
      <div className="xl:container xl:mx-auto mt-10">
        <h3 className="text-2xl font-bold text-start mb-10">
          TIN TỨC - KHUYẾN MÃI
        </h3>

        <Carousel
          opts={{
            loop: true,
          }}
          className="mb-8"
          setApi={setApi}
        >
          <CarouselContent>
            {news.map((item: newsType) => (
              <CarouselItem
                key={item.SERVICE_ID}
                className="sm:basis-1/2 lg:basis-1/3"
              >
                <Link href={`/news/promotion-news/${item.SERVICE_ID}`}>
                  <NewsCard item={item} />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <ControlCarouselInfi2 current={current} count={count} parentApi={api} />
      </div>
    </div>
  );
};

export default News;
