import { useContactMutation } from "@/hooks/cms.mutations";
import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { PiSpinnerBold } from "react-icons/pi";
import { SendMessageSvg } from "../SvgContainer/SvgConainer";

const ContactForm = () => {
  const { loading } = useAuth();
  const { mutateAsync: contactFormMutation } = useContactMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await contactFormMutation(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 lg:mt-16 mt-5 xmd:mt-8 px-3 lg:px-10 xl:px-0"
    >
      {/* First Input Column */}
      <div className="flex flex-col sm:flex-row sm:gap-10 gap-5">
        <div className="flex flex-col gap-y-[10.5px] w-full sm:w-[50%]">
          <label className="text-base lg:text-lg text-headingColor font-medium">
            Name*
          </label>
          <input
            name="name"
            {...register("name", {
              required: "Full Name is required",
            })}
            className="lg:py-[31px] py-5 lg:pl-[49px] pl-5 text-sm lg:text-base bg-[#D9D9D91A] rounded-[10px]"
            type="text"
            placeholder="Full Name"
          />
          {errors.name && (
            <span className="text-red-600 font-semibold">
              {errors.name.message}
            </span>
          )}
        </div>
        {/*  */}
        <div className="flex flex-col gap-y-[10.5px] w-full sm:w-[50%]">
          <label className="text-base lg:text-lg text-headingColor font-medium">
            Business Name*
          </label>
          <input
            name="business_name"
            {...register("business_name", {
              required: "Business Name is required",
            })}
            className="lg:py-[31px] py-5 lg:pl-[49px] pl-5 text-sm lg:text-base bg-[#D9D9D91A] rounded-[10px]"
            type="text"
            placeholder="Business Name"
          />
          {errors.business_name && (
            <span className="text-red-600 font-semibold">
              {errors.business_name.message}
            </span>
          )}
        </div>
      </div>
      {/* Second Input Column  */}
      <div className="flex flex-col sm:flex-row sm:gap-10 gap-5">
        <div className="flex flex-col gap-y-[10.5px] w-full sm:w-[50%]">
          <label className="text-base lg:text-lg text-headingColor font-medium">
            Email*
          </label>
          <input
            name="email"
            {...register("email", {
              required: "Email is required",
            })}
            className="lg:py-[31px] py-5 lg:pl-[49px] pl-5 text-sm lg:text-base bg-[#D9D9D91A] rounded-[10px]"
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-600 font-semibold">
              {errors.email.message}
            </span>
          )}
        </div>
        {/*  */}
        <div className="flex flex-col gap-y-[10.5px] w-full sm:w-[50%]">
          <label className="text-base lg:text-lg text-headingColor font-medium">
            Phone Number*
          </label>
          <input
            name="phone"
            {...register("phone", {
              required: "Phone Number is required",
            })}
            className="lg:py-[31px] py-5 lg:pl-[49px] pl-5 text-sm lg:text-base bg-[#D9D9D91A] rounded-[10px]"
            type="number"
            placeholder="Phone Number"
          />
          {errors.phone && (
            <span className="text-red-600 font-semibold">
              {errors.phone.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:gap-y-10 gap-y-4">
        <label className="text-base lg:text-lg text-headingColor font-medium">
          Message*
        </label>
        <textarea
          name="message"
          {...register("message", {
            required: "Message is required",
          })}
          className="bg-[#D9D9D91A] rounded-[10px] pt-4 lg:pt-[31.5px] pb-[160.5px] lg:pl-[43px] pl-5 lg:pr-[65px] lg:h-[284px]"
          type="text"
          placeholder="Write your message here..."
        />
        {errors.message && (
          <span className="text-red-600 font-semibold">
            {errors.message.message}
          </span>
        )}
      </div>
      {/* This is the button section */}
      <div className="flex flex-col justify-center text-center mt-7">
        <h1 className="text-buttonColor lg:text-xl text-base italic font-[350px]">
          Backed by trusted industry leaders, we’re here to support your
          business every step of the way.
        </h1>
        <div className="text-center flex justify-center sm:mt-[60px] mt-10 sm:mb-[45px] mb-8">
          <button
            className={`bg-buttonColor rounded-[60px] px-5 sm:px-6 md:px-7 lg:px-8 flex gap-2 justify-center items-center lg:py-4 py-3 text-[#FFF] font-semibold hover:bg-transparent border border-buttonColor hover:border-buttonColor hover:text-buttonColor ease-in-out duration-150 group text-sm sm:text-base w-56`}
          >
            {loading ? (
              <PiSpinnerBold className="text-white size-4 sm:size-7 animate-spin group-hover:text-buttonColor" />
            ) : (
              <span className="flex items-center gap-2">
                Send Message
                <SendMessageSvg />
              </span>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
