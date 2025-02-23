/* eslint-disable react/prop-types */
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";

const Banner = ({ data }) => {
  return (
    <section className="lg:pt-[132px]">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center justify-center sm:flex-row lg:gap-[66px] gap-9">
          {/* This is the first div */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-2xl sm:max-w-[707px] xlg:text-[64px] font-bold xmd:text-3xl lg:leading-[84px]">
              {data?.title}
            </h2>
            <h1 className="text-2xl text-buttonColor sm:max-w-[707px] xlg:text-[64px] lg:leading-[84px] xmd:text-3xl font-bold">
              {data?.sub_title}
            </h1>
            <p className="text-base lg:text-2xl max-w-[700px] text-navbarColor mt-[21px]">
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
              className="xlg:max-w-[569px] xlg:h-[597px] object-contain"
              src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
