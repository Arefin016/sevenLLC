import { axiosPublic } from "./useAxiosPublic";
import { axiosSecure } from "./useAxiosSecure";

// Homepage Data
export const homepageDataFunc = async () => {
  try {
    const { data } = await axiosPublic("/api/home");
    return data;
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    throw new Error("Failed to fetch homepage data");
  }
};

// All Products
export const allProductsFunc = async () => {
  try {
    const { data } = await axiosPublic("/api/product-list");
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw new Error("Failed to fetch products");
  }
};

// How It Works
export const howItWorksFunc = async () => {
  try {
    const { data } = await axiosPublic("/api/our-works");
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching how-it-works data:", error);
    throw new Error("Failed to fetch how-it-works data");
  }
};

// About Us
export const aboutUsDataFunc = async () => {
  try {
    const { data } = await axiosPublic("/api/about-us");
    return data;
  } catch (error) {
    console.error("Error fetching about us data:", error);
    throw new Error("Failed to fetch about us data");
  }
};

// What We Offer
export const whatWeOfferFunc = async () => {
  try {
    const { data } = await axiosPublic("/api/what-we-offer");
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching what we offer:", error);
    throw new Error("Failed to fetch what we offer data");
  }
};

// Our Process
export const processDataFunc = async () => {
  try {
    const { data } = await axiosPublic("/api/our-process");
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching process data:", error);
    throw new Error("Failed to fetch process data");
  }
};

// Products & Services
export const productsAndServicesFunc = async () => {
  try {
    const { data } = await axiosPublic("/api/explore-all");
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching products and services:", error);
    throw new Error("Failed to fetch products and services");
  }
};

// Contact Form Submission
export const contactFormFunc = async (payload) => {
  try {
    const { data } = await axiosPublic.post("/api/contact-us", payload);
    return data?.data || {};
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw new Error("Failed to submit contact form");
  }
};
// Billing Address Form Submission
export const billingAddressFormFunc = async (payload) => {
  try {
    const { data } = await axiosSecure.post(
      "/api/users/billing-address",
      payload
    );
    return data?.data || {};
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw new Error("Failed to submit contact form");
  }
};

// Order request Submission
export const orderRequestFormFunc = async (payload) => {
  try {
    const { data } = await axiosSecure.post("/api/place-order", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(data);

    return data?.data || {};
  } catch (error) {
    console.error("Enter submitting order form: ", error);
    throw new Error("Failed to submit order form");
  }
};

// Delete functionality
export const deleteOrderFunc = async (payload) => {
  try {
    const { data } = await axiosSecure.delete("/api/place-order", payload);
    return data?.data || {};
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Failed to delete order request");
  }
};

// All Blogs
export const allBlogsFunc = async () => {
  try {
    const { data } = await axiosPublic("/api/blog");
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    throw new Error("Failed to fetch blogs");
  }
};

// Single Blog
export const singleBlogFunc = async (slug) => {
  try {
    const { data } = await axiosPublic(`/api/blog/${slug}`);
    return data?.data || null;
  } catch (error) {
    console.error(`Error fetching blog: ${slug}`, error);
    throw new Error("Failed to fetch blog");
  }
};

// Recent Blogs
export const recentBlogsFunc = async () => {
  try {
    const { data } = await axiosPublic("/api/recent-blogs");
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching recent blogs:", error);
    throw new Error("Failed to fetch recent blogs");
  }
};

//user information update:
export const userInformationUpdateFunc = async (payload) => {
  try {
    const { data } = await axiosSecure.post("/api/users/data/update", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.error("Error updating user information:", error);
    throw new Error("Failed to update user information");
  }
};

// Password Change:
export const passwordChangeFunc = async (payload) => {
  try {
    const { data } = await axiosSecure.post(
      "/api/users/change-password",
      payload
    );
    return data;
  } catch (error) {
    console.error("Error changing password:", error);
    throw new Error("Failed to change password");
  }
};

// get all categories
export const getCategoriesFunc = async () => {
  try {
    const { data } = await axiosPublic("/api/categories");
    return data?.data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error getting the categories");
  }
};

//get all order request
export const getOrderRequestFunc = async () => {
  try {
    const { data } = await axiosSecure("/api/user-order");
    return data?.data;
  } catch (error) {
    console.error("Error fetching order request data:", error);
    throw new Error("Error getting the order request");
  }
};

// get all payments:
export const getPaymentFunc = async () => {
  const { data } = await axiosSecure("/api/user-order/payment");
  return data?.data;
};

// delete one payment:
export const deletePaymentFunc = async (id) => {
  const { data } = await axiosSecure(`/api/payment-history/delete/${id}`);
  return data?.data;
};

// Get the order
export const orderSummeryFunc = async () => {
  const { data } = await axiosSecure("api/user-order/summary");
  return data?.data;
};

// get order details:
export const getOrderDetailsFunc = async (id) => {
  const { data } = await axiosSecure(`/api/user-order/details/${id}`);
  return data?.data;
};
