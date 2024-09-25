import React from "react";

const Benefit = ({ benefit }: { benefit: benefitType }) => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100">
      {benefit.icon}
      <h3 className="text-xl my-2 font-bold">{benefit.title}</h3>
      <p className="text-sm">{benefit.description}</p>
    </div>
  );
};

export default Benefit;
