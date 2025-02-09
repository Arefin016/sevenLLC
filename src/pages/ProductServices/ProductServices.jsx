import ProductBanner from "./ProductBanner/ProductBanner";
import ProductCardSection from "./ProductCardSection/ProductCardSection";

const ProductServices = () => {
  return (
    <div>
      <ProductBanner showBreadcrumb={true} />
      <ProductCardSection />
    </div>
  );
};

export default ProductServices;
