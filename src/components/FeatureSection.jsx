import React from "react";
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="my-15 border-b border-neutral-800 py-15">
      <div className="py-3 text-center">
        <span className="rounded-full bg-neutral-900 px-3 py-2 text-sm tracking-wide text-orange-500 uppercase">
          Feature
        </span>
        <h3 className="my-8 text-center text-4xl sm:text-6xl lg:text-7xl">
          Easily build your <span className="gradientCommon"> {""} code</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((fet, ind) => (
          <div
            key={ind}
            className="mt-10 cursor-pointer rounded-lg bg-neutral-900/10 px-5 py-6 shadow-xs duration-500 hover:scale-105 hover:bg-neutral-900/30 hover:shadow-md"
          >
            <div className="flex items-start space-x-5">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-orange-500">
                  {fet.icon}
                </div>
              </div>

              <div>
                <h3 className="my-2 text-xl font-medium tracking-tighter">
                  {fet.text}
                </h3>
                <p className="text-neutral-500"> {fet.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
