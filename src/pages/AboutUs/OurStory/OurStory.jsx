/* eslint-disable react/prop-types */
import parse from "html-react-parser";

const OurStory = ({ data }) => {
  return (
    <section className="xl:pr-[210px] bg-[#FAFBFC] xl:pt-28 pt-10 px-5 sm:px-0">
      <div className="flex flex-col sm:flex-row gap-8 lg:gap-20 xl:gap-[150px] items-center">
        <div className="">
          <img
            className="xlg:w-[829px] xlg:h-[714px] object-contain rounded-tl-none rounded-tr-[80px] rounded-br-none rounded-bl-none"
            src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
            alt={"ourStoryPic"}
          />
        </div>
        <div className="xl:w-1/2">
          <h1 className="text-headingColor text-2xl lg:text-5xl font-bold max-w-[721px] leading-[67.2px]">
            {data?.title}
          </h1>
          <div className="lg:text-lg md:text-base text-sm  text-navbarColor lg:mt-[18px] max-w-[711px]">
            {parse(data?.description)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
