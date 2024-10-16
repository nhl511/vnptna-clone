import React from "react";

const IntroHeader = async ({ introHeader }: { introHeader: any }) => {
  return (
    <div className="border border-gray-200 p-6 mb-10">
      <h3 className=" font-bold text-center uppercase text-[var(--header-bg)] text-2xl my-10">
        {introHeader.CATE_NAME}
      </h3>
      <div
        dangerouslySetInnerHTML={{ __html: introHeader.CATE_CONTENT }}
        className="overflow-hidden"
      />
    </div>
  );
};

export default IntroHeader;
