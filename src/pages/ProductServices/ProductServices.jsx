import StepSection from "../../components/StepSection/StepSection";
import BetterPlanet from "../Home/BetterPlanet/BetterPlanet";
import ProductBanner from "./ProductBanner/ProductBanner";
import ProductCardSection from "./ProductCardSection/ProductCardSection";
import commitmentPic from "../../assets/images/commitmentPic.png";
import { aboutUsPlanetData } from "@/data/data";
import {
  useProcessQuery,
  useProductsAndServicesQuery,
} from "@/hooks/cms.queries";
import Loader from "@/components/Loader/Loader";

const ProductServices = () => {
  const { data: allProductsAndServicesData, isLoading } =
    useProductsAndServicesQuery();
  const { data: processData, isLoading: processLoading } = useProcessQuery();

  // loader:
  if (isLoading || processLoading) return <Loader />;
  return (
    <div>
      <ProductBanner showBreadcrumb={true} />
      <ProductCardSection data={allProductsAndServicesData} />
      <div className="bg-[#FAFBFC] xl:pb-[150px] pb-10 xl:pt-[137px] pt-10 xl:mt-[150px] mt-10">
        <StepSection
          data={processData}
          isAbout={true}
          title={"Our Process"}
          subtitle={"Your Packaging, Simplified"}
          btnText={"Request a Quote"}
        />
      </div>
      <BetterPlanet data={aboutUsPlanetData} backgroundImage={commitmentPic} />
    </div>
  );
};

export default ProductServices;
