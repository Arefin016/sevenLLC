/* eslint-disable react/prop-types */
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";

const Packaging = ({ data }) => {
  console.log(data);
  return (
    <section>
      <div className="custom-gradient xl:py-[150px] xl:px-[220px] px-5 py-12">
        {/* This is the title section */}
        <div className="flex flex-col items-center">
          <h1 className="text-headingColor xl:text-5xl text-2xl lg:text-3xl font-bold max-w-[952px] xl:leading-[67.2px]">
            Packaging Solutions for Every Industry
          </h1>
          <p className="text-navbarColor mt-6 max-w-[553px] xl:text-[22px] text-base lg:text-lg xl:leading-[37.4px]">
            No Matter the Industry, 777Bags has you covered.
          </p>
        </div>
        {/* This is the card section */}
        <div className="xl:mt-12 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data?.map((item, idx) => (
            <Card key={idx} data={item} />
          ))}
        </div>

        {/* This is the button section */}
        <div className="flex flex-col items-center mt-12">
          <div className="border max-w-[914px] border-buttonColor py-4 px-8 rounded-[60px] text-buttonColor text-sm lg:text-base xl:text-lg font-medium">
            Don’t see what you need? Fill out our form to the best of your
            ability and we’ll get you a quote!
          </div>
          <div className="xl:mt-12 mt-9">
            <Button text={"Explore All Products"} color={"bg-buttonColor"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packaging;
