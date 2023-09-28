import ContactUsSection from "@/components/ContactUsSection";
import AppStore from "@/components/Icons/appStore";
import GooglePlay from "@/components/Icons/googlePlay";
import QuoteSection from "@/components/QuoteSection";
import ReferenceSection from "@/components/ReferenceSection";
import TopBannerSection from "@/components/TopBannerSection";
import TopicSection from "@/components/TopicSection";
import { Metadata, NextPage } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Referances",
};

const References: NextPage = () => {
  return (
    <>
      <TopBannerSection
        width="full"
        textClass="px-8 lg:px-0"
        text={
          <>
            Feastly app, <br />
            <span className="text-gray">Find your next dinner.</span>
          </>
        }
        description="We created an app to help people decide what to eat in a fun and
        exciting way. So we created Feastly, tinder for food."
        image={"bg-[url('/img/hero/food_desktop.png')]"}
        imageClass={
          "top-[-50%] left-[32%] bg-[22%_100%]  bg-cover h-[343px] md:bg-[100%_100%] md:bg-contain md:h-[527px] mb-[50px] md:mb-0"
        }
      />

      <TopicSection
        title={"Built with flutter."}
        customClass="!items-end !justify-start"
        titleClass="order-2 md:order-1 lg:w-[490px]"
        description={
          <>
            To build feastly we used a wide variety of tools to make the app as
            fast and easy to handle as possible.
            <br />
            <br />
            The idea of the app is to make the tedious task of deciding what to
            eat fun and gamify the whole process.
            <br />
            <br />
            You simply open the app, choose if you want to swipe on Recipes or
            Restaurants and then connect with your friends to find the perfect
            dish or place to eat.
          </>
        }
        additionalContent={
          <div className="mb-11 mt-[57px] flex gap-[56px] md:mb-0">
            <GooglePlay />
            <AppStore />
          </div>
        }
        image={"bg-[url('/img/hero/Image_Phone_Feastly.png')]"}
        imageClass={
          "order-1 md:order-2 bg-contain left-0 top-0 z-0 h-[325px] md:h-[387px] md:bg-[0%_0%]"
        }
      />

      <QuoteSection
        text={
          <h1 className="container px-8 text-[28px] font-bold text-white md:text-5xl md:leading-normal lg:px-0">
            It does not matter if you <br /> just started or if you <br /> have
            a large company, <br /> we are here to help you.
          </h1>
        }
      />

      <TopicSection
        title={"Jelena Meacham."}
        customClass=""
        titleClass="order-2 md:order-1 mt-5"
        description={
          <>
            Besides companies, we also work a lot with different influencers in
            creating apps and websites for them.
            <br />
            <br />
            One field that we are especially interested in is Fitness. We helped
            Swedish influencer Jelena Meacham with building both her website and
            her app.
            <br />
            <br />
            At the start of 2021 her app was ranked no 1 on App Stores top
            grossing lists.
            <br />
            <br />
            The first version of the app was built using React Native which is
            another cross platform framework that we are very used to work with.
          </>
        }
        image={" bg-[url('/img/hero/jelena_desktop.png')]"}
        imageClass={
          "order-1 md:order-2 left-0 mt-[-45%] md:mt-0 lg:left-[15%] md:top-[-50%] h-[525px] relative md:h-[833px] w-full bg-contain md:bg-contain bg-[100%_100%]"
        }
      />

      <TopicSection
        title={"AVA stories"}
        titleClass="order-2 md:order-1 ml-auto mt-auto md:pb-14 lg:!w-[498px]"
        description={
          <>
            AVA stories was an audio book and podcast app that first started as
            a UI/UX project and later turned into a full development project
            <br />
            <br />
            The app is focused on womens well being and geared towards audio
            erotics which is a really fast growing area in the tech industry.
            <br />
            <br />
            When building an app that constantly needs to be updated with new
            fresh content it is important that you build a system for the client
            that is easy to manage.
            <br />
            <br />
            We used a really user friendly CMS that does not require the client
            to go into the code to update content within the app.
          </>
        }
        image={"bg-[url('/img/hero/two_phone.png')]"}
        imageClass={
          "order-1 md:order-2 bg-[Length:50%] bg-contain left-0 top-0 z-0 h-[445px] md:h-[612px]  w-full bg-[0%_0%]"
        }
      />

      <ReferenceSection />

      <ContactUsSection />
    </>
  );
};

export default References;
