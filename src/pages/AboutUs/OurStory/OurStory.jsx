import parse from "html-react-parser";

const OurStory = ({ title, subTitle, image }) => {
  const parsedData = typeof subTitle === "string" ? subTitle : String(subTitle);

  return (
    <section className="pr-[210px] bg-[#FAFBFC]">
      <div className="flex gap-[150px] items-center">
        <div className="">
          <img
            className="w-[829px] h-[714px] object-cover"
            src={image}
            alt={"ourStoryPic"}
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-headingColor text-5xl font-bold max-w-[721px] leading-[67.2px]">
            {title}
          </h1>
          <p className="text-lg text-navbarColor mt-[18px] max-w-[711px]">
            {parse(parsedData)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
