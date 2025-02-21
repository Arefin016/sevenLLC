import ChooseUs from '../Home/ChooseUs/ChooseUs';
import choosePic from '../../assets/images/chooseUsPic.png';
import StepSection from '../../components/StepSection/StepSection';
import OurStory from './OurStory/OurStory';
import MissionAndVision from './MissionAndVision/MissionAndVision';
import BetterPlanet from '../Home/BetterPlanet/BetterPlanet';
import commitmentPic from '../../assets/images/commitmentPic.png';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import WhatWeOffer from './WhatWeOffer/WhatWeOffer';
import useAxiosPublic, { axiosPublic } from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/components/Loader/Loader';

const AboutUs = () => {
  //fetch data:
  const aboutUsDataFunc = async () => {
    const { data } = await axiosPublic('/api/about-us');
    return data;
  };

  //query function:
  const { data: aboutUsData, isLoading } = useQuery({
    queryKey: ['about-us'],
    queryFn: aboutUsDataFunc,
  });

  // loader:
  if (isLoading) return <Loader />;

  return (
    <section className="mt-[148px]">
      <div>
        <ChooseUs data={aboutUsData?.data?.ABOUT_US} showBreadcrumb={true} />
        <OurStory data={aboutUsData?.data?.OUR_STORY} />
        <MissionAndVision />
        <WhyChooseUs />
        <div className="bg-[#FAFBFC] pb-[150px] pt-[137px] mt-[150px]">
          <StepSection
            isAbout={true}
            title={'Our Process'}
            subtitle={'Your Packaging, Simplified'}
            btnText={'Request a Quote'}
          />
        </div>
        <WhatWeOffer />
        {/* <BetterPlanet {...data} /> */}
      </div>
    </section>
  );
};

export default AboutUs;
