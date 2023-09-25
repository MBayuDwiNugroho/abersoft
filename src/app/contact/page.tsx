import ContactUs from "@/components/ContactUs";
import { NextPage } from "next";
import React from "react";

const Contact: NextPage = () => {
  return (
    <>
      {/* Top Hero Section */}
      <section className="container my-[128px]  mx-auto h-[527px] flex items-center ">
        <div className="container relative">
          <div className="w-[552px] relative z-10">
            <h1 className="text-5xl py-5 font-bold text-primary mb-4 leading-normal">
              Become part of our great team.
            </h1>
            <p className="text-gray text-2xl">
              We are always looking for new great talents, if you want to be
              part of a growing team that have fun work.
            </p>
          </div>
          <div className="z-0 absolute top-[-20%] right-[-22%] w-full bg-[url('/img/hero/hero_desktop.png')] bg-[100%_100%] bg-no-repeat bg-contain h-[527px]"></div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />
    </>
  );
};

export default Contact;
