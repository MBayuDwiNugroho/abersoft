import React, { ReactNode } from "react";

interface TopBannerProps {
  width?: "container" | "full";
  text: ReactNode;
  textClass?: string;
  description: ReactNode;
  descriptionClass?: string;
  image: string;
  imageClass: string;
  heightClass?: string;
}
const TopBannerSection = ({
  width = "container",
  text,
  textClass,
  description,
  descriptionClass,
  image,
  imageClass,
  heightClass = "",
}: TopBannerProps) => {
  return (
    <section
      className={`container mx-auto flex h-full  items-center md:my-20 lg:h-[527px] ${
        width == "container" ? "px-8 lg:px-0" : ""
      }  ${heightClass}`}
    >
      <div className="container relative flex flex-col lg:flex-row">
        <div
          className={`z-10 order-2 w-full py-5 lg:relative lg:w-[552px] ${textClass}`}
        >
          <h1
            className={`mb-4 text-[28px] font-bold !leading-normal text-primary md:text-5xl`}
          >
            {text}
          </h1>
          <p
            className={`text-lg leading-normal text-gray md:text-2xl ${descriptionClass}`}
          >
            {description}
          </p>
        </div>
        <div
          className={`z-0 order-1 h-[246px] w-full ${image} bg-contain bg-no-repeat md:h-[527px] lg:absolute lg:order-2  ${imageClass}`}
        ></div>
      </div>
    </section>
  );
};

export default TopBannerSection;
