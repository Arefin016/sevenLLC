import ChooseUs from "../Home/ChooseUs/ChooseUs";
import choosePic from "../../assets/images/chooseUsPic.png";
import StepSection from "../../components/StepSection/StepSection";
import OurStory from "./OurStory/OurStory";
import MissionAndVision from "./MissionAndVision/MissionAndVision";

const AboutUs = () => {
  const bulletPoints = [
    "At 777Bags, we believe that exceptional packaging is more than just functional—it’s an extension of your brand",
    "Based in Rhode Island, we’re a locally owned business driven by a passion for quality, creativity, and customer satisfaction",
  ];

  const description = `
    Whether you’re in cannabis, retail, food service, or luxury goods, we deliver high-quality custom and stock packaging solutions that enhance your products and elevate your brand.
  `;
  return (
    <section className="mt-[148px]">
      <div>
        <ChooseUs
          title="Your Teammate in Packaging Excellence"
          bulletPoints={bulletPoints}
          description={description}
          image={choosePic}
          buttonText="Learn More About 777Bags"
        />
        <OurStory />
        <MissionAndVision />
        <StepSection
          title={"How It Works"}
          subtitle={"Your Packaging, Simplified"}
        />
      </div>
    </section>
  );
};

export default AboutUs;
