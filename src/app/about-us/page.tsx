import ContactUs from "@/components/ContactUs";
import EndQuoteIcon from "@/components/Icons/endQuote";
import StartQuoteIcon from "@/components/Icons/startQuote";
import React from "react";

const AboutUs = () => {
  return (
    <>
      {/* Top Hero Section */}
      <section className="container my-[128px]  mx-auto h-[468px] flex items-center ">
        <div className="container relative">
          <div className="w-[552px] py-5 relative z-10">
            <h1 className="text-5xl font-bold text-gray mb-4 leading-normal">
              Who are we? <br /> We are
              <span className="text-primary"> Abersoft.</span>
            </h1>
            <p className="text-gray text-2xl leading-normal">
              We have been working with software development since 2013 and our
              team has created apps with over 400 million users.
            </p>
          </div>
          <div className="z-0 absolute bottom-[-12%] right-[-40%] w-full bg-[url('/img/hero/Team_Hero.png')] bg-[100%_100%] bg-no-repeat bg-contain h-[468px]"></div>
        </div>
      </section>

      {/* Quote Section  */}
      <section className="flex flex-col gap-[33px] justify-center items-center h-[640px] bg-primary">
        <StartQuoteIcon />
        <h1 className="text-white text-5xl font-bold leading-normal text-center">
          Creating software <br /> is not our work, <br /> it is our passion.
        </h1>
        <EndQuoteIcon />
      </section>

      {/* Philosophy Section */}
      <section className=" container mx-auto flex flex-col gap-[33px] justify-center items-start  h-[640px] relative">
        <div className="w-[552px] flex flex-col gap-[19px] relative z-10">
          <h4 className="text-primary text-[32px] font-bold">
            Our philosophy.
          </h4>
          <p className="text-gray text-base font-bold">
            Our mission is to make our clients life as smooth and problem free
            as possible and deliver top products.
          </p>
          <p className="text-gray text-base font-medium">
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
          </p>
        </div>
        <div className="z-0 absolute bottom-0 right-0 w-full bg-[url('/img/hero/victory_hand_bg.png')] bg-[100%_100%] bg-no-repeat bg-contain h-[527px]"></div>
      </section>

      {/* Quote Section  */}
      <section className="flex flex-col gap-[33px] justify-center items-center h-[640px] bg-primary">
        <h1 className="text-white text-5xl font-bold leading-normal text-center">
          Abersoft <br /> more than just a <br /> software house.
        </h1>
      </section>

      {/* Info Section  */}
      <section className="container my-[124px]  mx-auto flex ">
        <div className="container relative">
          <div className="w-[498px] py-5 relative z-10">
            <h4 className="text-primary text-[32px] font-bold mb-[28px]">
              Game Studio & Inhouse Apps.
            </h4>
            <p className="text-gray text-base font-medium">
              Besides helping companies and start ups to create <br /> awesome
              apps and websites we also have our own inhouse <br /> branch where
              we explore new technologies that we find <br /> interesting.
              <br />
              <br />
              Lately we have been focusing on exploring the field of Augmented
              Reality, more commonly known as AR. Besides AR we also love
              building software that makes life easier for our users
              <br />
              <br />
              Are you looking for a tech partner for your idea, we sometimes go
              in as part owners in ideas we feel passionate about. Contact us if
              you have an idea that you think we might be interested in.
            </p>
          </div>
          <div className="z-0 absolute bottom-[-20px] left-[15%]  w-full bg-[url('/img/hero/Image_Abersoft_Studios.png')] bg-[length:50%] bg-[100%_100%] bg-no-repeat h-[527px]"></div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />
    </>
  );
};

export default AboutUs;
