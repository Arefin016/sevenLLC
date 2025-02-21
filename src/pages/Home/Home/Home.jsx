import StepSection from '../../../components/StepSection/StepSection';
import Banner from '../Banner/Banner';
import Packaging from '../Packaging/Packaging';
import Request from '../Request/Request';
import Loader from '@/components/Loader/Loader';
import ChooseUs from '../ChooseUs/ChooseUs';
import BetterPlanet from '../BetterPlanet/BetterPlanet';
import { betterPlanetData } from '@/data/data';
import betterPlanetPic from '../../../assets/images/betterPlanetPic.png';
import { useHomePageQuery, useHowItWorksQuery } from '@/hooks/cms.queries';

const Home = () => {
  const { data: homepageData, isLoading } = useHomePageQuery();
  const { data: howItWorksData, isLoading: worksLoading } =
    useHowItWorksQuery();

  // loader:
  if (isLoading || worksLoading) return <Loader />;

  console.log(howItWorksData);
  return (
    <div>
      <Banner data={homepageData?.data?.hero_section} />
      <Request />
      <ChooseUs data={homepageData?.data?.why_choose_us} />
      <Packaging />
      <div className="mt-[137px]">
        <StepSection
          data={howItWorksData}
          title={'How It Works'}
          subtitle={'Your Packaging, Simplified'}
          btnText={'Learn More About Our Process'}
        />
      </div>
      <div className="mt-[150px]">
        <BetterPlanet
          data={betterPlanetData}
          backgroundImage={betterPlanetPic}
        />
      </div>
    </div>
  );
};

export default Home;
