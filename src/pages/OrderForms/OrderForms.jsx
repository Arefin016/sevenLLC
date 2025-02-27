import { useState } from "react";
import HaveDesign from "../../components/DesignInformation/HaveDesign/HaveDesign";
import NeedDesign from "../../components/DesignInformation/NeedDesign/NeedDesign";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Button from "@/components/Button/Button";
import { useOrderRequestMutation } from "@/hooks/cms.mutations";
import toast from "react-hot-toast";


const OrderForms = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [firstSelectedFile, setFirstSelectedFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Have a Design");

  const { mutateAsync: orderRequestMutation } = useOrderRequestMutation();

  const handleCheckboxChange = (option) => {
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
  const handleFileChange = (e) => {
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
      setSelectedFile(file);
      console.log("Selected File:", file);
    }
  };

  // second handlers
  const secondHandleFileChange = (e) => {
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

  const onSubmit = async (data) => {
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
    <section className="pt-[115px]">
      <div className="container mx-auto border border-[#000F2D33] rounded-[30px] py-[120px] px-[80px]">
        {/* This is the title section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-headingColor text-5xl font-bold">Order Forms</h1>
          <p className="max-w-[697px] text-center mt-6 text-navbarColor font-semibold italic">
            &quot;MOQs vary depending on product specifications and design
            requirements. Accurate MOQs and pricing will be confirmed during the
            quotation process. Thank you for your understanding!&quot;
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* This is the contact information */}
          <div className="mt-12">
            <h2 className="text-center text-buttonColor text-2xl">
              Contact Information
            </h2>
            {/* First Input Column */}
            <div className="flex gap-10 mt-[19px]">
              {/* Full Name */}
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                <label className="text-lg text-headingColor font-medium">
                  Full Name*
                </label>
                <Input
                  {...register("full_name", { required: true })}
                  className="py-[31px] h-[97px] pl-10 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
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
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                <label className="text-lg text-headingColor font-medium">
                  Email*
                </label>
                <Input
                  {...register("email", { required: true })}
                  className="py-[31px] h-[97px] pl-12 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
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
            <div className="flex gap-10 mt-[19px]">
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                <label className="text-lg text-headingColor font-medium">
                  Phone*
                </label>
                <Input
                  {...register("phone", { required: true })}
                  className="py-[31px] h-[97px] pl-12 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
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
              <div className="flex flex-col gap-y-[10.5px] w-[50%]">
                <label className="text-lg text-headingColor font-medium">
                  Company Name
                </label>
                <Input
                  {...register("company_name", { required: true })}
                  className="py-[31px] h-[97px] pl-12 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
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
          <div className="mt-12">
            <h1 className="text-center text-buttonColor text-2xl">
              Design Information
            </h1>
            <button className="bg-buttonColor w-full text-white text-base font-semibold py-[23px] rounded-[10px] mt-7">
              Do You Have a Completed Design?
            </button>
          </div>
          {/* This is the checkout  */}
          <div className="flex gap-7 justify-center bg-[#FAFBFC] mt-5 py-7 rounded-[10px]">
            <div className="flex gap-2 border border-[#7D7F85] py-[10px] px-[32px] rounded-lg items-center">
              <input
                className="h-4 w-4"
                type="checkbox"
                name="example"
                value="Arefin"
                id="checkboxArefin1"
                checked={selectedOption === "Have a Design"}
                onChange={() => handleCheckboxChange("Have a Design")}
              />
              <p>I Have a Design</p>
            </div>

            <div className="flex gap-2 border border-[#7D7F85] py-[10px] px-[32px] rounded-lg items-center">
              <input
                className="h-4 w-4"
                type="checkbox"
                name="example"
                value="Arefin"
                id="checkboxArefin2"
                checked={selectedOption === "Need a Design"}
                onChange={() => handleCheckboxChange("Need a Design")}
              />
              <p>I Need a Design</p>
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
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForms;
