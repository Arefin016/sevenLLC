import Button from "../Button/Button";
import productServicePic1 from "../../assets/images/productServicePic/productServicePic1.png";

const ProductCard = ({
  title,
  products,
  description,
  imgSrc,
  reverse,
  buttonText,
}) => {
  return (
    <section>
      <div className="container mx-auto">
        <div
          className={`flex items-center gap-[177px] ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          {/* Content Section */}
          <div className="w-1/2 flex flex-col text-left">
            <h1 className="text-headingColor text-[32px] font-bold">{title}</h1>
            <span className="text-buttonColor text-lg mt-7">Products:</span>
            <ul className="list-disc pl-6 text-lg text-navbarColor mt-2">
              {products.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
            <p className="text-navbarColor text-lg leading-[170%] mt-5">
              {description}
            </p>
            <div className="mt-12">
              <Button text={buttonText} color={"bg-buttonColor"} />
            </div>
          </div>
          {/* Image Section */}
          <div className="bg-buttonColor rounded-[70px] w-[694px] h-[580px] relative">
            <img
              className={`absolute w-[694px] h-[580px] top-[-25px]  object-cover rounded-[70px] overflow-hidden transition-all duration-300 hover:scale-105 ${
                reverse ? "right-[25px]" : "left-[25px]"
              } `}
              src={imgSrc}
              alt="Product"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
