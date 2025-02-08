import ourStory from "../../../assets/images/ourStoryPic.png";

const OurStory = () => {
  return (
    <section className="pt-[120px] pr-[210px] bg-[#FAFBFC]">
      <div className="flex gap-[150px] items-center">
        <div className="max-w-[829px] h-[657px] object-cover">
          <img src={ourStory} alt={"ourStoryPic"} />
        </div>
        <div className="w-1/2">
          <h1 className="text-headingColor text-5xl font-bold max-w-[721px] leading-[67.2px]">
            {"Our Story"}
          </h1>
          <p className="text-lg text-navbarColor mt-[18px] max-w-[711px]">
            "Packaging has the power to tell a story, and our story began with
            the idea of breaking into the cannabis industry. Inspired by the
            creative designs on Mylar bags, we discovered the untapped potential
            of custom packaging for businesses across all industries. Over time,
            our focus expanded beyond cannabis to offer scalable, tailored
            solutions for grocery, retail, food, and more. <br /> As a small
            Rhode Island-based business, we’re deeply invested in supporting
            other local businesses, even beyond our “local” barriers, while
            leveraging a global network of certified suppliers to ensure the
            highest quality and ethical standards. From takeout containers that
            make dining on the go easier to retail bags that represent your
            brand, we focus on creating packaging that’s both functional and
            memorable."
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
