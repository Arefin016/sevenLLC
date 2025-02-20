import {
  OrderSummerySvg,
  SettingUploadSvg,
} from "@/components/SvgContainer/SvgConainer";
import { useEffect, useState } from "react";
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

import uploadImage from "../../../../assets/images/settingsUploadLogo/photo.png";
import Button from "@/components/Button/Button";
import PasswordInput from "@/components/PasswordInput/PasswordInput";
import { Controller, useForm } from "react-hook-form";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const Settings = () => {
  const [image, setImage] = useState(uploadImage);

  const [addNewAddress, setAddNewAddress] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setImage(URL.createObjectURL(file));
      alert("File must be less than 2MB.");
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const storedAddresses =
      JSON.parse(localStorage.getItem("savedAddresses")) || [];
    setSavedAddresses(storedAddresses);
  }, []);

  const onSubmit = (data) => {
    const updatedAddresses = [...savedAddresses, data];
    localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));
    setSavedAddresses(updatedAddresses);
    setAddNewAddress(false);
    reset();
  };

  useEffect(() => {
    if (addNewAddress) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [addNewAddress]);

  console.log(savedAddresses);

  return (
    <section className="">
      {/* Account Settings */}
      <div className="container mx-auto">
        <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-5 px-5 xxs:px-4 sm:px-4 xl:px-0">
          <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
            <h1 className="text-headingColor text-base xxs:text-lg md:text-xl font-semibold">
              Account Setting
            </h1>
            <OrderSummerySvg />
          </div>
          {/* This is the Upload Images section */}
          <div className="xmd:ml-[97px] xmd:mt-[70.5px] max-w-[560px]">
            <div className="flex gap-6 items-center ml-5 xmd:ml-0">
              <label
                htmlFor="photo-upload"
                className="w-24 xxs:w-[130px] xxs:h-[130px] h-24 border-gray-300 flex justify-center items-center rounded-full cursor-pointer hover:border-blue-500 transition bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col items-center text-navbarColor rounded-xl">
                  <SettingUploadSvg />
                </div>
              </label>
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <div className=" items-center gap-3">
                <p className="text-base xxs:text-2xl text-headingColor font-bold">
                  Michael Watson
                </p>
                <p className="text-xs xxs:text-lg text-navbarColor">
                  President of Sales
                </p>
              </div>
            </div>
          </div>
          {/* This is the Product Information */}
          <div className="mt-10 xmd:px-[97px]">
            {/* First Input Column */}
            <div className="flex flex-col md:flex-row gap-10">
              {/* First Name */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  First Name
                </label>
                <Input
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="text"
                  placeholder="Michael"
                />
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  Your Last Name
                </label>
                <Input
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="text"
                  placeholder="Watson"
                />
              </div>
            </div>
            {/* Second Input Column  */}
            <div className="flex flex-col md:flex-row gap-10 mt-6">
              {/* phone */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  Phone
                </label>
                <Input
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="number"
                  placeholder="+1-202-555-0118"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  Email
                </label>
                <Input
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="email"
                  placeholder="michaelwatson@gmail.com"
                />
              </div>
            </div>
          </div>
          {/* This is the contact information */}
          <div className="xmd:px-[97px]">
            {/* Country / Region */}
            <div className="flex flex-col md:flex-row gap-8 mt-6">
              {/* Country */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  Country/Region
                </label>
                <Select>
                  <SelectTrigger className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Country/Region</SelectLabel>
                      <SelectItem value="America">America</SelectItem>
                      <SelectItem value="Uk">UK</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* States */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  States
                </label>
                <Select>
                  <SelectTrigger className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>States</SelectLabel>
                      <SelectItem value="America">America</SelectItem>
                      <SelectItem value="Uk">UK</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* Postal Code */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  Postal Code
                </label>
                <Input
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="number"
                  placeholder="75460"
                />
              </div>
            </div>
          </div>
          {/* This is the button section */}
          <div className="xmd:px-[97px] px-5 my-8">
            <Button text={"Save Changes"} color={"bg-buttonColor"} />
          </div>
        </div>
      </div>

      {/* Password Setting */}
      <div className="container mx-auto my-5 pb-10">
        <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-5 px-5 xxs:px-4 sm:px-4 xl:px-0">
          <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
            <h1 className="text-headingColor text-base xxs:text-lg md:text-xl font-semibold ">
              Password Setting
            </h1>
            <OrderSummerySvg />
          </div>
          <section>
            {/* This is the Password Setting Section */}
            <div className="xlg:mt-6 xlg:ml-[31px] border border-[#F0F0F0] rounded max-w-[984px] xlg:mb-[50px]">
              <div className="">
                <h1 className="text-headingColor text-base font-semibold border pl-5 py-[13px]">
                  Change Password
                </h1>
              </div>

              {/* Current Password Div */}
              <PasswordInput
                label={"Current Password"}
                placeholder={"Current Password"}
              />
              <PasswordInput
                label={"New Password"}
                placeholder={"8+ characters"}
              />
              <PasswordInput
                label={"Confirm Password"}
                placeholder={"Confirm Password"}
              />
              {/* This the button section */}
              <div className="pl-6 my-8">
                <Button text={"Change Password"} color={"bg-buttonColor"} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Settings;
