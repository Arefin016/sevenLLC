/* eslint-disable react/prop-types */
import ChooseUsCard from "../../../components/ChooseUsCard/ChooseUsCard";

const WhyChooseUs = ({ data }) => {
  return (
    <section className="xl:mt-[158px] mt-8">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center text-center">
          <h2 className="headingStyle">Why Choose 777Bags?</h2>
          <p className="subHeadingStyle max-w-[732px] mx-auto mt-6">
            We’re more than just a packaging provider—we’re a partner in your
            success. Here’s what sets us apart:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] mt-[52px] ">
          {data?.map((item) => (
            <ChooseUsCard key={item?.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
