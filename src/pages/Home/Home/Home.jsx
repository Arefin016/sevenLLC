import StepSection from "../../../components/StepSection/StepSection";
import Banner from "../Banner/Banner";
import BetterPlanet from "../BetterPlanet/BetterPlanet";
import ChooseUs from "../ChooseUs/ChooseUs";
import Packaging from "../Packaging/Packaging";
import Request from "../Request/Request";

const Home = () => {
  return (
    <div>
      <Banner />
      <Request />
      <ChooseUs />
      <Packaging />
      <StepSection
        title={"How It Works"}
        subtitle={"Your Packaging, Simplified"}
      />
      <BetterPlanet />
    </div>
  );
};

export default Home;
