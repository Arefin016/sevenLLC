import { useState } from "react";
import HaveDesign from "../../components/DesignInformation/HaveDesign/HaveDesign";
import NeedDesign from "../../components/DesignInformation/NeedDesign/NeedDesign";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Button from "@/components/Button/Button";
import { useOrderRequestMutation } from "@/hooks/cms.mutations";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";
import { PiSpinnerBold } from "react-icons/pi";

const OrderForms = () => {
  const { loading } = useAuth();
  const [selectedFile, setSelectedFile] = useState(null);
  const [firstSelectedFile, setFirstSelectedFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Have a Design");

  const { mutateAsync: orderRequestMutation } = useOrderRequestMutation();

  const handleCheckboxChange = option => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // handlers:
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const allowedExtensions = [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".svg",
        ".psd",
        ".ai",
        ".pdf",
      ];
      const fileName = file.name.toLowerCase();
      const isValidExtension = allowedExtensions.some(ext =>
        fileName.endsWith(ext)
      );

      if (!isValidExtension) {
        toast.error(
          "Only image, SVG, PSD, AI, and design-related files are allowed."
        );
        return;
      }

      if (file.size > 20 * 1024 * 1024) {
        toast.error("File must be less than 20MB.");
        return;
      }

      setSelectedFile(file);
      console.log("Selected File:", file);
    }
  };

  // second handlers
  const secondHandleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Only image files (JPEG, PNG, JPG, GIF) are allowed.");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert("File must be less than 2MB.");
        return;
      }
      setFirstSelectedFile(file);
      console.log("Selected File:", file);
    }
  };

  const onSubmit = async data => {
    console.log(data);
    try {
      if (selectedFile && firstSelectedFile) {
        const updatedData = {
          ...data,
          category_id: Number(data?.category_id),
          image: selectedFile,
          logo: firstSelectedFile,
          design_options: selectedOption,
        };
        await orderRequestMutation(updatedData);
        setSelectedFile(null);
        reset();
        setFirstSelectedFile(null);
      } else {
        toast.error("You must upload a image before proceed", {
          duration: 1500,
        });
      }
    } catch (error) {
      console.error("Order Request Error: ", error);
    }
  };

  return (
    <section className="lg:pt-0 xlg:pt-[100px] xl:pt-[115px] mx-6 lg:mx-10 xl:mx-0 mt-10">
      <div className="container mx-auto border border-[#000F2D33] lg:rounded-[30px] rounded-xl xl:py-[120px] py-7 xl:px-[80px]">
        {/* This is the title section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-headingColor xl:text-5xl lg:text-4xl text-3xl font-bold">
            Order Forms
          </h1>
          <p className="xl:max-w-[697px] text-sm text-center mt-6 text-navbarColor font-semibold italic leading-6 lg:leading-[25.2px]">
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
                  className="xl:py-[31px] xl:h-[97px] h-[48px] xl:pl-10 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
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
                  className="xl:py-[31px] xl:h-[97px] h-[48px] xl:pl-10 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
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
                  className="xl:py-[31px] xl:h-[97px] h-[48px] xl:pl-10 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
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
                  className="xl:py-[31px] xl:h-[97px] h-[48px] xl:pl-10 pl-5 bg-[#D9D9D91A] rounded-[10px] xl:!text-xl text-sm text-headingColor"
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
            <button className="bg-buttonColor w-full text-white lg:text-base text-xs md:text-sm font-semibold xl:py-[23px] py-4 lg:py-3 rounded-[10px] mt-7">
              Do You Have a Completed Design?
            </button>
          </div>
          {/* This is the checkout  */}
          <div className="flex lg:gap-7 md:gap-3 gap-2 px-2 justify-center bg-[#FAFBFC] mt-5 py-7 rounded-[10px]">
            <div className="flex flex-col xxs:flex-row gap-2 border border-[#7D7F85] md:py-[10px] py-1 lg:px-[32px] px-3 rounded-lg items-center">
              <input
                className="h-4 w-4"
                type="checkbox"
                name="example"
                value="Arefin"
                id="checkboxArefin1"
                checked={selectedOption === "Have a Design"}
                onChange={() => handleCheckboxChange("Have a Design")}
              />
              <p className="lg:text-base text-xs md:text-sm text-headingColor">
                I Have a Design
              </p>
            </div>

            <div className="flex flex-col xxs:flex-row gap-2 border border-[#7D7F85] md:py-[10px] py-1 lg:px-[32px] px-3 rounded-lg items-center">
              <input
                className="h-4 w-4"
                type="checkbox"
                name="example"
                value="Arefin"
                id="checkboxArefin2"
                checked={selectedOption === "Need a Design"}
                onChange={() => handleCheckboxChange("Need a Design")}
              />
              <p className="lg:text-base text-xs md:text-sm text-headingColor">
                I Need a Design
              </p>
            </div>
          </div>
          <div>
            {/* Content based on selected checkbox */}
            {selectedOption === "Have a Design" && (
              <HaveDesign
                errors={errors}
                register={register}
                selectedFile={selectedFile}
                handleFileChange={handleFileChange}
                control={control}
                secondHandleFileChange={secondHandleFileChange}
                firstSelectedFile={firstSelectedFile}
              />
            )}

            {selectedOption === "Need a Design" && (
              <NeedDesign
                errors={errors}
                register={register}
                selectedFile={selectedFile}
                handleFileChange={handleFileChange}
                control={control}
                secondHandleFileChange={secondHandleFileChange}
                firstSelectedFile={firstSelectedFile}
              />
            )}
            <div className="flex justify-center mt-12">
              <Button
                type="submit"
                text={"Place Order"}
                color={"bg-buttonColor"}
                disabled={loading}
              ></Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForms;
