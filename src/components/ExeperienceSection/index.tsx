import { abersoftServices } from "@/data/constants";
import React from "react";

const ExeperienceSection = () => {
  return (
    <section className="container mx-auto px-8 md:py-20 lg:px-0">
      <div className="grid grid-cols-1 gap-[19px] md:grid-cols-2 md:gap-x-[61px] md:gap-y-[89px]">
        {abersoftServices.map((item: any, index: number) => (
          <div
            key={index}
            className={`flex flex-col gap-[19px] ${
              index % 3 === 0
                ? "justify-self-start"
                : index % 2 === 1
                ? "justify-self-center"
                : "justify-self-end"
            }`}
          >
            <h4 className="text-2xl font-bold text-primary md:text-[32px]">
              {item.title}
            </h4>
            <p className="text-xs font-bold text-gray md:text-base">
              {item.subttile}
            </p>
            <p className="text-xs font-medium text-gray md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExeperienceSection;
