import React from "react";
import DiscordIcon from "../Icons/discord";
import FacebookIcon from "../Icons/facebook";
import LinkenIcon from "../Icons/linken";

const ContactUsSection = () => {
  return (
    <section className="container mx-auto px-8 pt-[74px] md:pb-9 md:pt-28 lg:px-0">
      <div className=" flex flex-col flex-wrap items-stretch gap-12 md:flex-row md:gap-0 ">
        <div className="flex w-full flex-col md:w-1/2">
          <h1 className="text-[28px] font-bold text-primary md:text-5xl">
            Contact us.
          </h1>
          <p className="mt-[19px] text-sm text-gray md:mt-14 md:pr-24 md:text-base">
            We know that it sometimes can be hard to know where to start. Let’s
            chat and see if we can help you!
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-9 md:w-1/2 md:items-end">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-[29px] bg-[#F6F6F9] px-[33px] py-[17px] text-gray placeholder:font-medium placeholder:text-gray"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full rounded-[29px] bg-[#F6F6F9] px-[33px] py-[17px] text-gray placeholder:font-medium placeholder:text-gray"
          />
          <textarea
            placeholder="Message"
            className="h-[205px] w-full rounded-[29px] bg-[#F6F6F9] px-[33px] py-[17px] text-gray placeholder:font-medium placeholder:text-gray"
          />
          <button className="w-[200px] rounded-[29px] bg-primary py-4 text-center text-2xl font-normal leading-7 text-white">
            Send
          </button>
        </div>
        <div className="mb-[55px] mt-auto flex w-full justify-between gap-[67px] md:mb-[100px] md:mt-[-55px] md:w-1/2 md:justify-start">
          <FacebookIcon />
          <DiscordIcon />
          <LinkenIcon />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
