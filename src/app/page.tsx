import Image from "next/image";
import { abersoftServicesHome } from "@/data/constants";
import { NextPage } from "next";
import ContactUs from "@/components/ContactUs";

const Home: NextPage = () => {
  return (
    <>
      {/* Top Hero Section */}
      <section className="container mx-auto  flex h-full items-center md:my-20 md:h-[527px] ">
        <div className="container relative flex flex-col md:flex-row">
          <div className="z-10 order-2 w-full py-5 md:relative md:w-[552px]">
            <h1 className="mb-4 text-[28px] font-bold leading-normal text-primary md:text-5xl">
              We help you build the tech solutions of the future.
            </h1>
            <p className=" text-lg leading-normal text-gray md:text-2xl">
              When you need help with development or design we are here to
              create the best solutions for you. With over a decade of
              experience in software development.
            </p>
          </div>
          <div className="left-[11%] top-[-20px] z-0 order-1 h-[246px] w-full bg-[url('/img/hero/Image_Phonbe.png')] bg-contain bg-[100%_100%] bg-no-repeat md:absolute md:order-2 md:h-[527px]"></div>
        </div>
      </section>

      {/* Product/Service Section */}
      <section className="container md:py-20">
        <div className="mx-auto grid grid-cols-1 justify-between gap-[28px] md:gap-[57px] md:grid-cols-3 ">
          {abersoftServicesHome.map((item: any, index: number) => (
            <div
              key={index}
              className={`flex w-[332px] flex-col gap-[19px] ${
                index % 3 === 0
                  ? "md:justify-self-start"
                  : index % 3 === 1
                  ? "md:justify-self-center"
                  : "md:justify-self-end"
              }`}
            >
              <Image
                width={322}
                height={322}
                src={`/img/${item.icon}.png`}
                alt=""
              />
              <h4 className="text-2xl font-bold text-primary md:text-[32px]">
                {item.title}
              </h4>
              <p className="text-sm font-medium text-gray md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />
    </>
  );
};

export default Home;
