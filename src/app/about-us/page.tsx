import ContactUsSection from "@/components/ContactUsSection";
import EndQuoteIcon from "@/components/Icons/endQuote";
import StartQuoteIcon from "@/components/Icons/startQuote";
import QuoteSection from "@/components/QuoteSection";
import TopBannerSection from "@/components/TopBannerSection";
import TopicSection from "@/components/TopicSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutUs = () => {
  return (
    <>
      <TopBannerSection
        heightClass="h-[468px] "
        text={
          <span className="text-gray">
            Who are we? <br /> We are
            <span className="text-primary"> Abersoft.</span>
          </span>
        }
        description="We have been working with software development since 2013 and our
        team has created apps with over 400 million users."
        image={"bg-[url('/img/hero/Team_Hero.png')]"}
        imageClass={
          "bottom-[-12%] right-[-40%]  bg-cover md:bg-contain  bg-[-3%_-35%] bg-[0%_100%]   md:bg-[100%_100%]  h-[290px] md:!h-[468px]"
        }
      />

      <QuoteSection
        text={
          <>
            <StartQuoteIcon />
            <h1 className="text-center text-[28px] font-bold leading-normal text-white md:text-5xl">
              Creating software <br /> is not our work, <br /> it is our
              passion.
            </h1>
            <EndQuoteIcon />
          </>
        }
      />

      <TopicSection
        title={"Our philosophy."}
        subtitle={
          "Our mission is to make our clients life as smooth and problem free as possible and deliver top products."
        }
        description={
          <>
            We have been in the tech industry over a decade and know that it can
            sometimes be a jungle for someone who is unfamilliar with it. We are
            here to assist you and make it fun and easy for you to work.
            <br />
            <br />
            We have spent the past years in putting together an international
            team and workflow so we can optimize cost, work fast and deliver
            great results.
            <br />
            <br />
            2019 we won the Innovation & Entrepreneurship Award in Kunming for
            our work.
          </>
        }
        image={"bg-[url('/img/hero/victory_hand_bg.png')]"}
        imageClass={
          "bottom-0 right-0 bg-contain bg-[50%_100%]  lg:bg-[100%_100%]"
        }
      />

      <QuoteSection
        text={
          <h1 className="text-center text-[28px] font-bold leading-normal text-white md:text-5xl">
            Abersoft <br /> more than just a <br /> software house.
          </h1>
        }
      />

      <TopicSection
        title={"Game Studio & Inhouse Apps."}
        titleClass="order-2 md:order-1 "
        description={
          <>
            Besides helping companies and start ups to create <br /> awesome
            apps and websites we also have our own inhouse <br /> branch where
            we explore new technologies that we find <br /> interesting.
            <br />
            <br />
            Lately we have been focusing on exploring the field of Augmented
            Reality, more commonly known as AR. Besides AR we also love building
            software that makes life easier for our users
            <br />
            <br />
            Are you looking for a tech partner for your idea, we sometimes go in
            as part owners in ideas we feel passionate about. Contact us if you
            have an idea that you think we might be interested in.
          </>
        }
        image={"bg-[url('/img/hero/Image_Abersoft_Studios.png')]"}
        imageClass={
          "order-1 md:order-2 bottom-[-20px] left-[15%]  h-[527px] w-full bg-cover lg:bg-[length:45%] bg-[0%_100%] md:bg-[90%_10%]"
        }
      />
      <ContactUsSection />
    </>
  );
};

export default AboutUs;
