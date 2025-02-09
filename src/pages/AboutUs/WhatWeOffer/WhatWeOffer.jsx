import offerPic1 from "../../../assets/images/offerPic/offerPic1.png";
import offerPic2 from "../../../assets/images/offerPic/offerPic2.png";
import offerPic3 from "../../../assets/images/offerPic/offerPic3.png";
import Button from "../../../components/Button/Button";

const cardData = [
  {
    image: offerPic1,
    heading: "Custom Packaging",
    subheading:
      "Mylar bags, luxury boxes, bakery packaging, and more, tailored to your brand.",
  },
  {
    image: offerPic2,
    heading: "Custom Packaging",
    subheading:
      "Mylar bags, luxury boxes, bakery packaging, and more, tailored to your brand.",
  },
  {
    image: offerPic3,
    heading: "Custom Packaging",
    subheading:
      "Mylar bags, luxury boxes, bakery packaging, and more, tailored to your brand.",
  },
];

const WhatWeOffer = () => {
  return (
    <section>
      <div className="max-w-[1480px] mx-auto my-[150px]">
        {/* This is the first div */}
        <div className="flex flex-row gap-[162px]">
          <div className="w-[60%]">
            <h1 className="headingStyle mt-6">What We Offer</h1>
            <p className="text-xl text-navbarColor max-w-[396px] mt-6">
              We provide a wide range of packaging solutions to suit businesses
              of all sizes:
            </p>
            <div className="mt-12">
              {" "}
              <Button
                text={"Request a Quote"}
                color={"bg-buttonColor"}
              ></Button>
            </div>
          </div>
          {/* This is the second div */}
          <div className="flex gap-[61px]">
            {cardData.map((item, index) => {
              return (
                <div className="flex flex-col items-start" key={index}>
                  {/* Render the content of each card here */}
                  <img
                    className="self-start"
                    src={item.image}
                    alt={item.heading}
                  />
                  <h1 className="text-headingColor text-xl font-semibold text-left mt-8">
                    {item.heading}
                  </h1>
                  <p className="text-navbarColor text-base mt-4 text-left">
                    {item.subheading}
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
