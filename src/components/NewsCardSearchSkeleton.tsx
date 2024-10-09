import React from "react";

const NewsCardSearchSkeleton = () => {
  return (
    <div className="h-36 flex gap-4 animate-pulse">
      <div className="relative h-full w-72 overflow-hidden bg-gray-200"></div>
      <div className="w-full">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-12 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );
};

export default NewsCardSearchSkeleton;
