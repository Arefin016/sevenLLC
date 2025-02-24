/* eslint-disable react/prop-types */
import ProductsSection from "@/components/ProductsSection/ProductsSection";

const ProductCardSection = ({ data }) => {
  return (
    <section className="xl:mt-[90px] mt-12 lg:mt-14">
      <div className="container mx-auto">
        {/* title */}
        <div className="text-center">
          <h2 className="headingStyle">Products & Services</h2>
        </div>
        <div className="flex flex-col justify-center text-center xl:gap-[150px] gap-14 lg:gap-[100px]">
          {/* This is the Industry Data section */}
          {data?.map((item, idx) => (
            <ProductsSection key={item?.id} data={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCardSection;
