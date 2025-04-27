import { useState } from "react";
import HaveDesign from "../../components/DesignInformation/HaveDesign/HaveDesign";
import NeedDesign from "../../components/DesignInformation/NeedDesign/NeedDesign";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Button from "@/components/Button/Button";
import { useOrderRequestMutation } from "@/hooks/cms.mutations";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";

const OrderForms = () => {
  const { loading } = useAuth();
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
    const files = Array.from(e.target.files);

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

    const validFiles = [];

    for (const file of files) {
      const fileName = file.name.toLowerCase();
      const isValidExtension = allowedExtensions.some((ext) =>
        fileName.endsWith(ext)
      );

      if (!isValidExtension) {
        toast.error(
          `"${file.name}" is not a valid file type. Only image, SVG, PSD, AI, and design-related files are allowed.`
        );
        continue;
      }

      if (file.size > 20 * 1024 * 1024) {
        toast.error(`"${file.name}" must be less than 20MB.`);
        continue;
      }

      validFiles.push(file);
    }

    if (validFiles.length > 0) {
      setSelectedFile(validFiles);
      console.log("Selected Files:", validFiles);
    }
  };

  // second handlers
  const secondHandleFileChange = (e) => {
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
      const isValidExtension = allowedExtensions.some((ext) =>
        fileName.endsWith(ext)
      );

      if (!isValidExtension) {
        alert(
          "Only image, SVG, PSD, AI, and design-related files are allowed."
        );
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

  // const onSubmit = async (data) => {
  //   try {
  //     if (selectedFile && firstSelectedFile) {
  //       const updatedData = {
  //         ...data,
  //         category_id: Number(data?.category_id),
  //         image: selectedFile,
  //         logo: firstSelectedFile,
  //         design_options: selectedOption,
  //       };
  //       console.log(updatedData);
  //       await orderRequestMutation(updatedData);

  //       setSelectedFile(null);
  //       reset();
  //       setFirstSelectedFile(null);
  //     } else {
  //       toast.error("You must upload a image before proceed", {
  //         duration: 1500,
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Order Request Error: ", error);
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      if (selectedFile && selectedFile.length > 0 && firstSelectedFile) {
        const formData = new FormData();

        // formData.append("category_id", Number(data?.category_id));
        // formData.append("logo", firstSelectedFile); // Assuming logo is still a single file
        // formData.append("design_options", selectedOption); // Adjust based on what selectedOption is

        // // Append all selected images
        // selectedFile.forEach((file, index) => {
        //   formData.append(`images[${index}]`, file); // Or just "images" if backend expects array
        // });

        // formData.append("full_name", data.full_name || "");
        // formData.append("email", data.email || "");
        // formData.append("phone", data.phone || "");
        // formData.append("company_name", data.company_name || "");
        // formData.append("design_details", data.design_details || "");
        // formData.append("color_code", data.color_code || "");
        // formData.append("preferred_finish", data.preferred_finish || "");
        // formData.append("logo_included", data.logo_included ? "1" : "0");
        // formData.append("brand_text", data.brand_text || "");
        // formData.append("design_placement", data.design_placement || "");
        // formData.append("item_type", data.item_type || "");
        // formData.append("material", data.material || "");
        // formData.append("accessories", data.accessories || "");
        // formData.append("size", data.size || "");
        // formData.append("thickness_in_micron", data.thickness_in_micron || "");
        // formData.append("label", data.label ? "1" : "0");
        // formData.append("quantity", data.quantity || "");
        // formData.append("reoccurring", data.reoccurring ? "1" : "0");
        // formData.append(
        //   "shipping_user_f_name",
        //   data.shipping_user_f_name || ""
        // );
        // formData.append("shipping_phone", data.shipping_phone || "");
        // formData.append("shipping_email", data.shipping_email || "");
        // formData.append(
        //   "shipping_company_name",
        //   data.shipping_company_name || ""
        // );
        // formData.append("country", data.country || "");
        // formData.append("state", data.state || "");
        // formData.append("city", data.city || "");
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key]);
        });
        formData.append("category_id", Number(data?.category_id));
        formData.append("logo", firstSelectedFile);
        formData.append("design_options", selectedOption);

        // Append all selected images
        selectedFile.forEach((file, index) => {
          formData.append(`images[${index}]`, file); // Or just "images" if backend expects array
        });
        // console.log([...formData.entries()]); // Debugging: to see what's inside

        await orderRequestMutation(formData); // Make sure this function can handle FormData!

        setSelectedFile(null);
        reset();
        setFirstSelectedFile(null);
      } else {
        toast.error("You must upload an image before proceeding", {
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
