import Image from "next/image";
import { abersoftServicesHome } from "@/data/constants";
import { NextPage } from "next";
import ContactUs from "@/components/ContactUs";

const Home: NextPage = () => {
  return (
    <>

      {/* Top Hero Section */}
      <section className="container my-20  mx-auto h-[527px] flex items-center ">
        <div className="container relative">
          <div className="w-[552px] py-5 relative z-10">
            <h1 className="text-5xl font-bold text-primary mb-4 leading-normal">
              We help you build the tech solutions of the future.
            </h1>
            <p className="text-gray text-2xl leading-normal">
              When you need help with development or design we are here to
              create the best solutions for you. With over a decade of
              experience in software development.
            </p>
          </div>
          <div className="absolute z-0 top-[-20px] left-[11%] w-full bg-[url('/img/hero/Image_Phonbe.png')] bg-[100%_100%] bg-no-repeat bg-contain h-[527px]"></div>
        </div>
      </section>

      {/* Product/Service Section */}
      <section className="py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 justify-between gap-[57px] ">
          {abersoftServicesHome.map((item: any, index: number) => (
            <div
              key={index}
              className={`flex flex-col gap-[19px] w-[332px] ${
                index % 3 === 0
                  ? "justify-self-start"
                  : index % 3 === 1
                  ? "justify-self-center"
                  : "justify-self-end"
              }`}
            >
              <Image
                width={322}
                height={322}
                src={`/img/${item.icon}.png`}
                alt=""
              />
              <h4 className="text-primary text-[32px] font-bold">
                {item.title}
              </h4>
              <p className="text-gray text-base font-medium">
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
