import { useLocation } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Button from "../../../components/Button/Button";

const ChooseUs = ({
  title,
  bulletPoints,
  description,
  image,
  buttonText,
  imageAlt = "Choose us image",
  showBreadcrumb = true,
}) => {
  const location = useLocation();

  return (
    <section className="ml-[210px] mt-[150px]">
      <div className="flex gap-[150px] items-center">
        {/* First div: Title, Bullet Points, Description, and Button */}

        <div className="w-1/2">
          {/* Conditionally render Breadcrumb */}
          {showBreadcrumb && <Breadcrumb location={location} />}

          <h1 className="text-headingColor text-5xl font-bold max-w-[721px] leading-[67.2px]">
            {title}
          </h1>
          <ul className="mt-7 unorderList">
            {bulletPoints.map((point, index) => (
              <li key={index} className="bulletPoint">
                {point}
              </li>
            ))}
          </ul>
          <p className="text-xl text-navbarColor">
            <span className="text-headingColor font-semibold leading-9 tracking-[-0.4px]">
              Meta Description :
            </span>{" "}
            {description}
          </p>
          {/* Button Section */}
          <div className="mt-12">
            <Button text={buttonText} color={"bg-buttonColor"} />
          </div>
        </div>
        {/* Second div: Image */}
        <div className="max-w-[829px] h-[671px] object-cover">
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
