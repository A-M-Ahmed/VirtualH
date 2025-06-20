import React from "react";
import { pricingOptions } from "../constants";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <div className="my-6 py-3 md:my-15">
      <h3 className="my-4 text-center text-4xl md:text-5xl lg:text-6xl">
        Pricing{" "}
      </h3>
      <div className="flex md:space-x-6 mt-10 flex-col md:flex-row space-y-6 md:space-y-0 md:items-center">
        {pricingOptions.map((price, ind) => (
          <div key={ind} className="rounded-md border border-neutral-700/80 py-8 px-6 w-full md:w-1/3">
            <h3 className={`my-2 text-2xl md:text-3xl lg:text-4xl md:my-5 `}>{price.title} <span className="text-orange-500 text-lg">
               {ind == 1 ? "(Most Popular)" : ""} </span></h3>
            <p className="text-2xl md:text-3xl lg:text-5xl my-5">
              {price.price}{" "}
              <span className="text-sm text-neutral-500">/month</span>
            </p>
            <ul className="flex flex-col space-y-7 my-4">
              {price.features.map((fet, ind) => (
                <li key={ind} className="flex ">
                  <div className="h-6 w-6 rounded-full bg-white p-0.5 mr-2.5">
                    <div className="bg-neutral-900 w-full h-full rounded-full flex justify-center items-center">

                    <Check color="#fff" strokeWidth={3} size={15} />
                    </div>
                  </div>
                  {fet}
                </li>
              ))}
            </ul>
            <button className="py-3 px-4 border border-red-400/40 rounded-md w-full my-6">Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
