import { useQuery } from '@tanstack/react-query';
import {
  aboutUsDataFunc,
  allBlogsFunc,
  allProductsFunc,
  getCategoriesFunc,
  getOrderDetailsFunc,
  getOrderRequestFunc,
  getOrderSummaryFunc,
  getPaymentFunc,
  homepageDataFunc,
  howItWorksFunc,
  orderSummeryFunc,
  processDataFunc,
  productsAndServicesFunc,
  recentBlogsFunc,
  singleBlogFunc,
  whatWeOfferFunc,
} from './cms.api';
import { GetUserDataFunc } from './auth.hooks';

//homepage:
export const useHomePageQuery = () => {
  return useQuery({
    queryKey: ['homepageData'],
    queryFn: homepageDataFunc,
  });
};

// all products:
export const useAllProductsQuery = () => {
  return useQuery({
    queryKey: ['all-products'],
    queryFn: allProductsFunc,
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

//what we offer:
export const useWhatWeOfferQuery = () => {
  return useQuery({
    queryKey: ['what-we-offer'],
    queryFn: whatWeOfferFunc,
  });
};

// process :
export const useProcessQuery = () => {
  return useQuery({
    queryKey: ['process'],
    queryFn: processDataFunc,
  });
};

// products and services:
export const useProductsAndServicesQuery = () => {
  return useQuery({
    queryKey: ['products-and-services'],
    queryFn: productsAndServicesFunc,
  });
};

// get all blogs:
export const useAllBlogsQuery = () => {
  return useQuery({
    queryKey: ['all-blogs'],
    queryFn: allBlogsFunc,
  });
};

// single blog query:
export const useSingleBlogQuery = (slug) => {
  return useQuery({
    queryKey: ['single-blog', slug], // Make sure slug is part of the key
    queryFn: () => singleBlogFunc(slug), // Fetch new data when slug changes
    enabled: !!slug, // Ensure it only runs when slug is available
  });
};

//recent blogs query:
export const useRecentBlogsQuery = () => {
  return useQuery({
    queryKey: ['recent-blogs'],
    queryFn: recentBlogsFunc,
  });
};

//get user info:
export const useGetUserInfoQuery = (token) => {
  return useQuery({
    queryKey: ['user-info', token], // Include token in query key
    queryFn: GetUserDataFunc, // Fetch function
    enabled: !!token, // Only run query if token exists
  });
};

// get all categories:
export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ['all-categories-list'],
    queryFn: getCategoriesFunc,
  });
};

// get all order request
export const useGetAllOrderRequest = () => {
  return useQuery({
    queryKey: ['order-request'],
    queryFn: getOrderRequestFunc,
  });
};

// get all user payment:
export const useGetAllPayments = () => {
  return useQuery({
    queryKey: ['all-payments'],
    queryFn: getPaymentFunc,
  });
};

// get the order summery
export const useOrderSummery = () => {
  return useQuery({
    queryKey: ["order-summery"],
    queryFn: orderSummeryFunc,
  });
};
