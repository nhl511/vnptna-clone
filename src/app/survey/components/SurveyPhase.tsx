import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import React from "react";

const SurveyPhase = ({
  title,
  phase,
  current,
  count,
  api,
}: {
  title: string;
  phase: any;
  current: number;
  count: number;
  api: any;
}) => {
  return (
    <div className="bg-purple-100 py-10">
      <div className="xl:container mx-auto grid grid-cols-12 px-4 xl:px-0">
        <div className="col-span-12 xl:col-span-8">
          <h3 className="text-2xl font-bold mb-5">{title}</h3>
          <p className="mb-5 text-sm text-orange-600">
            (*) Vui lòng chọn 1 câu trả lời
          </p>
          <div className="mb-10">
            <RadioGroup
              className="flex flex-col gap-5 h-[300px]"
              defaultValue=""
            >
              {phase.map((item: any) => (
                <div className="flex items-center space-x-2" key="">
                  <RadioGroupItem
                    className="w-[20px] h-[20px]"
                    value={item.value}
                    id={item.value}
                  />
                  <Label className="text-lg" htmlFor={item.value}>
                    {item.title}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="flex gap-4">
            {current && current !== 1 && (
              <button
                className="bg-blue-400 py-2 px-10 rounded-md text-white text-nowrap"
                onClick={() => api.scrollPrev()}
              >
                Quay lại
              </button>
            )}
            {current === count ? (
              <button className="bg-orange-400 py-2 px-10 rounded-md text-white text-nowrap">
                Hoàn thành
              </button>
            ) : (
              <button
                className="bg-blue-400 py-2 px-10 rounded-md text-white text-nowrap"
                onClick={() => api.scrollNext()}
              >
                Tiếp theo
              </button>
            )}
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4">
          <Image
            src="/images/surveyimg.png"
            alt=""
            layout="responsive"
            width={100}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default SurveyPhase;
