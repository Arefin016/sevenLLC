import { useLocation } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Button from "../../../components/Button/Button";
import parse from "html-react-parser";

const ChooseUs = ({
  title,
  description,
  buttonText,
  imageAlt = "Choose us image",
  showBreadcrumb = true,
  img,
}) => {
  const location = useLocation();

  const parsedData =
    typeof description === "string" ? description : String(description);

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

          <p className="user-descreption-wrapper mt-4">{parse(parsedData)}</p>
          {/* Button Section */}
          <div className="mt-12">
            <Button text={buttonText} color={"bg-buttonColor"} />
          </div>
        </div>
        {/* Second div: Image */}
        <div className="max-w-[829px] h-[710px] object-cover">
          <img src={img} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
