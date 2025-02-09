import StepSection from "../../components/StepSection/StepSection";
import BetterPlanet from "../Home/BetterPlanet/BetterPlanet";
import ProductBanner from "./ProductBanner/ProductBanner";
import ProductCardSection from "./ProductCardSection/ProductCardSection";
import commitmentPic from "../../assets/images/commitmentPic.png"

const ProductServices = () => {
  const data = {
    title: "Our Commitment",
    description:
      "At 777Bags, we don’t just deliver products—we deliver an experience! From initial interaction to the final delivery, we focus on communication, reliability, and building lasting relationships. When you work with us, you’re not just another client—you’re a valued partner.",
    buttonText: "Request a Quote",
    backgroundImage: commitmentPic,
    gradient:
      "linear-gradient(0deg, rgba(7, 160, 236, 0.90) 0%, rgba(7, 160, 236, 0.90) 100%)",
  };
  return (
    <div>
      <ProductBanner showBreadcrumb={true} />
      <ProductCardSection />
      <div className="bg-[#FAFBFC] pb-[150px] pt-[137px] mt-[150px]">
        <StepSection
          isAbout={true}
          title={"Our Process"}
          subtitle={"Your Packaging, Simplified"}
          btnText={"Request a Quote"}
        />
      </div>
      <BetterPlanet {...data} />
    </div>
  );
};

export default ProductServices;
