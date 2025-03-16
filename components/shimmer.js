import React from "react";

const Shimmer = () => {
  return (
    <>
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="w-full max-w-sm mx-auto animate-pulse">
          <div className="bg-gray-300 rounded-lg h-44 w-full"></div>
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
    </>
  )
};

export default Shimmer;
