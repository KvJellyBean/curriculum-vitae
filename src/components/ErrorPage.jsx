import React from "react";
import ShinyEffect from "./ShinyEffect";

export const ErrorPage = () => {
  return (
    <div className="px-2 text-center">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-extrabold text-8xl">404</h1>
        <p className="text-4xl font-medium text-gray-400">
          Oops! Something went wrong.
        </p>
        <p className="mt-4 text-xl text-gray-400">
          We apologize for the inconvenience. Please try again later.
        </p>
      </div>

      <div className="absolute inset-0 block h-fit sm:h-auto -z-50">
        <ShinyEffect />
      </div>
    </div>
  );
};
