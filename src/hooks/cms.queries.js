import { useQuery } from '@tanstack/react-query';
import {
  aboutUsDataFunc,
  homepageDataFunc,
  howItWorksFunc,
  processDataFunc,
} from './cms.api';

//homepage:
export const useHomePageQuery = () => {
  return useQuery({
    queryKey: ['homepageData'],
    queryFn: homepageDataFunc,
  });
};

// how-it-works:
export const useHowItWorksQuery = () => {
  return useQuery({
    queryKey: ['how-it-works'],
    queryFn: howItWorksFunc,
  });
};

// about-us:
export const useAboutUsQuery = () => {
  return useQuery({
    queryKey: ['about-us'],
    queryFn: aboutUsDataFunc,
  });
};

// process :
export const useProcessQuery = () => {
  return useQuery({
    queryKey: ['process'],
    queryFn: processDataFunc,
  });
};
