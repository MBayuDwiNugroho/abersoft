import { abersoftServices } from "@/data/constants";
import Image from "next/image";
import React from "react";

const ServicesSection = () => {
  return (
    <section className="container mx-auto px-8 md:py-20 lg:px-0">
      <div className="grid grid-cols-1 justify-between gap-[28px] md:grid-cols-2 md:gap-[57px] lg:grid-cols-3 ">
        {abersoftServices.map((item: any, index: number) => (
          <div
            key={index}
            className={`flex flex-col gap-[19px] lg:w-[332px] ${
              index % 3 === 0
                ? "lg:justify-self-start"
                : index % 3 === 1
                ? "lg:justify-self-center"
                : "lg:justify-self-end"
            }`}
          >
            <Image
              width={322}
              height={322}
              src={`/img/${item.icon}.png`}
              alt=""
            />
            <h4 className="text-2xl font-bold text-primary md:text-[32px]">
              {item.title}
            </h4>
            <p className="text-sm font-medium text-gray md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
