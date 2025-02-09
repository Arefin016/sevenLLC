import ChooseUs from "../Home/ChooseUs/ChooseUs";
import choosePic from "../../assets/images/chooseUsPic.png";
import StepSection from "../../components/StepSection/StepSection";
import OurStory from "./OurStory/OurStory";
import MissionAndVision from "./MissionAndVision/MissionAndVision";
import BetterPlanet from "../Home/BetterPlanet/BetterPlanet";
import commitmentPic from "../../assets/images/commitmentPic.png";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";

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

  return (
    <section className="mt-[148px]">
      <div>
        <ChooseUs
          title="Your Teammate in Packaging Excellence"
          bulletPoints={bulletPoints}
          description={description}
          image={choosePic}
          buttonText="Learn More About 777Bags"
          showBreadcrumb={true}
        />
        <OurStory />
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
