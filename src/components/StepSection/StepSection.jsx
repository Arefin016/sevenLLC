import useAxiosPublic from "@/hooks/useAxiosPublic";
import steponePic1 from "../../assets/images/step1.png";
import steponePic2 from "../../assets/images/step2.png";
import steponePic3 from "../../assets/images/step3.png";
import steponePic4 from "../../assets/images/step4.png";
import Button from "../Button/Button";
import {
  StepFormLogoOne,
  StepFormLogoThree,
  StepFormLogoTwo,
} from "../SvgContainer/SvgConainer";
import { useQuery } from "@tanstack/react-query";

const StepSection = ({ title, subtitle, btnText, isAbout }) => {
  const axiosPublic = useAxiosPublic();

  const stepFormData = async () => {
    try {
      const response = await axiosPublic.get("/api/home");
      return response.data;
    } catch (error) {
      console.error("Error fetching card data: ", error.message || error);
      throw new Error("Failed to fetch card data");
    }
  };

  const { data: StepFormData } = useQuery({
    queryKey: ["stepFormData"],
    queryFn: stepFormData,
  });

  // console.log(StepFormData?.data?.works_step_1);

  return (
    <section className="">
      <div className="container mx-auto">
        {/* This is title section */}
        <div className="text-center ">
          <h2 className="text-headingColor text-5xl font-bold">{title}</h2>
          <p className="mt-6 text-navbarColor text-[22px]">{subtitle}</p>
        </div>
        {/* This is the step section */}
        <div className="flex flex-row gap-6 mt-16 mb-12 ">
          {/* Step 1  */}
          <div
            className={`max-w-[348px]  h-auto py-[50px] px-[37px] rounded-[20px] o ${
              isAbout ? "bg-white" : "bg-[#FAFBFC]"
            }`}
          >
            <div className="flex relative">
              <img src={steponePic1} alt="" />
              <StepFormLogoOne />
            </div>
            <div className="mt-7">
              <h1 className="text-headingColor text-lg font-semibold">
                {StepFormData?.data?.works_step_1?.title}
              </h1>
              <p className="text-lg text-navbarColor mt-[9px]">
                {StepFormData?.data?.works_step_1?.description}
              </p>
            </div>
          </div>
          {/* Step 1  */}
          {/* Step 2 */}
          <div
            className={`max-w-[348px] h-auto py-[50px] px-[37px] rounded-[20px] ${
              isAbout ? "bg-white" : "bg-[#FAFBFC]"
            }`}
          >
            <div className="flex relative">
              <img src={steponePic2} alt="" />
              <StepFormLogoTwo />
            </div>
            <div className="mt-7">
              <h1 className="text-headingColor text-lg font-semibold">
                {StepFormData?.data?.works_step_2?.title}
              </h1>
              <p className="text-lg text-navbarColor mt-[9px]">
                {StepFormData?.data?.works_step_2?.description}
              </p>
            </div>
          </div>
          {/* Step 2 */}
          {/* Step 3 */}
          <div
            className={`max-w-[348px]  h-auto py-[50px] px-[37px] rounded-[20px] ${
              isAbout ? "bg-white" : "bg-[#FAFBFC]"
            }`}
          >
            <div className="flex relative">
              <img src={steponePic3} alt="" />
              <StepFormLogoThree />
            </div>
            {/*  */}
            <div className="mt-7">
              <h1 className="text-headingColor text-lg font-semibold">
                {StepFormData?.data?.works_step_3?.title}
              </h1>
              <p className="text-lg text-navbarColor mt-[9px]">
                {StepFormData?.data?.works_step_3?.description}
              </p>
            </div>
          </div>
          {/* Step 3 */}
          {/* Step 4 */}
          <div
            className={`max-w-[348px] h-auto py-[50px] px-[37px] rounded-[20px] ${
              isAbout ? "bg-white" : "bg-[#FAFBFC]"
            }`}
          >
            <div className="flex relative">
              <img src={steponePic4} alt="" />
            </div>
            {/*  */}
            <div className="mt-7">
              <h1 className="text-headingColor text-lg font-semibold">
                {StepFormData?.data?.works_step_4?.title}
              </h1>
              <p className="text-lg text-navbarColor mt-[9px]">
                {StepFormData?.data?.works_step_3?.description}
              </p>
            </div>
          </div>
          {/* Step 4 */}
        </div>
        {/* */}
        <div className="flex justify-center">
          {/* This is button section */}
          <Button text={btnText} color={"bg-buttonColor"} />
        </div>
      </div>
    </section>
  );
};

export default StepSection;
