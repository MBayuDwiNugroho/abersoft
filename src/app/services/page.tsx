import ContactUs from "@/components/ContactUs";
import { abersoftServices } from "@/data/constants";
import { NextPage } from "next";
import React from "react";

const Services: NextPage = () => {
  return (
    <>
      {/* Top Hero Section */}
      <section className="container my-20  mx-auto h-[527px] flex items-center ">
        <div className="container relative">
          <div className="w-[552px] py-5 relative z-10">
            <h1 className="text-5xl font-bold text-primary mb-4 leading-normal">
              We make your ideas become{" "}
              <span className="text-gray">reality.</span>
            </h1>
            <p className="text-gray text-2xl">
              Whether or not you are an established company or a new start up,
              we will create the solution you need.
            </p>
          </div>
          <div className="absolute z-0 top-[-53%] left-[6%] w-full bg-[url('/img/hero/services_hero.png')] bg-[100%_100%] bg-no-repeat bg-contain h-[623px]"></div>
        </div>
      </section>

      {/* Service Experience Section */}
      <section className="py-[99px]">
        <div className="container mx-auto grid grid-cols-2 gap-x-[61px] gap-y-[89px]">
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
              <h4 className="text-primary text-[32px] font-bold">
                {item.title}
              </h4>
              <p className="text-gray text-base font-bold">{item.title}</p>
              <p className="text-gray text-base font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />
    </>
  );
};

export default Services;
