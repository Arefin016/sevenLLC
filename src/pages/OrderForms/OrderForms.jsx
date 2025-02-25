import { useState } from "react";
import HaveDesign from "../../components/DesignInformation/HaveDesign/HaveDesign";
import NeedDesign from "../../components/DesignInformation/NeedDesign/NeedDesign";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Button from "@/components/Button/Button";
import { useOrderRequestMutation } from "@/hooks/cms.mutations";

const OrderForms = () => {
  const [selectedOption, setSelectedOption] = useState("I Have a Design");

  const handleCheckboxChange = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const { mutateAsync: orderRequestMutation } = useOrderRequestMutation();
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await orderRequestMutation(data);
    reset();
  };

  return (
    <section className="lg:pt-0 xlg:pt-[100px] xl:pt-[115px] mx-6 lg:mx-10 xl:mx-0 mt-10">
      <div className="container mx-auto border border-[#000F2D33] lg:rounded-[30px] rounded-xl xl:py-[120px] py-7 xl:px-[80px] ">
        {/* This is the title section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-headingColor xl:text-5xl lg:text-4xl text-3xl font-bold">
            Order Forms
          </h1>
          <p className="xl:max-w-[697px] text-sm text-center mt-6 text-navbarColor font-semibold italic">
            &quot;MOQs vary depending on product specifications and design
            requirements. Accurate MOQs and pricing will be confirmed during the
            quotation process. Thank you for your understanding!&quot;
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* This is the contact information */}
          <div className="lg:mt-12 mt-10">
            <h2 className="text-center text-buttonColor lg:text-2xl text-xl md:text-[22px]">
              Contact Information
            </h2>
            {/* First Input Column */}
            <div className="flex flex-col md:flex-row lg:gap-10 gap-5 mt-[19px]">
              {/* Full Name */}
              <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                <label className="xl:text-lg text-base text-headingColor font-medium">
                  Full Name*
                </label>
                <Input
                  {...register("full_name", { required: true })}
                  className="xl:py-[31px] xl:h-[97px] h-[60px] xl:pl-10 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                  type="text"
                  placeholder="Full Name"
                />
                {errors.full_name && (
                  <span className="text-red-600 font-semibold">
                    Full Name is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                <label className="xl:text-lg text-base text-headingColor font-medium">
                  Email*
                </label>
                <Input
                  {...register("email", { required: true })}
                  className="xl:py-[31px] xl:h-[97px] h-[60px] xl:pl-10 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                  type="email"
                  placeholder="Email"
                />
                {errors.full_name && (
                  <span className="text-red-600 font-semibold">
                    Email is required
                  </span>
                )}
              </div>
            </div>
            {/* Second Input Column  */}
            <div className="flex flex-col md:flex-row lg:gap-10 gap-5 mt-[19px]">
              <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                <label className="xl:text-lg text-base text-headingColor font-medium">
                  Phone*
                </label>
                <Input
                  {...register("phone", { required: true })}
                  className="xl:py-[31px] xl:h-[97px] h-[60px] xl:pl-10 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                  type="number"
                  placeholder="Phone"
                />
                {errors.phone && (
                  <span className="text-red-600 font-semibold">
                    Phone is required
                  </span>
                )}
              </div>
              {/*  */}
              <div className="flex flex-col gap-y-[10.5px] lg:w-[50%] w-full">
                <label className="xl:text-lg text-base text-headingColor font-medium">
                  Company Name
                </label>
                <Input
                  {...register("company_name", { required: true })}
                  className="xl:py-[31px] xl:h-[97px] h-[60px] xl:pl-10 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
                  type="text"
                  placeholder="Company Name"
                />
                {errors.company_name && (
                  <span className="text-red-600 font-semibold">
                    Company Name is required
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="lg:mt-12 mt-10">
            <h1 className="text-center text-buttonColor lg:text-2xl text-xl md:text-[22px]">
              Design Information
            </h1>
            <button className="bg-buttonColor w-full text-white lg:text-base text-sm font-semibold xl:py-[23px] py-4 lg:py-3 rounded-[10px] mt-7">
              Do You Have a Completed Design?
            </button>
          </div>
          {/* This is the checkout  */}
          <div className="flex lg:gap-7 md:gap-3 gap-2 px-2 justify-center bg-[#FAFBFC] mt-5 py-7 rounded-[10px]">
            <div className="flex gap-2 border border-[#7D7F85] lg:py-[10px] py-2 lg:px-[32px] px-3 rounded-lg items-center">
              <input
                className="lg:h-4 h-3 lg:w-4 w-3"
                type="checkbox"
                name="example"
                value="Arefin"
                id="checkboxArefin1"
                checked={selectedOption === "I Have a Design"}
                onChange={() => handleCheckboxChange("I Have a Design")}
              />
              <p className="lg:text-base text-xs md:text-sm text-headingColor">
                I Have a Design
              </p>
            </div>

            <div className="flex gap-2 border border-[#7D7F85] lg:py-[10px] py-2 lg:px-[32px] px-3 rounded-lg items-center">
              <input
                className="lg:h-4 h-3 lg:w-4 w-3"
                type="checkbox"
                name="example"
                value="Arefin"
                id="checkboxArefin2"
                checked={selectedOption === "I Need a Design"}
                onChange={() => handleCheckboxChange("I Need a Design")}
              />
              <p className="lg:text-base text-xs md:text-sm text-headingColor">
                I Need a Design
              </p>
            </div>
          </div>
          <div>
            {/* Content based on selected checkbox */}
            {selectedOption === "I Have a Design" && (
              <HaveDesign register={register} control={control} />
            )}

            {selectedOption === "I Need a Design" && <NeedDesign />}
            <div className="flex justify-center mt-12">
              <Button
                type="submit"
                text={"Place Order"}
                color={"bg-buttonColor"}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForms;
