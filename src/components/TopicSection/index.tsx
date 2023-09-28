import React, { ReactNode } from "react";
interface TopicSectionProps {
  title: ReactNode;
  subtitle?: ReactNode;
  titleClass?: string;
  description: ReactNode | string;
  additionalContent?: ReactNode | string;
  image: string;
  imageClass: string;
  customClass?: string;
}

const TopicSection = ({
  title,
  subtitle,
  titleClass,
  description,
  additionalContent,
  image,
  imageClass,
  customClass = "",
}: TopicSectionProps) => {
  return (
    <section
      className={`${customClass} container relative mx-auto mt-[60px] flex flex-col items-start justify-center gap-[33px] px-8  lg:h-[640px] lg:px-0`}
    >
      <div
        className={`${titleClass} z-10 flex w-full flex-col gap-[19px] md:relative lg:w-[552px]`}
      >
        <h4 className="text-2xl font-bold text-primary md:text-[32px]">
          {title}
        </h4>
        {subtitle && (
          <p className="text-sm font-bold text-gray md:text-base">{subtitle}</p>
        )}

        <p className="text-sm font-medium text-gray md:text-base">
          {description}
        </p>
        {additionalContent}
      </div>
      <div
        className={`${image} ${imageClass} bottom-0 right-0 z-0 h-[327px] w-full bg-no-repeat lg:absolute`}
      ></div>
    </section>
  );
};

export default TopicSection;
