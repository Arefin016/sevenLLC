import StepSection from '../../../components/StepSection/StepSection';
import Banner from '../Banner/Banner';
import Packaging from '../Packaging/Packaging';
import Request from '../Request/Request';
import { axiosPublic } from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/components/Loader/Loader';
import ChooseUs from '../ChooseUs/ChooseUs';
import BetterPlanet from '../BetterPlanet/BetterPlanet';
import { betterPlanetData } from '@/data/data';
import betterPlanetPic from '../../../assets/images/betterPlanetPic.png';

const Home = () => {
  //fetch Function:
  const homepageDataFunc = async () => {
    const { data } = await axiosPublic('/api/home');
    return data;
  };

  //query function:
  const { data: homepageData, isLoading } = useQuery({
    queryKey: ['homepageData'],
    queryFn: homepageDataFunc,
  });

  // loader:
  if (isLoading) return <Loader />;

  return (
    <div>
      <Banner data={homepageData?.data?.hero_section} />
      <Request />
      <ChooseUs data={homepageData?.data?.why_choose_us} />
      <Packaging />
      <div className="mt-[137px]">
        <StepSection
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
