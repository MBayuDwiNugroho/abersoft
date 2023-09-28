import { Metadata, NextPage } from "next";
import ContactUsSection from "@/components/ContactUsSection";
import TopBannerSection from "@/components/TopBannerSection";
import ServicesSection from "@/components/ServiceSection";

export const metadata: Metadata = {
  title: "Abersoft",
};

const Home: NextPage = () => {
  return (
    <>
      <TopBannerSection
        text={"We help you build the tech solutions of the future"}
        description="When you need help with development or design we are here to
        create the best solutions for you. With over a decade of
        experience in software development."
        image={"bg-[url('/img/hero/Image_Phonbe.png')]"}
        imageClass={"left-[15%] top-[-20px] bg-[100%_100%] lg:h-[527px]"}
      />

      <ServicesSection />

      <ContactUsSection />
    </>
  );
};

export default Home;
