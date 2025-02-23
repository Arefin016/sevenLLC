/* eslint-disable react/prop-types */
import ProductCard from "../ProductCard/ProductCard";

const ProductsSection = ({ data, idx }) => {
  return (
    <div>
      <h4 className="text-buttonColor xl:text-[28px] text-lg md:text-xl font-medium mt-2">
        Section {idx + 1} : {data?.name}
      </h4>
      <div className="container mx-auto mt-[77px] xl:space-y-[77px] space-y-14">
        {data?.products?.map((product) => (
          <ProductCard key={product?.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
