import ProductCard from "../../../components/ProductCard/ProductCard";

const ProductCardSection = () => {
  return (
    <section className="mt-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center text-center">
          <h2 className="headingStyle">Products & Services</h2>
          <p className="text-buttonColor text-[28px] font-medium mt-2">
            Section 1 : By Industry
          </p>
          {/* This is the card section */}
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default ProductCardSection;
