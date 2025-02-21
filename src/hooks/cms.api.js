import { axiosPublic } from './useAxiosPublic';

//homepage:
export const homepageDataFunc = async () => {
  const { data } = await axiosPublic('/api/home');
  return data;
};

//howItWorks:
export const howItWorksFunc = async () => {
  const { data } = await axiosPublic('/api/our-works');
  return data?.data;
};

// about us:
export const aboutUsDataFunc = async () => {
  const { data } = await axiosPublic('/api/about-us');
  return data;
};

// process:

export const processDataFunc = async () => {
  const { data } = await axiosPublic('/api/our-process');
  return data?.data;
};
