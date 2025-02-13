import Button from "@/components/Button/Button";
import React from "react";

const ContactUs = () => {
  return (
    <section className="mt-[122px]">
      <div className="container mx-auto">
        {/* This is the title section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-headingColor text-5xl font-bold">
            Let’s Connect
          </h1>
        </div>
        {/*  */}
        {/* First Input Column */}
        <div className="flex gap-10 mt-[51px]">
          <div className="flex flex-col gap-y-[10.5px] w-[50%]">
            <label className="text-lg text-headingColor font-medium">
              Name*
            </label>
            <input
              className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
              type="text"
              placeholder="Full Name"
            />
          </div>
          {/*  */}
          <div className="flex flex-col gap-y-[10.5px] w-[50%]">
            <label className="text-lg text-headingColor font-medium">
              Business Name*
            </label>
            <input
              className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
              type="text"
              placeholder="Business Name"
            />
          </div>
        </div>
        {/* Second Input Column  */}
        <div className="flex gap-10 mt-[19px]">
          <div className="flex flex-col gap-y-[10.5px] w-[50%]">
            <label className="text-lg text-headingColor font-medium">
              Email*
            </label>
            <input
              className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
              type="email"
              placeholder="Email"
            />
          </div>
          {/*  */}
          <div className="flex flex-col gap-y-[10.5px] w-[50%]">
            <label className="text-lg text-headingColor font-medium">
              Phone Number*
            </label>
            <input
              className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
              type="number"
              placeholder="Phone Number"
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-[10.5px]">
          <label className="text-lg text-headingColor font-medium">
            Message*
          </label>
          <textarea
            className="bg-[#D9D9D91A] rounded-[10px] pt-[31.5px] pb-[160.5px] pl-[43px] pr-[65px]"
            type="text"
            placeholder="Write your message here..."
          />
        </div>
        {/* This is the button section */}
        <div className="flex flex-col justify-center text-center mt-7">
          <h1 className="text-buttonColor text-xl italic font-[350px]">
            Backed by trusted industry leaders, we’re here to support your
            business every step of the way.
          </h1>
          <div className="text-center flex justify-center mt-[60px] mb-[45px]">
            <Button text={"Send Message"} color={"bg-buttonColor"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
