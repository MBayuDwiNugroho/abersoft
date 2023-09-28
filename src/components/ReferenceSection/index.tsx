import React from "react";

const ReferenceSection = () => {
  return (
    <>
      <section className=" mx-auto  mt-16 flex bg-[#333] md:h-[610px]">
        <div className="container relative mx-auto mt-[81px] md:mt-[204px]">
          <div className="relative z-10 px-8  lg:w-[610px] lg:px-0">
            <h4 className="text-[28px] font-bold leading-normal text-white md:text-5xl">
              We are also proud to have many influencers and celebrities as
              clients.
            </h4>
          </div>
          <div className="bottom-[-30%] left-[35%] z-0 h-[300px] w-full bg-[url('/img/hero/macbook.png')] bg-cover bg-[0%_100%] bg-no-repeat md:absolute md:h-[810px] md:bg-[length:117%]"></div>
        </div>
      </section>

      <section className="mb-16 flex bg-[#333] pb-16 md:h-[708px]">
        <div className="container relative mx-auto flex flex-col justify-end md:flex-row">
          <div className="relative z-10 px-8 py-5 md:mt-[127px] md:w-1/2 lg:w-[498px] lg:px-0">
            <h4 className="mb-[28px] text-[32px] font-bold text-white">
              Patrik Kittel
            </h4>
            <p className="text-base font-medium text-white">
              Patrik Kittel is one of the best horse riders in the world, when
              he came to us with the wish to create a luxurious website and app
              for his fans we were happy to help him.
              <br />
              <br />
              We completely rebuilt his website from scratch creating a
              dashboard that made it easy and pain free to keep his website up
              to date.
              <br />
              <br />
              We also created an App for Patrik so that his fans always can
              follow him when he is out on his competitions and shows.
            </p>
          </div>
          <div className="left-[-27%] top-0 z-0 h-[345px] w-full bg-[url('/img/hero/Iphone_Patrik_Kittel.png')] bg-cover bg-[50%_0%] bg-no-repeat  md:absolute md:h-[614px] md:bg-[length:90%]  md:bg-[0%_0%]"></div>
        </div>
      </section>
    </>
  );
};

export default ReferenceSection;
