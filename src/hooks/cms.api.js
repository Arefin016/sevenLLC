import { axiosPublic } from "./useAxiosPublic";

// Homepage Data
export const homepageDataFunc = async () => {
  const { data } = await axiosPublic('/api/home');
  return data;
};

// All Products
export const allProductsFunc = async () => {
  const { data } = await axiosPublic('/api/product-list');
  return data?.data;
};

// How It Works
export const howItWorksFunc = async () => {
  const { data } = await axiosPublic('/api/our-works');
  return data?.data;
};

// About Us
export const aboutUsDataFunc = async () => {
  const { data } = await axiosPublic('/api/about-us');
  return data;
};

// What We Offer
export const whatWeOfferFunc = async () => {
  const { data } = await axiosPublic('/api/what-we-offer');
  return data?.data;
};

// Our Process
export const processDataFunc = async () => {
  const { data } = await axiosPublic('/api/our-process');
  return data?.data;
};

// Products & Services
export const productsAndServicesFunc = async () => {
  const { data } = await axiosPublic('/api/explore-all');
  return data?.data;
};

// Contact Form Submission
export const contactFormFunc = async (payload) => {
  const { data } = await axiosPublic.post('/api/contact-us', payload);
  return data?.data;
};

// All Blogs
export const allBlogsFunc = async () => {
  const { data } = await axiosPublic('/api/blog');
  return data?.data;
};

// Single Blog
export const singleBlogFunc = async (slug) => {
  try {
    const { data } = await axiosPublic(`/api/blog/${slug}`);
    return data?.data || null;
  } catch (error) {
    console.error(`Error fetching blog: ${slug}`, error);
    throw new Error('Failed to fetch blog');
  }
};

// Recent Blogs
export const recentBlogsFunc = async () => {
  const { data } = await axiosPublic('/api/recent-blogs');
  return data?.data;
};
