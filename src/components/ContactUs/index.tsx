import React from "react";
import DiscordIcon from "../Icons/discord";
import FacebookIcon from "../Icons/facebook";
import LinkenIcon from "../Icons/linken";

const ContactUs = () => {
  return (
    <section className="pb-9 pt-[74px] md:pt-28">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap items-stretch gap-12 md:gap-0 ">
        <div className="flex w-full md:w-1/2 flex-col">
          <h1 className="text-[28px] font-bold text-primary md:text-5xl">
            Contact us.
          </h1>
          <p className="mt-[19px] md:mt-14 text-sm text-gray md:text-base md:pr-24">
            We know that it sometimes can be hard to know where to start. Let’s
            chat and see if we can help you!
          </p>
        </div>
        <div className="flex w-full md:w-1/2 flex-col gap-9 items-center md:items-end">
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
        <div className="mb-[100px] w-full md:w-1/2 justify-between md:justify-start mt-auto flex gap-[67px] md:mt-[-55px]">
            <FacebookIcon />
            <DiscordIcon />
            <LinkenIcon />
          </div>

      </div>
    </section>
  );
};

export default ContactUs;
