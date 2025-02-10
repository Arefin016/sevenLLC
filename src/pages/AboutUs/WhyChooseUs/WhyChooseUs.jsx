import ChooseUsCard from "../../../components/ChooseUsCard/ChooseUsCard";
import chooseUsLogo1 from "../../../assets/images/chooseUslogo/logo1.png";
import chooseUsLogo2 from "../../../assets/images/chooseUslogo/logo2.png";
import chooseUsLogo3 from "../../../assets/images/chooseUslogo/logo3.png";
import chooseUsLogo4 from "../../../assets/images/chooseUslogo/logo4.png";
import chooseUsLogo5 from "../../../assets/images/chooseUslogo/logo5.png";

const WhyChooseUs = () => {
  const chooseUsData = [
    {
      imgSrc: chooseUsLogo1,
      title: "Locally Owned, Globally Connected",
      description:
        "We’re proud to be located in Rhode Island, with a global network of trusted suppliers, offering high-quality and high-quantity packaging solutions.",
    },
    {
      imgSrc: chooseUsLogo2,
      title: "Customer-Centric Approach",
      description:
        "As a small business, we focus on building strong relationships with our clients, offering 24/7 support and a seamless customer experience.",
    },
    {
      imgSrc: chooseUsLogo3,
      title: "Timely & Professional",
      description:
        "From quick quotes to fast turnarounds, we prioritize your deadlines and ensure your satisfaction at every step.",
    },
    {
      imgSrc: chooseUsLogo4,
      title: "Uncompromising Quality",
      description:
        "Every product is sourced from certified suppliers with proven records of ethical practices, durable materials, and exceptional craftsmanship.",
    },
    {
      imgSrc: chooseUsLogo5,
      title: "Versatility B2B Service",
      description:
        "We provide tailored solutions for industries from food to luxury goods. We are truly a business’s business, supporting your B2B needs!",
    },
  ];

  const remainder = chooseUsData.length % 3;
  const fullRowsCount = Math.floor(chooseUsData.length / 3) * 3;

  return (
    <section className="mt-[158px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center text-center">
          <h2 className="headingStyle">Why Choose 777Bags?</h2>
          <p className="subHeadingStyle max-w-[732px] mx-auto mt-6">
            We’re more than just a packaging provider—we’re a partner in your
            success. Here’s what sets us apart:
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[30px] mt-[52px] ">
          {chooseUsData.slice(0, fullRowsCount).map((card, index) => (
            <ChooseUsCard
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
            />
          ))}

          {/* This is the card section */}
          {remainder > 0 && (
            <div className="col-span-3 flex justify-center gap-[30px]">
              {chooseUsData.slice(fullRowsCount).map((item, index) => (
                <ChooseUsCard
                  key={fullRowsCount + index}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
