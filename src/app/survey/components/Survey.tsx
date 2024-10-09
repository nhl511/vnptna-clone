"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import SurveyPhase from "./SurveyPhase";

const Survey = () => {
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
  const phase1 = [
    {
      title: "Internet",
      value: "1",
    },
    {
      title: "Internet - Truyền hình",
      value: "2",
    },
    {
      title: "Internet - Camera",
      value: "3",
    },
    {
      title: "Internet - TH - Di động",
      value: "4",
    },
    {
      title: "Truyền hình",
      value: "5",
    },
    {
      title: "Vinaphone",
      value: "6",
    },
  ];
  const phase2 = [
    {
      title: "Trên 6 người",
      value: "7",
    },
    {
      title: "4 – 6 người",
      value: "8",
    },
    {
      title: "Dưới 4 người",
      value: "9",
    },
  ];
  const phase3 = [
    {
      title: "Chung cư nhiều phòng hoặc nhà 3 -5 tầng",
      value: "10",
    },
    {
      title: "Nhà trên 5 tầng",
      value: "11",
    },
    {
      title: "Nhà 1-2 tầng",
      value: "12",
    },
  ];
  const phase4 = [
    {
      title: "Có",
      value: "13",
    },
    {
      title: "Không",
      value: "14",
    },
  ];
  return (
    <div>
      <Carousel setApi={setApi} opts={{ duration: 10, watchDrag: false }}>
        <CarouselContent>
          <CarouselItem>
            <SurveyPhase
              title="Bạn đang có nhu cầu sử dụng dịch vụ hoặc combo dịch vụ nào?"
              phase={phase1}
              current={current}
              count={count}
              api={api}
            />
          </CarouselItem>
          <CarouselItem>
            <SurveyPhase
              title="Nhà bạn có bao nhiêu người?"
              phase={phase2}
              current={current}
              count={count}
              api={api}
            />
          </CarouselItem>
          <CarouselItem>
            <SurveyPhase
              title="Nơi bạn ở có bao nhiêu tầng?"
              phase={phase3}
              current={current}
              count={count}
              api={api}
            />
          </CarouselItem>
          <CarouselItem>
            <SurveyPhase
              title="Bạn có nhu cầu sử dụng dịch vụ CAMERA quan sát không?"
              phase={phase4}
              current={current}
              count={count}
              api={api}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Survey;
