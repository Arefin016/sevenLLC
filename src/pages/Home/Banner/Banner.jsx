/* eslint-disable react/prop-types */
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";

const Banner = ({ data }) => {
  return (
    <section className="xl:pt-[132px] pt-4 md:pt-8 lg:mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center justify-center lg:justify-between sm:flex-row lg:gap-[66px] gap-9 px-4 md:px-7 xl:px-8 xxl:px-0">
          {/* This is the first div */}
          <div className="xlg:w-1/2 w-full">
            <h2 className="text-2xl sm:max-w-[707px] lg:text-4xl xlg:text-[64px] font-bold md:text-[40px] xlg:leading-[84px] leading-10 md:leading-[44px] lg:leading-[50px]">
              {data?.title}
            </h2>
            <h1 className="text-2xl text-buttonColor sm:max-w-[707px] xlg:text-[64px] lg:text-4xl xlg:leading-[84px] md:text-[40px] font-bold leading-10 md:leading-[44px] lg:leading-[50px]">
              {data?.sub_title}
            </h1>
            <p className="text-sm md:text-base xlg:text-2xl max-w-[700px] text-navbarColor mt-[21px] xl:leading-[39.36px] leading-6 md:leading-[25px] lg:leading-9">
              {data?.description}
            </p>

            <div className="lg:mt-12 mt-8">
              <Link to={"/orderForms"}>
                <Button text="Request a Quote" color="bg-buttonColor" />
              </Link>
            </div>
          </div>
          {/* This is the second div */}
          <div>
            <img
              className="xl:max-w-[569px] xl:h-[597px] md:h-full object-contain"
              src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
              alt="not found"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
