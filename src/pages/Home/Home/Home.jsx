import StepSection from "../../../components/StepSection/StepSection";
import Banner from "../Banner/Banner";
import BetterPlanet from "../BetterPlanet/BetterPlanet";
import ChooseUs from "../ChooseUs/ChooseUs";
import Packaging from "../Packaging/Packaging";
import Request from "../Request/Request";
import choosePic from "../../../assets/images/chooseUsPic.png";
import betterPlanetPic from "../../../assets/images/betterPlanetPic.png";

const Home = () => {
  const bulletPoints = [
    "Innovative designs to enhance your branding",
    "Eco-friendly and sustainable materials",
    "Competitive pricing for bulk orders",
  ];

  const description = `
    Discover premium-quality, customizable packaging solutions at 777bags.com. 
    From Mylar bags to eco-friendly options, elevate your brand with unique designs.
    - Locally Owned Globally Connected
    - Dedicated to supporting local businesses, communities, and organizations that are associated with our team!
    - Packaging Solutions For Every Industry
  `;

  const data = {
    title: "Packaging That’s Better for the Planet",
    description:
      "We are committed to offering sustainable, recyclable, and reusable packaging options to reduce environmental impact. Ask us about our eco-friendly materials to align your packaging with your green goals.",
    buttonText: "Explore Our Sustainability Practices",
    backgroundImage: betterPlanetPic,
    gradient:
      "linear-gradient(0deg, rgba(7, 160, 236, 0.70) 0%, rgba(7, 160, 236, 0.70) 100%)",
  };
  return (
    <div>
      <Banner />
      <Request />
      <ChooseUs
        title="Why Choose Us?"
        bulletPoints={bulletPoints}
        description={description}
        image={choosePic}
        buttonText="Learn More About 777Bags"
      />
      <Packaging />
      <StepSection
        title={"How It Works"}
        subtitle={"Your Packaging, Simplified"}
        btnText={"Learn More About Our Process"}
      />
      <BetterPlanet {...data} />
    </div>
  );
};

export default Home;
