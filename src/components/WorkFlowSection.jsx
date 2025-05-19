import React from "react";
import Code from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { Check } from "lucide-react";

const WorkFlowSection = () => {
  return (
    <div className="my-6 py-4">
      <div>
        <h1 className="my-3 text-center text-4xl sm:text-5xl lg:text-6xl">
          Accelerate your{" "}
          <span className="gradientCommon">coding workflow.</span>
        </h1>
        <div className="flex flex-col py-3 md:flex-row">
          <img src={Code} className={`max-h-[680px] w-full md:w-1/2`} alt="" />
          <div className="">
            <ul>
              {checklistItems.map((item, index) => (
                <li
                  key={index}
                  className="my-5 flex items-start space-x-2 py-3"
                >
                  <div className="flex h-12 w-15 items-center justify-center rounded-full bg-neutral-900/80">
                    <div className="h-6 w-6 rounded-full bg-green-500 p-0.5 text-white">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-neutral-900">
                        <Check size={12} color="#12de20" strokeWidth={5} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="my-2 text-xl font-medium tracking-normal">
                      {item.title}
                    </h3>
                    <p className="py-2 text-lg text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlowSection;
