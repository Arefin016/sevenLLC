/* eslint-disable react/prop-types */
import { UploadFileSvg } from "../../SvgContainer/SvgConainer";
import { Space, Switch } from "antd";
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
import { Controller } from "react-hook-form";
import { useGetAllCategories } from "@/hooks/cms.queries";

const HaveDesign = ({
  register,
  errors,
  control,
  handleFileChange,
  selectedFile,
  firstSelectedFile,
  secondHandleFileChange,
}) => {
  const { data: allCategoriesList } = useGetAllCategories();

  return (
    <section>
      <div className="mt-12">
        {/* This is the text area */}
        <div className="mt-[19px]">
          <div className="flex flex-col gap-y-[10.5px]">
            <label className="text-lg text-headingColor font-medium">
              Describe Your Design Idea*
            </label>
            <textarea
              {...register("design_details", { required: true })}
              className="bg-[#D9D9D91A] rounded-[10px] pt-[31.5px] pb-[160.5px] pl-[43px] pr-[65px]"
              type="text"
              placeholder="Tell us about your design concept, including colors, size, width, function text, logos, and placement preferences. Please be very specific."
            />
          </div>
        </div>
        {/* Upload Images */}
        <div className="mt-[11px]">
          <h1 className="text-headingColor text-lg font-medium">
            Upload Your Design
          </h1>
          <p className="text-navbarColor font-semibold mt-[7px]">
            Design must be presented in AI format on dyelines for us to accept.
          </p>
          <p className="text-navbarColor mt-3">*Accept AI (max size: 5MB).</p>
          {/* This is the choose file section */}
          <div className="bg-[#FFF] shadow-fileShadow py-4 rounded-[10px] mt-4">
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
              {/* Preferred color */}
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                <label className="text-lg text-headingColor font-medium">
                  Preferred Colors*
                </label>
                <Controller
                  name="color_code"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="py-[30px] h-[97px] pl-[49px] bg-[#D9D9D91A] !text-xl text-headingColor">
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
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                <label className="text-lg text-headingColor font-medium">
                  Preferred Finish (optional)
                </label>
                <Controller
                  name="preferred_finish"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="py-[30px] h-[97px] pl-[49px] bg-[#D9D9D91A] !text-xl text-headingColor">
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
            <div className="flex gap-10 mt-[19px]">
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                <label className="text-lg text-headingColor font-medium">
                  Logo Included?
                </label>
                <div className="bg-[#D9D9D91A] h-[97px] pt-[27.5px] pb-[33.5px] pl-[40.5px] rounded-[10px] flex items-center">
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
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                <label className="text-lg text-headingColor font-medium">
                  Brand Text
                </label>
                <Input
                  {...register("brand_text", { required: true })}
                  className="py-[31px] h-[97px] pl-12 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
                  type="text"
                  placeholder="Enter text for your packaging (e.g., brand name, tagline)"
                />
              </div>
            </div>
            {/*  */}
            <div className="bg-[#FFF] shadow-fileShadow py-4 rounded-[10px] mt-4 max-w-[664px]">
              <div className="flex justify-center items-center">
                <label className="cursor-pointer px-4 py-2 text-headingColor text-base rounded-lg text-center font-semibold">
                  Choose File
                  <input
                    type="file"
                    className="hidden"
                    onChange={secondHandleFileChange}
                  />
                </label>
                <UploadFileSvg />
              </div>
              {firstSelectedFile && (
                <p className="text-navbarColor text-center">
                  Selected File: {firstSelectedFile.name}
                </p>
              )}
            </div>
            {/* This is the Design Placement */}
            <div className="flex flex-col gap-y-[10.5px] mt-[15.5px]">
              <label className="text-lg text-headingColor font-medium">
                Design Placement:*
              </label>
              <Input
                {...register("design_placement", { required: true })}
                className="py-[31px] h-[97px] pl-12 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
                type="text"
                placeholder="Design Placement"
              />
            </div>
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
                  <Controller
                    name="category_id"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={String(field.value)}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="py-[30px] h-[97px] pl-[49px] bg-[#D9D9D91A] !text-xl text-headingColor">
                          <SelectValue placeholder="Product Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Product Category</SelectLabel>
                            {allCategoriesList?.map((item) => (
                              <SelectItem
                                key={item?.id}
                                value={String(item?.id)}
                              >
                                {item?.name}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Item Type*
                  </label>
                  <Input
                    {...register("item_type", { required: true })}
                    className="py-[31px] h-[97px] pl-12 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
                    type="text"
                    placeholder="I.e Perfume Bottle with Spray Top"
                  />
                </div>
              </div>
              {/* Second Input Column  */}
              <div className="flex gap-10 mt-7">
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Material(s) (optional)
                  </label>
                  <Input
                    {...register("material")}
                    className="py-[31px] h-[97px] pl-12 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
                    type="text"
                    placeholder="Material(s)"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Accessories (optional)
                  </label>
                  <Input
                    {...register("accessories")}
                    className="py-[31px] h-[97px] pl-12 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
                    type="text"
                    placeholder="Accessories"
                  />
                </div>
              </div>
            </div>

            {/* This is the contact information */}
            <div className="">
              {/* First Input Column */}
              <div className="flex gap-10 mt-7">
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
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
                        <SelectTrigger className="py-[28px] h-[97px] pl-5 bg-[#D9D9D91A] !text-xl text-headingColor">
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
                {/*  */}
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Thickness in microns (optional)
                  </label>
                  <Input
                    {...register("thickness_in_micron")}
                    className="py-[31px] h-[97px] pl-12 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
                    type="text"
                    placeholder="Thickness in microns"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Label?
                  </label>
                  {/*  */}
                  <div className="bg-[#D9D9D91A] h-[97px] flex items-center pt-[27.5px] pb-[33.5px] pl-[40.5px] rounded-[10px]">
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
              <h1 className="text-center text-buttonColor text-2xl">
                Order Quantity
              </h1>
              {/* First Input Column */}
              <div className="flex gap-10 mt-[19px]">
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Desired Quantity (required)*
                    <span className="text-buttonColor text-lg font-semibold underline">
                      MOQ guide
                    </span>
                  </label>
                  <Input
                    {...register("quantity", { required: true })}
                    className="py-[31px] h-[97px] pl-12 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
                    type="number"
                    placeholder="Enter the number of units (e.g., 1,000)"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                  <label className="text-lg text-headingColor font-medium">
                    Reoccurring?
                  </label>
                  <div className="bg-[#D9D9D91A] h-[97px] flex items-center pt-[27.5px] pb-[33.5px] pl-[40.5px] rounded-[10px]">
                    <Space direction="vertical">
                      <Controller
                        name="reoccurring"
                        control={control}
                        defaultValue={0}
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
          </div>
        </div>
      </div>

      {/* shipping address form */}
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
            <Select>
              <SelectTrigger className="xl:py-[28px] xl:h-[97px] h-[60px] pl-5 bg-[#D9D9D91A] xl:!text-xl text-sm text-buttonColor">
                <SelectValue
                  className="!text-navbarColor"
                  placeholder="Choose An Address"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={`Address`} item>
                  Billing Address
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <form>
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
                name="shipping_user_f_name"
                placeholder="First Name"
                {...register("shipping_user_f_name", { required: true })}
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
                name="shipping_user_l_name"
                placeholder="Last Name"
                {...register("shipping_user_l_name", { required: true })}
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
                name="shipping_phone"
                {...register("shipping_phone", { required: true })}
                placeholder="Phone"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">Phone is required</span>
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
                name="shipping_email"
                placeholder="Email"
                {...register("shipping_email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
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
                name="shipping_company_name"
                placeholder="Company Name"
                {...register("shipping_company_name", { required: true })}
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
                name="state"
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
                        <SelectItem value="California">California</SelectItem>
                        <SelectItem value="Texas">Texas</SelectItem>
                        <SelectItem value="Florida">Florida</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.region && (
                <p className="text-red-500 text-sm">{errors.region.message}</p>
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
                name="city"
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
                        <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                        <SelectItem value="Chicago">Chicago</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.City && (
                <p className="text-red-500 text-sm">{errors.City.message}</p>
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
                name="zip"
                {...register("zip", { required: true })}
              />
              {errors.postalCode && (
                <span className="text-red-500 text-sm">
                  Postal Code is required
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HaveDesign;
