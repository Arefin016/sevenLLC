/* eslint-disable react/prop-types */
import { UploadFileSvg } from "../../SvgContainer/SvgConainer";
import { Empty, Space, Switch } from "antd";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const HaveDesign = ({}) => {
  const [fillData, setFillData] = useState();
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const handleSelectChange = (value) => {
    console.log(value);
    const index = parseInt(value.split("_")[1]);
    setFillData(savedAddresses[index]);
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updatedAddresses = [...addresses, data];
    console.log(updatedAddresses);
    localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));
    setAddresses(updatedAddresses);
    setAddNewAddress(false);
    reset();
  };

  // This is the local storage data
  const savedAddresses =
    JSON.parse(localStorage.getItem("savedAddresses")) || [];

  useEffect(() => {
    if (fillData) {
      reset({
        firstName: fillData.firstName || "",
        lastName: fillData.lastName || "",
        email: fillData.email || "",
        phone: fillData.phone || "",
        address: fillData.address || "",
        city: fillData.City || "",
        region: fillData.region || "",
        postalCode: fillData.postalCode || "",
        country: fillData.country || "",
        companyName: fillData.companyName || "",
      });
      if (fillData.country) {
        setValue("Country", fillData.country);
      }
      if (fillData?.region) {
        setValue("Region", fillData?.region);
      }
      if (fillData.City) {
        setValue("City", fillData.City);
      }
    }
  }, [fillData]);

  return (
    <section>
      {/*  */}
      <div className="mt-12">
        {/* This is the text area */}
        <div className="mt-[19px]">
          <div className="flex flex-col gap-y-[10.5px]">
            <label className="xl:text-lg text-base text-headingColor font-medium">
              Describe Your Design Idea*
            </label>
            <textarea
              {...register("design_details", { required: true })}
              className="bg-[#D9D9D91A] rounded-[10px] lg:pt-[31.5px] pt-5 lg:pb-[160.5px] pb-28 lg:pl-[43px] pl-5 lg:pr-[65px]"
              type="text"
              placeholder="Tell us about your design concept, including colors, size, width, function text, logos, and placement preferences. Please be very specific."
            />
          </div>
        </div>
        {/* Upload Images */}
        <div className="mt-[11px]">
          <h1 className="text-headingColor xl:text-lg text-base font-medium">
            Upload References (can be a rough sketch)
          </h1>
          <p className="text-navbarColor font-semibold mt-[7px] lg:text-sm text-xs">
            Upload images, logos, or references to guide the design.
          </p>
          <p className="text-navbarColor mt-3 lg:text-sm text-xs">
            *Accept PNG, JPG, PDF, AI, SVG (max size: 5MB).
          </p>
          {/* This is the choose file section */}
          <div className="bg-[#FFF] shadow-fileShadow lg:py-4 py-2 rounded-[10px] lg:mt-4 mt-5">
            <div className="flex justify-center items-center">
              <label className="cursor-pointer px-4 py-2 text-headingColor lg:text-base text-sm rounded-lg text-center font-semibold">
                Choose File
                <input
                  type="file"
                  className="hidden"
                  // onChange={handleFileChange}
                />
              </label>
              <UploadFileSvg />
            </div>
            {/* {selectedFile && (
              <p className="text-navbarColor text-center">
                Selected File: {selectedFile.name}
              </p>
            )} */}
          </div>
          {/* This is the preferred color */}
          <div>
            {/* First Input Column */}
            <div className="flex flex-col md:flex-row lg:gap-10 gap-5 mt-[19px]">
              {/* Preferred color */}
              <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                <label className="xl:text-lg text-base text-headingColor font-medium">
                  Preferred Colors*
                </label>
                <Controller
                  name="color_code"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="xl:py-[31px] xl:h-[97px] h-[48px] xl:pl-[49px] pl-5 bg-[#D9D9D91A] xl:!text-xl text-sm text-headingColor">
                        <SelectValue placeholder="Preferred Colors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Choose an option</SelectLabel>
                          <SelectItem value="White">White</SelectItem>
                          <SelectItem value="Black">Black</SelectItem>
                          <SelectItem value="Blue">Blue</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              {/* Preferred Finish (optional) */}
              <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                <label className="xl:text-lg text-base text-headingColor font-medium">
                  Preferred Finish (optional)
                </label>
                <Controller
                  name="preferred_finish"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="xl:py-[30px] xl:h-[97px] h-[48px] xl:pl-[49px] pl-5 bg-[#D9D9D91A] xl:!text-xl text-sm text-headingColor">
                        <SelectValue
                          className="!text-navbarColor"
                          placeholder="Preferred Finish"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Choose an option</SelectLabel>
                          <SelectItem value="Matte">Matte</SelectItem>
                          <SelectItem value="Glossy">Glossy</SelectItem>
                          <SelectItem value="Satin">Satin</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
            {/* Second Input Column  */}
            <div className="flex flex-col md:flex-row lg:gap-10 gap-5 mt-[19px]">
              <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                <label className="xl:text-lg text-base text-headingColor font-medium">
                  Logo Included?
                </label>
                <div className="bg-[#D9D9D91A] xl:h-[97px] h-[48px] pt-[27.5px] pb-[33.5px] xl:pl-[40.5px] pl-5 rounded-[10px] flex items-center">
                  <Space direction="vertical">
                    {/* Use Controller to Manage Switch Component */}
                    <Controller
                      name="logo_included"
                      control={control}
                      defaultValue={0} // Default unchecked
                      render={({ field }) => (
                        <Switch
                          checked={field.value === 1}
                          onChange={(checked) =>
                            field.onChange(checked ? 1 : 0)
                          }
                          checkedChildren="Yes"
                          unCheckedChildren="No"
                        />
                      )}
                    />
                  </Space>
                </div>
              </div>
              {/* Brand Text  */}
              <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                <label className="xl:text-lg text-base text-headingColor font-medium">
                  Brand Text
                </label>
                <Input
                  {...register("brand_text", { required: true })}
                  className="xl:py-[31px] xl:h-[97px] h-[48px] xl:pl-12 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                  type="text"
                  placeholder="Enter text for your packaging (e.g., brand name, tagline)"
                />
              </div>
            </div>
            {/*  */}
            <div className="bg-[#FFF] shadow-fileShadow lg:py-4 py-2 rounded-[10px] mt-4 max-w-[664px]">
              <div className="flex justify-center items-center">
                <label className="cursor-pointer px-4 py-2 text-headingColor lg:text-base text-sm rounded-lg text-center font-semibold">
                  Choose File
                  <input
                    type="file"
                    className="hidden"
                    // onChange={handleFileChange}
                  />
                </label>
                <UploadFileSvg />
              </div>
              {/* {selectedFile && (
                <p className="text-navbarColor text-center">
                  Selected File: {selectedFile.name}
                </p>
              )} */}
            </div>
            {/* This is the Design Placement */}
            <div className="flex flex-col gap-y-[10.5px] mt-[15.5px]">
              <label className="xl:text-lg text-base text-headingColor font-medium">
                Design Placement:*
              </label>
              <Input
                {...register("design_placement", { required: true })}
                className="xl:py-[31px] xl:h-[97px] h-[48px] xl:pl-12 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                type="text"
                placeholder="Design Placement"
              />
            </div>
            {/* This is the Product Information */}
            <div className="mt-12">
              <h1 className="text-center text-buttonColor lg:text-2xl text-xl md:text-[22px]">
                Product Information
              </h1>
              {/* First Input Column */}
              <div className="flex flex-col md:flex-row lg:gap-10 gap-5 mt-[19px]">
                <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                  <label className="xl:text-lg text-base text-headingColor font-medium">
                    Product Category*
                  </label>
                  <Controller
                    name="category_id"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="xl:py-[30px] xl:h-[97px] h-[48px] xl:pl-[49px] pl-5 bg-[#D9D9D91A] xl:!text-xl text-sm text-headingColor">
                          <SelectValue
                            className="!text-navbarColor"
                            placeholder="Product Category"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Product Category</SelectLabel>
                            <SelectItem value="Cannabis & CBD Packaging">
                              Cannabis & CBD Packaging
                            </SelectItem>
                            <SelectItem value="Retail & Shopping Packaging">
                              Retail & Shopping Packaging
                            </SelectItem>
                            <SelectItem value="Food & Beverage Packaging">
                              Food & Beverage Packaging
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                  <label className="xl:text-lg text-base text-headingColor font-medium">
                    Item Type*
                  </label>
                  <Input
                    {...register("item_type", { required: true })}
                    className="xl:py-[31px] xl:h-[97px] h-[48px] xl:pl-12 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                    type="text"
                    placeholder="I.e Perfume Bottle with Spray Top"
                  />
                </div>
              </div>
              {/* Second Input Column  */}
              <div className="flex flex-col md:flex-row lg:gap-10 gap-5 mt-7">
                <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                  <label className="xl:text-lg text-base text-headingColor font-medium">
                    Material(s) (optional)
                  </label>
                  <Input
                    {...register("material")}
                    className="xl:py-[31px] xl:h-[97px] h-[48px] xl:pl-12 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                    type="text"
                    placeholder="Material(s)"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                  <label className="xl:text-lg text-base text-headingColor font-medium">
                    Accessories (optional)
                  </label>
                  <Input
                    {...register("accessories")}
                    className="xl:py-[31px] xl:h-[97px] h-[48px] xl:pl-12 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                    type="text"
                    placeholder="Accessories"
                  />
                </div>
              </div>
            </div>

            {/* This is the contact information */}
            <div className="">
              {/* First Input Column */}
              <div className="flex flex-col md:flex-row lg:gap-10 gap-5 justify-center items-center md:gap-3 mt-7">
                {/* Size* */}
                <div className="flex flex-col md:gap-y-[34px] lg:gap-y-[10.5px] lg:w-[50%] w-full">
                  <label className="xl:text-lg text-base text-headingColor font-medium">
                    Size*
                  </label>
                  <Controller
                    name="size"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="xl:py-[28px] xl:h-[97px] h-[48px] pl-5 bg-[#D9D9D91A] xl:!text-xl text-sm text-headingColor">
                          <SelectValue
                            className="!text-navbarColor"
                            placeholder="Preferred Colors"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Product Category</SelectLabel>
                            <SelectItem value="Small">Small</SelectItem>
                            <SelectItem value="Medium">Medium</SelectItem>
                            <SelectItem value="Large">Large</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                {/* Thickness in microns (optional) */}
                <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                  <label className="xl:text-lg text-base text-headingColor font-medium">
                    Thickness in microns (optional)
                  </label>
                  <Input
                    {...register("thickness_in_micron")}
                    className="xl:py-[31px] xl:h-[97px] h-[48px] xl:pl-12 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                    type="text"
                    placeholder="Thickness in microns"
                  />
                </div>
                {/* Label? */}
                <div className="flex flex-col md:gap-y-[34px] lg:gap-y-[10.5px] lg:w-[50%] w-full">
                  <label className="xl:text-lg text-base text-headingColor font-medium">
                    Label?
                  </label>
                  {/*  */}
                  <div className="bg-[#D9D9D91A] xl:h-[97px] h-[48px] flex items-center xl:pt-[27.5px] py-5 xl:pb-[33.5px] xl:pl-[40.5px] pl-5 rounded-[10px]">
                    <Space direction="vertical">
                      <Controller
                        name="label"
                        control={control}
                        defaultValue={0} // Default unchecked
                        render={({ field }) => (
                          <Switch
                            checked={field.value === 1}
                            onChange={(checked) =>
                              field.onChange(checked ? 1 : 0)
                            }
                            checkedChildren="Yes"
                            unCheckedChildren="No"
                          />
                        )}
                      />
                    </Space>
                  </div>
                </div>
              </div>
            </div>

            {/* This is the Order Quantity  */}
            <div className="mt-12">
              <h1 className="text-center text-buttonColor lg:text-2xl text-xl md:text-[22px]">
                Order Quantity
              </h1>
              {/* First Input Column */}
              <div className="flex flex-col items-center md:flex-row lg:gap-10 gap-5 mt-[19px]">
                <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full my-2">
                  <label className="xl:text-lg text-base text-headingColor font-medium">
                    Desired Quantity (required)*
                    <span className="text-buttonColor xl:text-lg text-base font-semibold underline">
                      MOQ guide
                    </span>
                  </label>
                  <Input
                    {...register("quantity", { required: true })}
                    className="xl:py-[31px] xl:h-[97px] h-[48px] xl:pl-10 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                    type="number"
                    placeholder="Enter the number of units (e.g., 1,000)"
                  />
                </div>
                {/* Reoccurring */}
                <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                  <label className="xl:text-lg text-base text-headingColor font-medium">
                    Reoccurring?
                  </label>
                  <div className="bg-[#D9D9D91A] xl:h-[97px] h-[48px] flex items-center xl:pt-[27.5px] py-5 xl:pb-[33.5px] xl:pl-[40.5px] pl-5 rounded-[10px]">
                    <Space direction="vertical">
                      <Controller
                        name="reoccurring"
                        control={control}
                        defaultValue={0} // Default unchecked
                        render={({ field }) => (
                          <Switch
                            checked={field.value === 1}
                            onChange={(checked) =>
                              field.onChange(checked ? 1 : 0)
                            }
                            checkedChildren="Yes"
                            unCheckedChildren="No"
                          />
                        )}
                      />
                    </Space>
                  </div>
                </div>
              </div>
            </div>
            {/* This is the Shipping & Delivery */}
            <div className="mt-12">
              <h1 className="text-center text-buttonColor lg:text-2xl text-xl md:text-[22px]">
                Shipping & Delivery
              </h1>
              {/* First Input Column */}
              <div className="flex flex-col md:flex-row lg:gap-10 gap-5 mt-[19px]">
                <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                  <label className="xl:text-lg text-base text-headingColor font-medium">
                    Shipping Address (required)*
                  </label>
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger className="xl:py-[28px] xl:h-[97px] h-[60px] pl-5 bg-[#D9D9D91A] xl:!text-xl text-sm text-buttonColor">
                      <SelectValue
                        className="!text-navbarColor"
                        placeholder="Choose An Address"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {savedAddresses.length > 0 ? (
                        savedAddresses.map((address, index) => (
                          <SelectItem
                            key={index}
                            value={`Address_${index}`}
                            item
                          >
                            Billing Address {index + 1}
                          </SelectItem>
                        ))
                      ) : (
                        <Empty />
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* This is the First and Last field */}
                <div className="flex flex-col md:flex-row lg:gap-10 gap-0 items-center md:gap-3 mt-7">
                  {/* This is the First Name input */}
                  <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                    <label className="xl:text-lg text-base text-headingColor font-medium">
                      First Name*
                    </label>
                    <Input
                      className="xl:py-[31px] xl:h-[97px] h-[60px] xl:pl-12 pl-5bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      {...register("firstName", { required: true })}
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-sm">
                        First Name is required
                      </span>
                    )}
                  </div>
                  {/* This is the Last Name input */}
                  <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                    <label className="xl:text-lg text-base text-headingColor font-medium">
                      Last Name*
                    </label>
                    <Input
                      className="xl:py-[28px] xl:h-[97px] h-[60px] pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm  text-headingColor"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      {...register("lastName", { required: true })}
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-sm">
                        Last Name is required
                      </span>
                    )}
                  </div>
                </div>
                {/* This is the Phone and Email field */}
                <div className="flex flex-col md:flex-row lg:gap-10 gap-0 items-center md:gap-3 mt-7">
                  {/* This is the Phone input */}
                  <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                    <label className="xl:text-lg text-base text-headingColor font-medium">
                      Phone*
                    </label>
                    <Input
                      className="xl:py-[31px] xl:h-[97px] h-[60px] xl:pl-12 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm  text-headingColor"
                      type="number"
                      name="phone"
                      {...register("phone", { required: true })}
                      placeholder="Phone"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-sm">
                        Phone is required
                      </span>
                    )}
                  </div>
                  {/* This is the Email input */}
                  <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                    <label className="xl:text-lg text-base text-headingColor font-medium">
                      Email*
                    </label>
                    <Input
                      className="xl:py-[31px] xl:h-[97px] h-[60px] xl:pl-12 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm  text-headingColor"
                      type="email"
                      name="email"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        Email is required
                      </span>
                    )}
                  </div>
                </div>
                {/* This is the Company Name field */}
                <div className="flex flex-col md:flex-row lg:gap-10 gap-5 mt-7">
                  <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                    <label className="xl:text-lg text-base text-headingColor font-medium">
                      Company Name
                    </label>
                    <Input
                      className="py-[31px] xl:h-[97px] h-[60px] xl:pl-12 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      {...register("companyName", { required: true })}
                    />
                    {errors.companyName && (
                      <span className="text-red-500 text-sm">
                        Company Name is required
                      </span>
                    )}
                  </div>
                </div>
                {/* This is the Country and Region field */}
                <div className="flex flex-col md:flex-row lg:gap-10 gap-5 mt-7">
                  {/* This is the Country* input */}
                  <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                    <label className="xl:text-lg text-base text-headingColor font-medium">
                      Country*
                    </label>
                    <Controller
                      name="country"
                      control={control}
                      rules={{ required: "Country is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          {...field}
                          onValueChange={(value) => field.onChange(value)}
                        >
                          <SelectTrigger className="py-[30px] xl:h-[97px] h-[60px] xl:pl-12 pl-5 bg-[#D9D9D91A] xl:!text-xl text-sm text-headingColor">
                            <SelectValue
                              className="!text-navbarColor"
                              placeholder="Select"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Country</SelectLabel>
                              <SelectItem value="America">America</SelectItem>
                              <SelectItem value="Uk">UK</SelectItem>
                              <SelectItem value="Canada">Canada</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.country && (
                      <p className="text-red-500 text-sm">
                        {errors.country.message}{" "}
                      </p>
                    )}
                  </div>
                  {/* This is the Region/State* input */}
                  <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                    <label className="xl:text-lg text-base text-headingColor font-medium">
                      Region/State*
                    </label>
                    <Controller
                      name="region"
                      control={control}
                      rules={{ required: "Region is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          {...field}
                          onValueChange={(value) => field.onChange(value)}
                        >
                          <SelectTrigger className="xl:py-[30px] xl:h-[97px] h-[60px] xl:pl-[49px] pl-5 bg-[#D9D9D91A] xl:!text-xl text-sm text-headingColor">
                            <SelectValue
                              className="!text-navbarColor"
                              placeholder="Select"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Region</SelectLabel>
                              <SelectItem value="California">
                                California
                              </SelectItem>
                              <SelectItem value="Texas">Texas</SelectItem>
                              <SelectItem value="Florida">Florida</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.region && (
                      <p className="text-red-500 text-sm">
                        {errors.region.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* This is the City and Postal Code field */}
                <div className="flex flex-col md:flex-row lg:gap-10 gap-5 mt-7">
                  {/* This is the City input */}
                  <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                    <label className="xl:text-lg text-base text-headingColor font-medium">
                      City*
                    </label>
                    <Controller
                      name="City"
                      control={control}
                      rules={{ required: "City is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          {...field}
                          onValueChange={(value) => field.onChange(value)}
                        >
                          <SelectTrigger className="py-[30px] xl:h-[97px] h-[60px] xl:pl-[49px] pl-5 bg-[#D9D9D91A] xl:!text-xl text-sm text-headingColor">
                            <SelectValue
                              className="!text-navbarColor"
                              placeholder="Select"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>City</SelectLabel>
                              <SelectItem value="New York">New York</SelectItem>
                              <SelectItem value="Los Angeles">
                                Los Angeles
                              </SelectItem>
                              <SelectItem value="Chicago">Chicago</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.City && (
                      <p className="text-red-500 text-sm">
                        {errors.City.message}
                      </p>
                    )}
                  </div>
                  {/* This is the Postal Code input */}
                  <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                    <label className="xl:text-lg text-base text-headingColor font-medium">
                      Postal Code
                    </label>
                    <Input
                      className="py-[31px] xl:h-[97px] h-[60px] xl:pl-12 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                      type="number"
                      placeholder="Postal Code"
                      name="postalCode"
                      {...register("postalCode", { required: true })}
                    />
                    {errors.postalCode && (
                      <span className="text-red-500 text-sm">
                        Postal Code is required
                      </span>
                    )}
                  </div>
                </div>
                {/* This it the button */}
                {/* <div className="flex justify-center mt-12">
                              <Button
                                type="submit"
                                text={"Place Order"}
                                color={"bg-buttonColor"}
                              />
                            </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveDesign;
