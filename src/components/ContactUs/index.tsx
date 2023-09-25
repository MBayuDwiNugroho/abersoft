import React from "react";
import DiscordIcon from "../Icons/discord";
import FacebookIcon from "../Icons/facebook";
import LinkenIcon from "../Icons/linken";

const ContactUs = () => {
  return (
    <section className="pb-9 pt-28">
      <div className="container mx-auto flex gap-24 items-stretch">
        <div className="w-1/2 flex flex-col">
          <h1 className="text-primary text-5xl font-bold">Contact us.</h1>
          <p className="text-gray text-base mt-14">
            We know that it sometimes can be hard to know where to start. Let’s
            chat and see if we can help you!
          </p>
          <div className="flex gap-[67px] mt-auto mb-[100px]">
            <FacebookIcon />
            <DiscordIcon />
            <LinkenIcon />
          </div>
        </div>
        <div className="flex flex-col gap-9 w-1/2">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#F6F6F9] w-full px-[33px] py-[17px] rounded-[29px] text-gray placeholder:text-gray placeholder:font-medium"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-[#F6F6F9] w-full px-[33px] py-[17px] rounded-[29px] text-gray placeholder:text-gray placeholder:font-medium"
          />
          <textarea
            placeholder="Message"
            className="bg-[#F6F6F9] w-full px-[33px] py-[17px] rounded-[29px] text-gray placeholder:text-gray placeholder:font-medium h-[205px]"
          />
          <button className="bg-primary font-normal text-white rounded-[29px] w-[200px] text-center py-4 ml-auto leading-7 text-2xl">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
