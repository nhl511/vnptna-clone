import { getIntroHeader } from "@/apiRequests/menu";
import React from "react";

const IntroHeader = async ({ id }: { id: number }) => {
  const result = await getIntroHeader(id);
  return (
    <div className="border border-gray-200 p-6 mb-10">
      <h3 className=" font-bold text-center uppercase text-[var(--header-bg)] text-2xl my-10">
        {result.data.CATE_NAME}
      </h3>
      <div
        dangerouslySetInnerHTML={{ __html: result.data.CATE_CONTENT }}
        className="overflow-hidden"
      />
    </div>
  );
};

export default IntroHeader;
