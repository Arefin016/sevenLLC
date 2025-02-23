/* eslint-disable react/prop-types */
import steponePic1 from "@/assets/images/step1.png";
import steponePic2 from "@/assets/images/step2.png";
import steponePic3 from "@/assets/images/step3.png";
import steponePic4 from "@/assets/images/step4.png";
import Button from "../Button/Button";
import StepCard from "../Cards/StepCard";

const StepSection = ({ title, subtitle, btnText, isAbout, data }) => {
  const stepImages = [steponePic1, steponePic2, steponePic3, steponePic4];

  const updatedData = data?.map((item, index) => ({
    ...item,
    image: stepImages[index] || steponePic4,
    lastItem: data.length - 1 == index,
  }));

  return (
    <section className="">
      <div className="container mx-auto">
        {/* This is title section */}
        <div className="text-center">
          <h2 className="text-headingColor lg:text-5xl text-2xl font-bold">
            {title}
          </h2>
          <p className="lg:mt-6 mt-3 text-navbarColor lg:text-[22px] text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:mt-16 mt-8 mb-12">
          {updatedData?.map((item) => (
            <StepCard isAbout={isAbout} key={item?.id} data={item} />
          ))}
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
