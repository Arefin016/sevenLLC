import {
  OrderSummerySvg,
  SettingUploadSvg,
} from "@/components/SvgContainer/SvgConainer";
import { useState } from "react";
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

const Settings = () => {
  const [image, setImage] = useState(uploadImage);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setImage(URL.createObjectURL(file));
      alert("File must be less than 2MB.");
    }
  };
  return (
    <section>
      <div className="container mx-auto">
        <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-5">
          <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
            <h1 className="text-headingColor text-xl font-semibold ">
              Account Setting
            </h1>
            <OrderSummerySvg />
          </div>
          {/* This is the Upload Images section */}
          <div className="ml-[97px] mt-[70.5px] max-w-[560px]">
            <div className="flex gap-6 items-center">
              <label
                htmlFor="photo-upload"
                className="w-[130px] h-[130px] border-gray-300 flex justify-center items-center rounded-full cursor-pointer hover:border-blue-500 transition bg-cover bg-center"
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
                <p className="text-2xl text-headingColor font-bold">
                  Michael Watson
                </p>
                <p className="text-lg text-navbarColor">President of Sales</p>
              </div>
            </div>
          </div>

          {/* This is the Product Information */}
          <div className="mt-10 px-[97px]">
            {/* First Input Column */}
            <div className="flex gap-10">
              {/* First Name */}
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  First Name
                </label>
                <Input
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="text"
                  placeholder="Michael"
                />
              </div>
              {/* Your Last Name */}
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
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
            <div className="flex gap-10 mt-6">
              {/* phone */}
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
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
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
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
          <div className="px-[97px]">
            {/* Country / Region */}
            <div className="flex gap-8 mt-6">
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
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
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
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
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
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

          {/*  */}
          <div className="px-[97px] my-8">
            <Button text={"Save Changes"} color={"bg-buttonColor"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
