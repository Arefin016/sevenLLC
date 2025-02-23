import { useLocation } from "react-router-dom";
import productBannerPic from "../../../assets/images/productBannerPic.png";
import Button from "../../../components/Button/Button";
import ButtonTwo from "../../../components/ButtonTwo/ButtonTwo";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

const ProductBanner = (showBreadcrumb = true) => {
  const location = useLocation();
  return (
    <section className="mt-[44px]">
      <div
        className="xl:h-[645px] h-[400px] flex flex-col items-center justify-center px-5 xl:px-0"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 11, 28, 0.90) 0%, rgba(0, 11, 28, 0.90) 100%), url(${productBannerPic}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* This is the content section */}
        <div className="flex flex-col items-center justify-center text-center">
          {showBreadcrumb && (
            <Breadcrumb textColor="text-white" location={location} />
          )}

          <h2 className="text-white xl:text-5xl text-xl md:text-3xl font-bold max-w-[704px] xl:leading-[67px]">
            High-Quality Packaging Solutions for Every Need
          </h2>
          <p className="text-white xl:text-xl text-sm md:text-base max-w-[844px] mt-4">
            Explore our custom and stock packaging options by industry,
            material, or function.
          </p>
          <div className="xl:mt-12 mt-8 space-y-3 flex flex-col">
            <Button
              onClick={() => {
                alert("btn is working");
              }}
              text={"Get a Quote Today"}
              color={"bg-buttonColor"}
            />
            <ButtonTwo
              variant={"transparent"}
              text={"Learn About Custom Options"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
