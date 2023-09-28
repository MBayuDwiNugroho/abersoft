import ContactUsSection from "@/components/ContactUsSection";
import TopBannerSection from "@/components/TopBannerSection";
import { abersoftServices } from "@/data/constants";
import { Metadata, NextPage } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Service",
};

const Services: NextPage = () => {
  return (
    <>
      <TopBannerSection
        text={
          <span>
            {" "}
            We make your ideas become{" "}
            <span className="text-gray">reality.</span>{" "}
          </span>
        }
        description="Whether or not you are an established company or a new start up,
        we will create the solution you need."
        image={"bg-[url('/img/hero/services_hero.png')]"}
        imageClass={
          "left-[6%] h-[400px] top-[-53%] bg-[100%_100%] md:h-[623px] mb-[50px] md:mb-0"
        }
      />

      <ContactUsSection />
    </>
  );
};

export default Services;
