import { useEffect, useState } from 'react';
import { OrderSummerySvg, SettingUploadSvg } from '../SvgContainer/SvgConainer';
import uploadImage from '@/assets/images/settingsUploadLogo/photo.png';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import Button from '../Button/Button';
import useAuth from '@/hooks/useAuth';
import { Controller, useForm } from 'react-hook-form';
const AccountSettings = () => {
  const { user } = useAuth();
  // console.log(user);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    country: '',
    state: '',
    zipcode: '',
    avatar: '',
  });
  const [image, setImage] = useState(uploadImage);
  const { register, handleSubmit, control } = useForm();

  // handlers:
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setImage(URL.createObjectURL(file));
      alert('File must be less than 2MB.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  // useEffect:
  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user?.first_name || '',
        last_name: user?.last_name || '',
        phone: user?.phone || '',
        email: user?.email || '',
        country: user?.country || '',
        state: user?.state || '',
        zipcode: user?.zipcode || '',
        avatar: user?.avatar || '',
      });
    }
  }, [user]);
  return (
    <div className="container mx-auto">
      <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-14 px-5 xxs:px-4 sm:px-4 xl:px-0">
        <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
          <h1 className="text-headingColor text-base xxs:text-lg md:text-xl font-semibold">
            Account Setting
          </h1>
          <OrderSummerySvg />
        </div>

        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)} action="">
          {/* This is the Upload Images section */}
          <div className="xmd:ml-[97px] xmd:mt-[70.5px] max-w-[560px]">
            <div className="flex gap-6 items-center ml-5 xmd:ml-0">
              <label
                htmlFor="photo-upload"
                className="w-24 xxs:w-[130px] xxs:h-[130px] h-24 border-gray-300 flex justify-center items-center rounded-full cursor-pointer hover:border-blue-500 transition bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
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
                  {...register('first_name', { required: true })}
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="Michael"
                />
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  Your Last Name
                </label>
                <Input
                  {...register('last_name', { required: true })}
                  value={formData.last_name}
                  onChange={handleChange}
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
                  {...register('phone', { required: true })}
                  value={formData.phone}
                  onChange={handleChange}
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
                  {...register('email', { required: true })}
                  value={formData.email}
                  onChange={handleChange}
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
                <Controller
                  name="color_code"
                  control={control}
                  defaultValue={formData.country}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
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
                  )}
                />
              </div>
              {/* States */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  States
                </label>
                <Controller
                  name="state"
                  control={control}
                  defaultValue={formData?.state}
                  render={({ field }) => (
                    <Select
                      value={field?.value}
                      onValueChange={field?.onChange}
                    >
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
                  )}
                />
              </div>
              {/* Postal Code */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  Postal Code
                </label>
                <Input
                  {...register('zipcode', { required: true })}
                  value={formData.zipcode}
                  onChange={handleChange}
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="number"
                  placeholder="75460"
                />
              </div>
            </div>
          </div>
          {/* This is the button section */}
          <div className="xmd:px-[97px] px-5 my-4 md:my-6 lg:my-8">
            <Button text={'Save Changes'} color={'bg-buttonColor'} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
