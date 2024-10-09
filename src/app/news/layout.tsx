import NewInfo from "@/components/NewInfo/NewInfo";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="xl:container xl:mx-auto grid grid-cols-12 mt-8 gap-4 px-4 xl:px-0">
      <div className="col-span-12 xl:col-span-9">{children}</div>
      <div className="col-span-12 xl:col-span-3">
        <NewInfo />
      </div>
    </div>
  );
};

export default layout;
