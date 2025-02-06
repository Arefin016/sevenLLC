import choosePic from "../../../assets/images/chooseUsPic.png";
import "../../../styles/chooseUs.css";
import Button from "../../../components/Button/Button";

const ChooseUs = () => {
  return (
    <section className="ml-[210px] my-[150px]">
      <div className="flex gap-[150px] items-center">
        {/* This is the first div */}
        <div className="w-1/2">
          <h1 className="text-headingColor text-5xl font-bold max-w-[721px]">
            Why Choose Us?
          </h1>
          <ul className="mt-7 unorderList">
            <li className="bulletPoint">
              Innovative designs to enhance your branding
            </li>
            <li className="bulletPoint">
              Eco-friendly and sustainable materials
            </li>
            <li className="bulletPoint">Competitive pricing for bulk orders</li>
          </ul>
          <p className="text-xl text-navbarColor">
            <span className="text-headingColor font-semibold leading-9 tracking-[-0.4px]">
              Meta Description :
            </span>{" "}
            Discover premium-quality, customizable packaging solutions at
            777bags.com. From Mylar bags to eco-friendly options, elevate your
            brand with unique designs.
            <br />- Locally Owned Globally Connected <br />- Dedicated to
            supporting local businesses, communities and organizations that are
            associated with our team! <br /> - Packaging Solutions For Every
            Industry
          </p>
          {/* This is the button section */}
          <div className="mt-12">
            <Button text={"Learn More About 777Bags"} />
          </div>
        </div>
        {/* This is the second div */}
        <div className="max-w-[829px] h-[729px]">
          <img src={choosePic} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
