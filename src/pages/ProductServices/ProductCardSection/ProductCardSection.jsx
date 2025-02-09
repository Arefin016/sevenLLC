import ProductCard from "../../../components/ProductCard/ProductCard";
import productServicePic1 from "../../../assets/images/productServicePic/productServicePic1.png";
import productServicePic2 from "../../../assets/images/productServicePic/productServicePic2.png";
import productServicePic3 from "../../../assets/images/productServicePic/productServicePic3.png";
import productServicePic4 from "../../../assets/images/productServicePic/productServicePic4.png";
import productServicePic5 from "../../../assets/images/productServicePic/productServicePic5.png";
import productServicePic6 from "../../../assets/images/productServicePic/productServicePic6.png";
import productServicePic7 from "../../../assets/images/productServicePic/productServicePic7.png";
import productServicePic8 from "../../../assets/images/productServicePic/productServicePic8.png";
import productServicePic9 from "../../../assets/images/productServicePic/productServicePic9.png";
import productServicePic10 from "../../../assets/images/productServicePic/productServicePic10.png";
import productServicePic11 from "../../../assets/images/productServicePic/productServicePic11.png";
import productServicePic12 from "../../../assets/images/productServicePic/productServicePic12.png";
import productServicePic13 from "../../../assets/images/productServicePic/productServicePic13.png";
import productServicePic14 from "../../../assets/images/productServicePic/productServicePic14.png";

const ProductCardSection = () => {
  // This is the industry data section
  const industryData = [
    {
      title: "Cannabis & CBD Packaging",
      products: [
        "Mylar Bags",
        "Flower & Concentrate Jars",
        "Pre-Roll Tubes",
        "Cart Boxes",
      ],
      description:
        "From child-resistant Mylar bags to UV-protected jars, we provide cannabis packaging solutions that meet compliance standards while showcasing your brand.",
      imgSrc: productServicePic1,
      reverse: false,
      buttonText: "Explore Cannabis Packaging",
      buttonColor: "bg-buttonColor",
    },
    {
      title: "Retail & Shopping Packaging",
      products: ["T-Shirt Bags ", "Paper Shopping Bags", "Luxury Retail Bags"],
      description:
        "Our retail packaging is designed for durability and style, with customizable options to reflect your brand’s personality.",
      imgSrc: productServicePic2,
      reverse: true,
      buttonText: "Discover Retail Packaging",
      buttonColor: "bg-buttonColor",
    },
    {
      title: "Food & Beverage Packaging",
      products: [
        "Stand-Up Food Pouches",
        "Bakery Boxes",
        "Coffee & Tea Bags",
        "Spout Bags",
      ],
      description:
        "Perfect for restaurants, cafés, takeout, or grocery products, our food and beverage packaging is built for freshness and convenience, with branding options available.",
      imgSrc: productServicePic3,
      reverse: false,
      buttonText: "View Food & Beverage Packaging",
      buttonColor: "bg-buttonColor",
    },
    {
      title: "Trash & Waste Packaging",
      products: ["Trash Bags ", "Medical Waste Bags"],
      description:
        "Keep it clean with our durable trash and waste packaging, including compostable options to support your sustainability goals.",
      imgSrc: productServicePic4,
      reverse: true,
      buttonText: "Browse Trash & Waste Packaging",
      buttonColor: "bg-buttonColor",
    },
    {
      title: "Health & Beauty Packaging",
      products: ["Cosmetic Jars ", "Perfume Bottles", "Syringe Bottles"],
      description:
        "Elevate your beauty brand with premium cosmetic packaging designed to protect and showcase your products in style.",
      imgSrc: productServicePic5,
      reverse: false,
      buttonText: "Shop Health & Beauty Packaging",
      buttonColor: "bg-buttonColor",
    },
    {
      title: "Luxury Packaging",
      products: ["Gift Boxes", "Jewelry Boxes", "Boutique Bags"],
      description:
        "Our luxury packaging combines elegance and functionality to create unforgettable customer experiences.",
      imgSrc: productServicePic6,
      reverse: true,
      buttonText: "Explore Luxury Packaging",
      buttonColor: "bg-buttonColor",
    },
  ];
  // This is the material data section
  const materialData = [
    {
      title: "Paper Packaging",
      products: ["Bakery Boxes", "Paper Shopping Bags", "Gift Boxes"],
      description:
        "Eco-friendly and versatile, our paper packaging options are ideal for food, retail, and gift purposes.",
      imgSrc: productServicePic7,
      reverse: false,
      buttonText: "Discover Paper Packaging",
      buttonColor: "bg-buttonColor",
    },
    {
      title: "Plastic Packaging",
      products: ["T-Shirt Bags", "Trash Bags", "Ziplock Bags", "Poop Bags"],
      description:
        "Durable and cost-effective, our plastic packaging solutions include everything from trash bags to resealable Ziplock's.",
      imgSrc: productServicePic8,
      reverse: true,
      buttonText: "Browse Plastic Packaging",
      buttonColor: "bg-buttonColor",
    },
    {
      title: "Glass Packaging",
      products: ["Flower Jars", "Cosmetic Jars", "Perfume Bottles"],
      description:
        "Elegant and sustainable, our glass packaging options are perfect for high-end products like cosmetics and cannabis.",
      imgSrc: productServicePic9,
      reverse: false,
      buttonText: "Explore Glass Packaging",
      buttonColor: "bg-buttonColor",
    },
    {
      title: "Bamboo & Eco-Friendly Packaging",
      products: [
        "Bamboo-Topped Jars",
        "Compostable Trash Bags",
        "Recyclable Shopping Bags",
      ],
      description:
        "Support your sustainability goals with our eco-friendly packaging options, crafted from renewable and recyclable materials.",
      imgSrc: productServicePic10,
      reverse: true,
      buttonText: "Shop Eco-Friendly Packaging",
      buttonColor: "bg-buttonColor",
    },
  ];

  // This is the function data section
  const functionData = [
    {
      title: "Child-Resistant Packaging",
      products: ["Mylar Bags", "Pre-Roll Tubes", "Flower Jars"],
      description:
        "Designed for safety and compliance, our child-resistant packaging protects your products and your customers.",
      imgSrc: productServicePic11,
      reverse: false,
      buttonText: "Explore Child-Resistant Packaging",
      buttonColor: "bg-buttonColor",
    },
    {
      title: "Food-Grade Packaging",
      products: ["Stand-Up Pouches", "Bakery Boxes", "Deli Bags"],
      description:
        "Maintain product freshness with food-safe packaging options for restaurants, bakeries, and grocery stores.",
      imgSrc: productServicePic12,
      reverse: true,
      buttonText: "View Food-Grade Packaging",
      buttonColor: "bg-buttonColor",
    },
    {
      title: "Heavy-Duty Packaging",
      products: ["Trash Bags", "Recycling Bags", "Bulk Shipping Bags"],
      description:
        "Our heavy-duty packaging is built for durability, perfect for industrial and commercial use.",
      imgSrc: productServicePic13,
      reverse: false,
      buttonText: "Shop Heavy-Duty Packaging",
      buttonColor: "bg-buttonColor",
    },
    {
      title: "Customizable Packaging",
      products: ["All custom options across categories"],
      description:
        "Tailor your packaging to your brand’s needs with fully customizable designs and materials.",
      imgSrc: productServicePic14,
      reverse: true,
      buttonText: "Get a Custom Quote",
      buttonColor: "bg-buttonColor",
    },
  ];
  return (
    <section className="mt-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center text-center">
          <h2 className="headingStyle">Products & Services</h2>
          <p className="text-buttonColor text-[28px] font-medium mt-2">
            Section 1 : By Industry
          </p>
          {/* This is the Industry Data section */}
          <div className="container mx-auto mt-[77px] space-y-[77px]">
            {industryData?.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          {/* This is the Industry Data section */}
          <div className="container mx-auto mt-[113px] space-y-[77px]">
            <div>
              <h1 className="text-buttonColor text-[28px] font-medium">
                Section 2 : By Material
              </h1>
              <p className="text-xl text-navbarColor mt-5">
                For customers looking for specific materials to suit their
                needs.
              </p>
            </div>
            {materialData?.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          {/* This is the Function Data section */}
          <div className="container mx-auto mt-[113px] space-y-[77px]">
            <div>
              <h1 className="text-buttonColor text-[28px] font-medium">
                Section 3 : By Function
              </h1>
              <p className="text-xl text-navbarColor mt-5">
                Customers can find products based on their intended use.
              </p>
            </div>
            {functionData?.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCardSection;
