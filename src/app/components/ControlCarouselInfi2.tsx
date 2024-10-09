import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useEffect } from "react";

// Utility function to handle negative modulus
const mod = (n: number, m: number) => ((n % m) + m) % m;

const ControlCarouselInfi2 = ({
  parentApi,
  count,
  current,
}: {
  parentApi: any;
  count: number;
  current: number;
}) => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (api && current > 0) {
      api.scrollTo(mod(current - 1, count));
    }
  }, [current, api, count]);

  return (
    <div className="flex justify-center py-4">
      <Carousel
        className="w-[200px]"
        setApi={setApi}
        opts={{
          watchDrag: false,
          slidesToScroll: 1,
          loop: true,
        }}
      >
        <CarouselContent className="flex items-center">
          {Array.from({ length: count }, (_, index) => {
            const realIndex = (index + 1) % count;

            return (
              <CarouselItem key={index} className="basis-1/5">
                <div
                  className={`cursor-pointer rounded-full transition-all duration-300 hover:scale-110 ${
                    current === realIndex ||
                    (realIndex === 0 && current === count)
                      ? "bg-blue-400 w-[16px] h-[16px]"
                      : mod(current + 2, count) === realIndex ||
                        mod(current - 2, count) === realIndex
                      ? "bg-gray-200 w-[12px] h-[12px]"
                      : "bg-gray-300 w-[14px] h-[14px]"
                  } `}
                  onClick={() => {
                    if (parentApi && realIndex !== current) {
                      parentApi.scrollTo(index);
                    }
                  }}
                ></div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ControlCarouselInfi2;
