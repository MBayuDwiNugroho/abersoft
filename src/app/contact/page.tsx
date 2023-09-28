import ContactUsSection from "@/components/ContactUsSection";
import TopBannerSection from "@/components/TopBannerSection";
import { Metadata, NextPage } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact: NextPage = () => {
  return (
    <>
      <TopBannerSection
        text={"Become part of our great team."}
        description=" We are always looking for new great talents, if you want to be
        part of a growing team that have fun work."
        image={"bg-[url('/img/hero/hero_desktop.png')]"}
        imageClass={
          "right-[-22%] top-[-20%] bg-[0%_100%] md:bg-[100%_100%] h-[448px] md:h-[527px] bg-cover md:bg-contain"
        }
      />
      <ContactUsSection />
    </>
  );
};

export default Contact;
