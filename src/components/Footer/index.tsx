import React from "react";
import AbersoftIcon from "../Icons/abersoft";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary py-[52px] text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-start gap-[62px] md:gap-0">
        <div className="w-full md:w-1/2 items-center md:items-start flex flex-col gap-[19px]">
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
        <div className="w-full md:w-1/2 items-center md:items-start flex flex-col gap-[19px]">
          <h5 className="text-lg font-bold">Documents</h5>
          <Link href="/term-condition" className="text-normal font-medium">
            Terms & Conditions
          </Link>
          <Link href="/privacy-policy" className="text-normal font-medium">
            Privacy Policy
          </Link>
        </div>
        <div className="w-full md:w-1/2 items-center md:items-start flex flex-col gap-[19px]">
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
        <div className="w-full md:w-1/2 items-center flex flex-col gap-[19px] align-bottom text-right md:items-end">
          <h5 className="text-lg font-bold">Address</h5>
          <p className="text-normal font-medium text-center md:text-right">
            Kometvägen 3 <br /> 183 33 TÄBY Stockholm, Sweden
          </p>
          <p className="text-normal font-medium text-center md:text-right">
            Kampung Yadika Regency <br />
            Blok H Nomer 4 Pasuruan, Indonesia
          </p>

          <div className="mt-[19px]">
            <AbersoftIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
