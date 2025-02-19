import ChooseUs from "../Home/ChooseUs/ChooseUs";
import choosePic from "../../assets/images/chooseUsPic.png";
import StepSection from "../../components/StepSection/StepSection";
import OurStory from "./OurStory/OurStory";
import MissionAndVision from "./MissionAndVision/MissionAndVision";
import BetterPlanet from "../Home/BetterPlanet/BetterPlanet";
import commitmentPic from "../../assets/images/commitmentPic.png";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const AboutUs = () => {
  const bulletPoints = [
    "At 777Bags, we believe that exceptional packaging is more than just functional—it’s an extension of your brand",
    "Based in Rhode Island, we’re a locally owned business driven by a passion for quality, creativity, and customer satisfaction",
  ];

  const description = `
    Whether you’re in cannabis, retail, food service, or luxury goods, we deliver high-quality custom and stock packaging solutions that enhance your products and elevate your brand.
  `;

  const data = {
    title: "Our Commitment",
    description:
      "At 777Bags, we don’t just deliver products—we deliver an experience! From initial interaction to the final delivery, we focus on communication, reliability, and building lasting relationships. When you work with us, you’re not just another client—you’re a valued partner.",
    buttonText: "Request a Quote",
    backgroundImage: commitmentPic,
    gradient:
      "linear-gradient(0deg, rgba(7, 160, 236, 0.90) 0%, rgba(7, 160, 236, 0.90) 100%)",
  };

  const axiosPublic = useAxiosPublic();

  const aboutUsBannerData = async () => {
    try {
      const response = await axiosPublic.get("/api/about-us");
      return response.data;
    } catch (error) {
      console.error("Error fetching card data:", error.message || error);
      throw new Error("Failed to fetch card data");
    }
  };

  const { data: AboutUsBannerData } = useQuery({
    queryKey: aboutUsBannerData,
    queryFn: aboutUsBannerData,
  });

  console.log(AboutUsBannerData?.data?.OUR_MISSION);

  return (
    <section className="mt-[148px]">
      <div>
        <ChooseUs
          title={AboutUsBannerData?.data?.ABOUT_US?.title}
          description={AboutUsBannerData?.data?.ABOUT_US?.description}
          buttonText="Learn More About 777Bags"
          showBreadcrumb={true}
          img={`${import.meta.env.VITE_SITE_URL}/${
            AboutUsBannerData?.data?.ABOUT_US?.image_url
          }`}
        />
        <OurStory
          image={`${import.meta.env.VITE_SITE_URL}/${
            AboutUsBannerData?.data?.OUR_STORY?.image_url
          }`}
          title={AboutUsBannerData?.data?.OUR_STORY?.title}
          subTitle={AboutUsBannerData?.data?.OUR_STORY?.description}
        />
        <MissionAndVision />
        <WhyChooseUs />
        <div className="bg-[#FAFBFC] pb-[150px] pt-[137px] mt-[150px]">
          <StepSection
            isAbout={true}
            title={"Our Process"}
            subtitle={"Your Packaging, Simplified"}
            btnText={"Request a Quote"}
          />
        </div>
        <WhatWeOffer />
        <BetterPlanet {...data} />
      </div>
    </section>
  );
};

export default AboutUs;
