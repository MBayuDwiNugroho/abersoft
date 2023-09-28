import React from "react";
import AbersoftIcon from "../Icons/abersoft";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary px-8 py-[52px] text-white lg:px-0">
      <div className="container mx-auto flex flex-col justify-center gap-[62px] md:flex-row md:justify-start md:gap-0">
        <div className="flex w-full flex-col items-center gap-[19px] md:w-1/2 md:items-start">
          <h5 className="text-lg font-bold">Our Services</h5>
          <a href="#" className="text-normal font-medium">
            App Development
          </a>
          <a href="#" className="text-normal font-medium">
            Websites
          </a>
          <a href="#" className="text-normal font-medium">
            UI/UX Design
          </a>
          <a href="#" className="text-normal font-medium">
            Ongoing Consultation
          </a>
        </div>
        <div className="flex w-full flex-col items-center gap-[19px] md:w-1/2 md:items-start">
          <h5 className="text-lg font-bold">Documents</h5>
          <Link href="/term-and-condition" className="text-normal font-medium">
            Terms & Conditions
          </Link>
          <Link href="/privacy-policy" className="text-normal font-medium">
            Privacy Policy
          </Link>
        </div>
        <div className="flex w-full flex-col items-center gap-[19px] md:w-1/2 md:items-start">
          <h5 className="text-lg font-bold">Inhouse</h5>
          <a href="#" className="text-normal font-medium">
            Haunted House AR
          </a>
          <a href="#" className="text-normal font-medium">
            Abersoft Blog
          </a>
          <a href="#" className="text-normal font-medium">
            Ongoing Consultation
          </a>
        </div>
        <div className="flex w-full flex-col items-center gap-[19px] text-right align-bottom md:w-1/2 md:items-end">
          <h5 className="text-lg font-bold">Address</h5>
          <p className="text-normal text-center font-medium md:text-right">
            Kometvägen 3 <br /> 183 33 TÄBY Stockholm, Sweden
          </p>
          <p className="text-normal text-center font-medium md:text-right">
            Kampung Yadika Regency <br />
            Blok H Nomer 4 Pasuruan, Indonesia
          </p>

          <div className="my-16 md:mb-0 md:mt-[19px]">
            <AbersoftIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
