import { useState } from 'react';
import { OrderSummerySvg } from '../SvgContainer/SvgConainer';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import Button from '../Button/Button';

const AddressSettings = () => {
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  //handlers:
  const onSubmit = (data) => {
    const updatedAddresses = [...savedAddresses, data];
    localStorage.setItem('savedAddresses', JSON.stringify(updatedAddresses));
    setSavedAddresses(updatedAddresses);
    setAddNewAddress(false);
    reset();
  };
  return (
    <div className="container mx-auto pb-10">
      <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-5 px-5 xxs:px-4 sm:px-4 xl:px-0">
        <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
          <h1 className="text-headingColor text-base xxs:text-lg md:text-xl font-semibold ">
            Address Setting
          </h1>
          <OrderSummerySvg />
        </div>
        <section>
          {/* This is the Billing Address Section */}
          <div className="md:px-8 mb-10 mt-6">
            {/* Addresses Grid */}
            <div className="flex flex-row gap-6 flex-wrap">
              {/* Display saved addresses */}
              {savedAddresses.map((address, index) => (
                <div key={index} className="flex flex-col border rounded-b-2xl">
                  <div className="flex gap-[145px] justify-between border items-center px-6">
                    <h1 className="text-headingColor text-base font-semibold py-[13px]">
                      Billing Address {index + 1}
                    </h1>

                    <h1 className="text-buttonColor font-medium cursor-pointer">
                      + EDIT ADDRESS
                    </h1>
                  </div>
                  {/* This is the Billing Address */}
                  <div className="my-6 space-y-4">
                    <div className="px-6">
                      <label className="text-headingColor">FULL NAME</label>
                      <p className="bg-[#FFF] border-none h-11 mt-2 !text-sm text-[#8993A4]">
                        {address.firstName}
                      </p>
                    </div>
                    <div className="px-6">
                      <label className="text-headingColor">Address</label>
                      <p className="bg-[#FFF] border-none h-11 mt-2 !text-sm text-[#8993A4]">
                        {address.address}
                      </p>
                    </div>
                    <div className="px-6">
                      <label className="text-headingColor">Email</label>
                      <p className="bg-[#FFF] border-none h-11 mt-2 !text-sm text-[#8993A4]">
                        {address.email}
                      </p>
                    </div>
                    <div className="px-6">
                      <label className="text-headingColor">Phone Number</label>
                      <p className="bg-[#FFF] border-none h-11 mt-2 !text-sm text-[#8993A4]">
                        {address.phone}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* "Add New Address" Button - Always Last */}
              {!addNewAddress ? (
                <div className="border rounded-2xl min-w-full min-h-[300px] md:min-w-[444px] md:min-h-[550px] flex justify-center items-center p-4">
                  <button
                    onClick={() => setAddNewAddress(true)}
                    className="text-center text-xs xxs:text-base text-[#8993A4] font-medium"
                  >
                    + Add new Address
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col border rounded-b-2xl lg:w-[32%] mt-2"
                >
                  <div className="flex gap-[150px] justify-between border items-center px-6">
                    <h1 className="text-headingColor text-base font-semibold py-[13px]">
                      Billing Address
                    </h1>
                  </div>
                  {/* This is the Billing Address */}
                  <div className="my-6 space-y-4">
                    <div className="flex flex-col xlg:flex-row px-2 xlg:px-6 gap-4 justify-center">
                      {/* First Name */}
                      <div className="">
                        <label className="text-headingColor">First Name</label>
                        <Input
                          className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                          type="text"
                          {...register('firstName', { required: true })}
                          placeholder="First Name"
                        />
                        {errors.firstName && (
                          <span className="text-red-500 text-sm">
                            First Name is required
                          </span>
                        )}
                      </div>
                      {/* Last Name */}
                      <div className="">
                        <label className="text-headingColor">Last Name</label>
                        <Input
                          className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                          type="text"
                          {...register('lastName', { required: true })}
                          placeholder="Last Name"
                        />
                        {errors.lastName && (
                          <span className="text-red-500 text-sm">
                            Last Name is required
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Company Name */}
                    <div className="px-2 xlg:px-6 mt-4">
                      <label className="text-headingColor">
                        Company Name (Optional)
                      </label>
                      <Input
                        className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                        type="text"
                        {...register('companyName', { required: true })}
                        placeholder="Company Name"
                      />
                      {errors.companyName && (
                        <span className="text-red-500 text-sm">
                          Company Name is required
                        </span>
                      )}
                    </div>
                    {/* Address */}
                    <div className="px-2 xlg:px-6">
                      <label className="text-headingColor">Address</label>
                      <Input
                        className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                        type="text"
                        {...register('address', { required: true })}
                        placeholder="Address"
                      />
                      {errors.address && (
                        <span className="text-red-500 text-sm">
                          Address is required
                        </span>
                      )}
                    </div>
                    {/* Country */}
                    <div className="px-2 xlg:px-6">
                      <label className="text-headingColor">Country</label>
                      <Controller
                        name="country"
                        control={control}
                        rules={{ required: 'Country is required' }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            <SelectTrigger className="py-4 h-11 px-5 bg-[#F8F8F8] text-sm text-headingColor mt-2">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Countries</SelectLabel>
                                <SelectItem value="America">America</SelectItem>
                                <SelectItem value="UK">UK</SelectItem>
                                <SelectItem value="Canada">Canada</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.country && (
                        <p className="text-red-500 text-sm">
                          {errors.country.message}
                        </p>
                      )}
                    </div>

                    {/* Region/State */}
                    <div className="px-2 xlg:px-6">
                      <label className="text-headingColor">Region/State</label>
                      <Controller
                        name="region"
                        control={control}
                        rules={{ required: 'Region is required' }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            <SelectTrigger className="py-4 h-11 px-5 bg-[#F8F8F8] text-sm text-headingColor mt-2">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>States</SelectLabel>
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
                    {/* City and Postal Code */}
                    <div className="flex gap-4 justify-center">
                      {/* City */}
                      <div className="w-[197px]">
                        <label className="text-headingColor">City</label>
                        <Controller
                          name="City" // Use the name "City" to match the field name
                          control={control}
                          rules={{ required: 'City is required' }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              onValueChange={(value) => field.onChange(value)}
                            >
                              <SelectTrigger className="py-4 h-11 bg-[#F8F8F8] text-sm text-headingColor mt-2">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Cities</SelectLabel>
                                  <SelectItem value="New York">
                                    New York
                                  </SelectItem>
                                  <SelectItem value="Los Angeles">
                                    Los Angeles
                                  </SelectItem>
                                  <SelectItem value="Chicago">
                                    Chicago
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.City && (
                          <p className="text-red-500 text-sm">
                            {errors.City.message}{' '}
                          </p>
                        )}
                      </div>
                      {/* Postal Code */}
                      <div className="">
                        <label className="text-headingColor">Postal Code</label>
                        <Input
                          className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                          type="number"
                          {...register('postalCode', { required: true })}
                          placeholder="Your code here"
                        />
                        {errors.postalCode && (
                          <span className="text-red-500 text-sm">
                            Postal Code is required
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Email */}
                    <div className="px-2 xlg:px-6 mt-4">
                      <label className="text-headingColor">Email</label>
                      <Input
                        className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                        type="email"
                        {...register('email', { required: true })}
                        placeholder="Your email here"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm">
                          Email is required
                        </span>
                      )}
                    </div>
                    {/* Phone Number */}
                    <div className="px-2 xlg:px-6 mt-4">
                      <label className="text-headingColor">Phone Number</label>
                      <Input
                        className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                        type="number"
                        {...register('phone', { required: true })}
                        placeholder="Your phone here"
                      />
                      {errors.phone && (
                        <span className="text-red-500 text-sm">
                          Phone Number is required
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Close Button */}
                  <div className="flex justify-between px-6 my-6">
                    <Button
                      type="submit"
                      text={'Save Changes'}
                      color={'bg-buttonColor'}
                    />
                    <button
                      onClick={() => setAddNewAddress(false)}
                      className="text-buttonColor text-base font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddressSettings;
