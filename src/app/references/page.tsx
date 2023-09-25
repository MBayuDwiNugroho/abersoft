import ContactUs from "@/components/ContactUs";
import AppStore from "@/components/Icons/appStore";
import GooglePlay from "@/components/Icons/googlePlay";
import { NextPage } from "next";
import React from "react";

const References: NextPage = () => {
  return (
    <>
      <section className="container my-16  mx-auto h-[527px] flex items-center ">
        <div className="container relative">
          <div className="w-[552px] py-5 relative z-10">
            <h1 className="text-5xl font-bold text-primary mb-4 leading-normal">
              Feastly app, <br />
              <span className="text-gray">Find your next dinner.</span>
            </h1>
            <p className="text-gray text-2xl leading-normal">
              We created an app to help people decide what to eat in a fun and
              exciting way. So we created Feastly, tinder for food.
            </p>
          </div>
          <div className="absolute z-0 top-[-50%] left-[32%] w-full bg-[url('/img/hero/food_desktop.png')] bg-[100%_100%] bg-no-repeat bg-contain h-[527px]"></div>
        </div>
      </section>

      <section className="container my-16  mx-auto flex ">
        <div className="container flex justify-end relative">
          <div className="absolute z-0 top-0 left-0 w-full bg-[url('/img/hero/Image_Phone_Feastly.png')] bg-[0%_30%] bg-no-repeat bg-[Length:50%] h-[527px]"></div>
          <div className="w-[498px] py-5 relative z-10">
            <h4 className="text-primary text-[32px] font-bold mb-[28px]">
              Built with Flutter.
            </h4>
            <p className="text-gray text-base font-medium">
              To build feastly we used a wide variety of tools to make the app
              as fast and easy to handle as possible.
              <br />
              <br />
              The idea of the app is to make the tedious task of deciding what
              to eat fun and gamify the whole process.
              <br />
              <br />
              You simply open the app, choose if you want to swipe on Recipes or
              Restaurants and then connect with your friends to find the perfect
              dish or place to eat.
            </p>
            <div className="flex gap-[56px] mt-[57px]">
              <GooglePlay />
              <AppStore />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[33px] justify-center items-center h-[640px] bg-primary">
        <div className="container">
          <h1 className="text-white text-5xl font-bold leading-normal text-left">
            It does not matter if you <br /> just started or if you <br /> have
            a large company, <br /> we are here to help you.
          </h1>
        </div>
      </section>

      <section className="container my-16 mt-[165px]  mx-auto h-[527px] flex">
        <div className="container relative">
          <div className="w-[490px] relative z-10">
            <h4 className="text-primary text-[32px] font-bold mb-[28px]">
              Jelena Meacham
            </h4>
            <p className="text-gray text-base font-medium">
              Besides companies, we also work a lot with different influencers
              in creating apps and websites for them.
              <br />
              <br />
              One field that we are especially interested in is Fitness. We
              helped Swedish influencer Jelena Meacham with building both her
              website and her app.
              <br />
              <br />
              At the start of 2021 her app was ranked no 1 on App Stores top
              grossing lists.
              <br />
              <br />
              The first version of the app was built using React Native which is
              another cross platform framework that we are very used to work
              with.
            </p>
          </div>
          <div className="absolute z-0 top-[-62%] left-[15%] w-full bg-[url('/img/hero/jelena_desktop.png')] bg-[100%_100%] bg-no-repeat bg-contain h-[833px]"></div>
        </div>
      </section>

      <section className="container my-16 h-[587px]  mx-auto flex ">
        <div className="container flex justify-end items-baseline relative">
          <div className="absolute z-0 top-0 left-0 w-full bg-[url('/img/hero/two_phone.png')] bg-[0%_0%] bg-no-repeat bg-[Length:50%] h-[587px]"></div>
          <div className="w-[498px] py-5 relative z-10 mt-auto">
            <h4 className="text-primary text-[32px] font-bold mb-[28px]">
              AVA stories
            </h4>
            <p className="text-gray text-base font-medium">
              AVA stories was an audio book and podcast app that first started
              as a UI/UX project and later turned into a full development
              project
              <br />
              <br />
              The app is focused on womens well being and geared towards audio
              erotics which is a really fast growing area in the tech industry.
              <br />
              <br />
              When building an app that constantly needs to be updated with new
              fresh content it is important that you build a system for the
              client that is easy to manage.
              <br />
              <br />
              We used a really user friendly CMS that does not require the
              client to go into the code to update content within the app.
            </p>
          </div>
        </div>
      </section>

      <section className=" mt-16  mx-auto h-[527px] flex bg-[#333]">
        <div className="container mt-[204px] mx-auto relative">
          <div className="w-[610px] relative z-10">
            <h4 className="text-white text-5xl font-bold">
              We are also proud to have many influencers and celebrities as
              clients.
            </h4>
          </div>
          <div className="absolute z-0 top-[-70%] left-[43%] w-full bg-[url('/img/hero/macbook.png')] bg-[105%_100%] bg-no-repeat bg-contain h-[610px]"></div>
        </div>
      </section>
      <section className="bg-[#333] mb-16 h-[708px] flex">
        <div className="container mx-auto flex justify-end relative">
          <div className="absolute z-0 top-0 left-[-27%] w-full bg-[url('/img/hero/Iphone_Patrik_Kittel.png')] bg-[0%_0%] bg-no-repeat bg-[length:90%]  h-[614px]"></div>
          <div className="w-[498px] py-5 relative z-10 mt-[127px]">
            <h4 className="text-white text-[32px] font-bold mb-[28px]">
            Patrik Kittel
            </h4>
            <p className="text-white text-base font-medium">
            Patrik Kittel is one of the best horse riders in the world, when he came to us with the wish to create a luxurious website and app for his fans we were happy to help him.
              <br />
              <br />
              We completely rebuilt his website from scratch creating a dashboard that made it easy and pain free to keep his website up to date.
              <br />
              <br />
              We also created an App for Patrik so that his fans always can follow him when he is out on his competitions and shows.
            </p>
          </div>
        </div>
      </section>

      <ContactUs/>
    </>
  );
};

export default References;
