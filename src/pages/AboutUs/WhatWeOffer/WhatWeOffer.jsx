import Button from "../../../components/Button/Button";
import Loader from "@/components/Loader/Loader";
import { useWhatWeOfferQuery } from "@/hooks/cms.queries";

const WhatWeOffer = () => {
  const { data: whatWeOffer, isLoading } = useWhatWeOfferQuery();

  // loader:
  if (isLoading) return <Loader />;
  return (
    <section>
      <div className="max-w-[1480px] mx-auto xl:my-[150px] mt-10 px-5 xl:px-0">
        {/* This is the first div */}
        <div className="flex flex-col items-center md:flex-row xl:gap-[162px] gap-16">
          <div className="xl:w-[60%]">
            <h1 className="headingStyle mt-6">What We Offer</h1>
            <p className="xl:text-xl text-sm md:text-base text-navbarColor max-w-[396px] mt-6">
              We provide a wide range of packaging solutions to suit businesses
              of all sizes:
            </p>
            <div className="xl:mt-12 mt-6">
              {" "}
              <Button
                text={"Request a Quote"}
                color={"bg-buttonColor"}
              ></Button>
            </div>
          </div>
          {/* This is the second div */}
          <div className="flex flex-col xl:flex-row xl:gap-[61px] gap-6">
            {whatWeOffer?.map((item) => {
              return (
                <div className="flex flex-col items-start" key={item?.id}>
                  {/* Render the content of each card here */}
                  <div className="rounded-[133.333px] bg-white shadow-[0px_2.667px_16.667px_rgba(0,0,0,0.10)] xl:size-[80px] p-4">
                    <img
                      className="self-start xl:h-full h-7 xl:w-full w-7 object-cover"
                      src={`${import.meta.env.VITE_SITE_URL}/${
                        item?.image_url
                      }`}
                      alt={item.heading}
                    />
                  </div>
                  <h1 className="text-headingColor xl:text-xl text-lg font-semibold text-left xl:mt-8 mt-4">
                    {item.title}
                  </h1>
                  <p className="text-navbarColor xl:text-base text-sm xl:mt-4 mt-2 text-left">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
