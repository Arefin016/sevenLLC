import { useEffect, useState } from 'react';
import { OrderSummerySvg, SettingUploadSvg } from '../SvgContainer/SvgConainer';
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
import useAuth from '@/hooks/useAuth';
import { Controller, useForm } from 'react-hook-form';
import { useUserInfoUpdateMutation } from '@/hooks/cms.mutations';
import { ImSpinner9 } from 'react-icons/im';

const AccountSettings = () => {
  const { user, loading } = useAuth();
  const { mutateAsync: userUpdateMutation } = useUserInfoUpdateMutation();
  const baseUrl = import.meta.env.VITE_SITE_URL;
  const [image, setImage] = useState(
    user?.avatar ? `${baseUrl}/${user.avatar}` : ''
  );
  const { register, handleSubmit, control, reset, setValue } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      country: '',
      state: '',
      zipcode: '',
      avatar: user?.avatar ? `${baseUrl}/${user.avatar}` : '',
    },
  });

  // handlers:
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setImage(URL.createObjectURL(file));
      setValue('avatar', file); // Store file in form
    }
  };

  const onSubmit = async (data) => {
    try {
      await userUpdateMutation(data);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  // useEffect:
  useEffect(() => {
    if (user) {
      const avatarUrl = user?.avatar ? `${baseUrl}/${user.avatar}` : '';
      reset({
        first_name: user?.first_name || '',
        last_name: user?.last_name || '',
        phone: user?.phone || '',
        email: user?.email || '',
        country: user?.country || '',
        state: user?.state || '',
        zipcode: user?.zipcode || '',
        avatar: avatarUrl,
      });
      setImage(avatarUrl); // Ensure displayed image updates
    }
  }, [baseUrl, reset, user]);
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
                {...register('avatar')}
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
                  name="country"
                  control={control}
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
                  // value={formData.zipcode}
                  // onChange={handleChange}
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="number"
                  placeholder="75460"
                />
              </div>
            </div>
          </div>
          {/* This is the button section */}
          <div className="xmd:px-[97px] px-5 my-4 md:my-6 lg:my-8">
            <button
              className={`bg-buttonColor rounded-[60px] px-3 sm:px-6 md:px-7 lg:px-8 flex xl:gap-2 justify-center items-center xl:py-4 py-[10px] md:py-[10px] lg:py-3 text-[#FFF] font-semibold hover:bg-transparent border border-buttonColor hover:border-buttonColor hover:text-buttonColor ease-in-out duration-150 group text-sm xl:text-base group w-[250px]  `}
            >
              {loading ? (
                <ImSpinner9 className="text-white size-4 sm:size-6 animate-spin group-hover:text-buttonColor" />
              ) : (
                <span className="flex items-center justify-center gap-1">
                  <span>Save Changes</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="transition size-5 md:size-6 duration-150 ease-in-out group-hover:fill-buttonColor"
                  >
                    <path
                      d="M16.5054 9.6015L7.89838 18.2085L6.48438 16.7945L15.0904 8.1875H7.50538V6.1875H18.5054V17.1875H16.5054V9.6015Z"
                      fill="white"
                      className="group-hover:fill-buttonColor transition duration-150"
                    />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
