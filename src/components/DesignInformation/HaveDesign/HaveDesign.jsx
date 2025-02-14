import { useState } from "react";
import { UploadFileSvg } from "../../SvgContainer/SvgConainer";
import Button from "../../Button/Button";
import React from "react";
import { Space, Switch } from "antd";

const HaveDesign = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      setSelectedFile(file);
    }
  };

  // Toggle the state when switch is clicked
  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <section>
      {/*  */}
      <div className="mt-12">
        {/* This is the text area */}
        <div className="mt-[19px]">
          <div className="flex flex-col gap-y-[10.5px]">
            <label className="text-lg text-headingColor font-medium">
              Describe Your Design Idea*
            </label>
            <textarea
              className="bg-[#D9D9D91A] rounded-[10px] pt-[31.5px] pb-[160.5px] pl-[43px] pr-[65px]"
              type="text"
              placeholder="Tell us about your design concept, including colors, size, width, function text, logos, and placement preferences. Please be very specific."
            />
          </div>
        </div>
        {/* Upload Images */}
        <div className="mt-[11px]">
          <h1 className="text-headingColor text-lg font-medium">
            Upload References (can be a rough sketch)
          </h1>
          <p className="text-navbarColor font-semibold mt-[7px]">
            Upload images, logos, or references to guide the design.
          </p>
          <p className="text-navbarColor mt-3">
            *Accept PNG, JPG, PDF, AI, SVG (max size: 5MB).
          </p>
          {/* This is the choose file section */}
          <div className="bg-[#FFF] shadow-fileUpload py-4 rounded-[10px] mt-4">
            <div className="flex justify-center items-center">
              <label className="cursor-pointer px-4 py-2 text-headingColor text-base rounded-lg text-center font-semibold">
                Choose File
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <UploadFileSvg />
            </div>
            {selectedFile && (
              <p className="text-navbarColor text-center">
                Selected File: {selectedFile.name}
              </p>
            )}
          </div>
          {/* This is the preferred color */}
          <div>
            {/* First Input Column */}
            <div className="flex gap-10 mt-[19px]">
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                <label className="text-lg text-headingColor font-medium">
                  Preferred Colors*
                </label>
                <select
                  className="py-[28px] pl-[20px] bg-[#D9D9D91A] rounded-[10px] border border-gray-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="White">White</option>
                  <option value="Black">Black</option>
                  <option value="Blue">Blue</option>
                </select>
              </div>

              {/* Preferred Finish (optional) */}
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                <label className="text-lg text-headingColor font-medium">
                  Preferred Finish (optional)
                </label>
                <select
                  className="py-[28px] pl-[20px] bg-[#D9D9D91A] rounded-[10px] border border-gray-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="Matte">Matte</option>
                  <option value="Glossy">Glossy</option>
                  <option value="Satin">Satin</option>
                </select>
              </div>
            </div>
            {/* Second Input Column  */}
            <div className="flex gap-10 mt-[19px]">
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                <label className="text-lg text-headingColor font-medium">
                  Logo Included?
                </label>
                <div className="bg-[#D9D9D91A] pt-[27.5px] pb-[33.5px] pl-[40.5px] rounded-[10px]">
                  <Space direction="vertical">
                    <Switch
                      checkedChildren="Yes"
                      unCheckedChildren="No"
                      defaultChecked
                    />
                  </Space>
                </div>
              </div>
              {/* Brand Text  */}
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                <label className="text-lg text-headingColor font-medium">
                  Brand Text
                </label>
                <input
                  className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
                  type="text"
                  placeholder="Enter text for your packaging (e.g., brand name, tagline)"
                />
              </div>
            </div>
            {/*  */}
            <div className="bg-[#FFF] shadow-fileUpload py-4 rounded-[10px] mt-4 max-w-[664px]">
              <div className="flex justify-center items-center">
                <label className="cursor-pointer px-4 py-2 text-headingColor text-base rounded-lg text-center font-semibold">
                  Choose File
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <UploadFileSvg />
              </div>
              {selectedFile && (
                <p className="text-navbarColor text-center">
                  Selected File: {selectedFile.name}
                </p>
              )}
            </div>
            {/* This is the Design Placement */}
            <div className="flex flex-col gap-y-[10.5px] mt-[15.5px]">
              <label className="text-lg text-headingColor font-medium">
                Design Placement:*
              </label>
              <input
                className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
                type="number"
                placeholder="Design Placement"
              />
            </div>

            {/* Product Information */}
            {/* This is the Product Information */}
            <div className="mt-12">
              <h1 className="text-center text-buttonColor text-2xl">
                Product Information
              </h1>
              {/* First Input Column */}
              <div className="flex gap-10 mt-[19px]">
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Product Category*
                  </label>
                  <select
                    className="py-[28px] pl-[20px] bg-[#D9D9D91A] rounded-[10px] border border-gray-400"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Product Category
                    </option>
                    <option value="Cannabis & CBD Packaging">
                      Cannabis & CBD Packaging
                    </option>
                    <option value="Retail & Shopping Packaging">
                      Retail & Shopping Packaging
                    </option>
                    <option value="Food & Beverage Packaging">
                      Food & Beverage Packaging
                    </option>
                  </select>
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Item Type*
                  </label>
                  <input
                    className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
                    type="email"
                    placeholder="I.e Perfume Bottle with Spray Top"
                  />
                </div>
              </div>
              {/* Second Input Column  */}
              <div className="flex gap-10 mt-[19px]">
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Material(s) (optional)
                  </label>
                  <input
                    className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
                    type="number"
                    placeholder="Material(s)"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Accessories (optional)
                  </label>
                  <input
                    className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
                    type="text"
                    placeholder="Accessories"
                  />
                </div>
              </div>
            </div>

            {/* This is the contact information */}
            <div className="">
              {/* First Input Column */}
              <div className="flex gap-10 mt-[19px]">
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Size*
                  </label>
                  <select
                    className="py-[28px] pl-[20px] bg-[#D9D9D91A] rounded-[10px] border border-gray-400"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Size
                    </option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Thickness in microns (optional)
                  </label>
                  <input
                    className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
                    type="email"
                    placeholder="Thickness in microns"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Label?
                  </label>
                  {/*  */}
                  <div className="bg-[#D9D9D91A] pt-[27.5px] pb-[33.5px] pl-[40.5px] rounded-[10px]">
                    <Space direction="vertical">
                      <Switch
                        checkedChildren="Yes"
                        unCheckedChildren="No"
                        defaultChecked
                      />
                    </Space>
                  </div>
                </div>
              </div>
            </div>

            {/* This is the Order Quantity  */}
            <div className="mt-12">
              <h1 className="text-center text-buttonColor text-2xl">
                Order Quantity
              </h1>
              {/* First Input Column */}
              <div className="flex gap-10 mt-[19px]">
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Desired Quantity (required)*{" "}
                    <span className="text-buttonColor text-lg font-semibold underline">
                      MOQ guide
                    </span>
                  </label>
                  <input
                    className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
                    type="number"
                    placeholder="Enter the number of units (e.g., 1,000)"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Reoccurring?
                  </label>
                  <div className="bg-[#D9D9D91A] pt-[27.5px] pb-[33.5px] pl-[40.5px] rounded-[10px]">
                    <Space direction="vertical">
                      <Switch
                        checkedChildren="Yes"
                        unCheckedChildren="No"
                        defaultChecked
                      />
                    </Space>
                  </div>
                </div>
              </div>
            </div>

            {/* This is the Shipping & Delivery */}
            <div className="mt-12">
              <h1 className="text-center text-buttonColor text-2xl">
                Shipping & Delivery
              </h1>
              {/* First Input Column */}
              <div className="mt-[19px]">
                <div className="flex flex-col gap-y-[10.5px]">
                  <label className="text-lg text-headingColor font-medium">
                    Shipping Address (required)*
                  </label>
                  <input
                    className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
                    type="text"
                    placeholder="Enter full delivery address.."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* This it the button */}
      <div className="flex justify-center mt-12">
        <Button text={"Place Order"} color={"bg-buttonColor"} />
      </div>
    </section>
  );
};

export default HaveDesign;
