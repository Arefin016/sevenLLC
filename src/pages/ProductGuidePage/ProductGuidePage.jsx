const ProductGuidePage = () => {
  return (
    <section className="xl:pt-24 xlg:pt-14">
      <div className="container mx-auto">
        {/* This is the title section */}
        <div className="flex flex-col justify-center items-center px-2">
          <h1 className="text-headingColor xl:text-5xl text-3xl md:text-4xl font-bold">
            Product Guide
          </h1>
          <p className="lg:max-w-[697px] text-sm text-center mt-6 text-navbarColor font-semibold italic leading-[25.2px]">
            This guide provides an overview of product offerings, minimum order
            quantities (MOQs), materials, and customization options tailored for
            various industries.
          </p>
        </div>
        {/* This is the body section */}
        {/* This is the first section */}
        <div className="rounded-[20px] border border-[#F0F0F0] lg:py-12 py-5 lg:px-12 px-5 mt-12 mx-3 lg:mx-5 xlg:mx-10 mb-10 lg:mb-0">
          <h1 className="xl:text-[28px] text-2xl text-headingColor font-medium">
            Industry-Specific Solutions
          </h1>
          {/* This is the Perfume and Cosmetics */}
          <div className="mt-[23px]">
            <h1 className="text-headingColor lg:text-2xl text-xl font-medium">
              1. Perfume and Cosmetics
            </h1>
            <p className="text-headingColor lg:text-lg text-base font-medium mt-1">
              Packaging Options:
            </p>
            {/* This is the Glass Bottles div */}
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor md:text-lg text-sm mt-[9px]">
                  Glass Bottles:
                </li>
              </ul>
              <span className="text-headingColor lg:text-lg text-sm">
                1. Perfume Bottles:
              </span>{" "}
              Available in various shapes (round, square, oval) with capacities
              ranging from 5ml to 100ml. <br />{" "}
              <span className="text-headingColor lg:text-lg text-sm">
                2. Roller Bottles:
              </span>{" "}
              Ideal for travel-size perfumes and essential oils. <br />{" "}
              <span className="text-headingColor lg:text-lg text-sm">
                3. Airless Bottles:
              </span>{" "}
              Keeps contents fresh and prevents oxidation.
            </p>
            {/* This is the Accessories: div */}
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Accessories:
                </li>
              </ul>
              <span className="text-headingColor lg:text-lg text-sm">1. Caps:</span> Metal,
              plastic, and premium wooden finishes. <br />{" "}
              <span className="text-headingColor lg:text-lg text-sm">2.Sprayers:</span>{" "}
              Atomizers in gold, silver, or custom finishes. <br />{" "}
              <span className="text-headingColor lg:text-lg text-sm">
                3. Pipettes and Droppers:
              </span>{" "}
              Suitable for serums and oils.
            </p>
            {/* This is the Material div */}
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Materials:
                </li>
              </ul>
              High-quality glass with customization options like frosting,
              tinting, or metallic finishes.
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  MOQ Ranges:
                </li>
              </ul>
              <span className="text-headingColor lg:text-lg text-sm">1. Bottles:</span>{" "}
              3,000–10,000 units depending on design complexity. <br />{" "}
              <span className="text-headingColor lg:text-lg text-sm">2.Accessories:</span>{" "}
              5,000+ for customization, lower for stock items. <br />{" "}
            </p>
          </div>
          {/* This is the  Food and Beverage */}
          <div className="mt-[23px]">
            <h1 className="text-headingColor text-2xl font-medium">
              2. Food and Beverage
            </h1>
            <p className="text-headingColor text-lg font-medium mt-1">
              Packaging Options:
            </p>
            {/* This is the Paper Packaging: div */}
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Paper Packaging:
                </li>
              </ul>
              Bakery boxes, pizza boxes, and takeout containers.
            </p>
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Plastic Packaging:
                </li>
              </ul>
              Poly bags, zipper bags, and beverage pouches
            </p>
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Eco-Friendly Packaging:
                </li>
              </ul>
              Compostable or biodegradable paper and plant-based plastics.
            </p>
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  MOQ Ranges:
                </li>
              </ul>
              <span className="text-headingColor lg:text-lg text-sm">
                1. Paper Packaging:
              </span>{" "}
              500–5,000 units. <br />{" "}
              <span className="text-headingColor lg:text-lg text-sm">2.Eco-Friendly:</span>{" "}
              1,000+ units <br />{" "}
            </p>
          </div>
          {/* This is the Cannabis and CBD */}
          <div className="mt-[23px]">
            <h1 className="text-headingColor text-2xl font-medium">
              3. Cannabis and CBD
            </h1>
            <p className="text-headingColor lg:text-lg text-sm font-medium mt-1">
              Packaging Options:
            </p>
            {/* This is the Paper Packaging: div */}
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Mylar Bags:
                </li>
              </ul>
              Available in various sizes (3.5g–1lb) with child-resistant options
            </p>
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Glass Jars:
                </li>
              </ul>
              UV-blocking jars for flower and concentrates
            </p>
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Vape Cartridges and Tubes:
                </li>
              </ul>
              Available with custom branding.
            </p>
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  MOQ Ranges:
                </li>
              </ul>
              <span className="text-headingColor lg:text-lg text-sm">1. Mylar Bags:</span>{" "}
              5,000–10,000 units for custom printing. <br />{" "}
              <span className="text-headingColor lg:text-lg text-sm">2.Glass Jars:</span>{" "}
              3,000–5,000 units for custom branding. <br />{" "}
              <span className="text-headingColor lg:text-lg text-sm">3.Cartridges:</span>{" "}
              2,000–5,000 units. <br />{" "}
            </p>
          </div>
          {/* This is the Retail and Fashion */}
          <div className="mt-[23px]">
            <h1 className="text-headingColor text-2xl font-medium">
              4. Retail and Fashion
            </h1>
            <p className="text-headingColor text-lg font-medium mt-1">
              Packaging Options:
            </p>
            {/* This is the Paper Packaging: div */}
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Paper Bags:
                </li>
              </ul>
              - Custom “Thank You” bags with handles. <br /> - Luxury shopping
              bags with glossy or matte finishes
            </p>
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Plastic Bags:
                </li>
              </ul>
              T-shirt bags, die-cut handle bags.
            </p>
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Boxes:
                </li>
              </ul>
              Folding cartons, rigid boxes for premium packaging.
            </p>
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  MOQ Ranges:
                </li>
              </ul>
              <span className="text-headingColor lg:text-lg text-sm">1.Paper Bags:</span>{" "}
              500–5,000 units. <br />{" "}
              <span className="text-headingColor lg:text-lg text-sm">2.Plastic Bags:</span>{" "}
              2,000–10,000 units. <br />{" "}
              <span className="text-headingColor lg:text-lg text-sm">3.Boxes:</span>{" "}
              1,000–3,000 units for custom designs. <br />{" "}
            </p>
          </div>
          {/* This is the Pharmaceutical and Personal Care */}
          <div className="mt-[23px]">
            <h1 className="text-headingColor text-2xl font-medium">
              5. Pharmaceutical and Personal Care
            </h1>
            <p className="text-headingColor text-lg font-medium mt-1">
              Packaging Options:
            </p>
            {/* This is the Paper Packaging: div */}
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Glass:
                </li>
              </ul>
              Dropper bottles, vials, and jars.
            </p>
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Plastic:
                </li>
              </ul>
              - PET bottles for lotions and shampoos. <br /> - Airless pump
              containers.
            </p>

            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  Accessories:
                </li>
              </ul>
              Child-resistant caps, applicators, and pumps.
            </p>
            <p className="mt-[9px] leading-[170%] text-navbarColor">
              <ul>
                <li className="black-circle ml-5 text-headingColor mt-[9px]">
                  MOQ Ranges:
                </li>
              </ul>
              <span className="text-headingColor lg:text-lg text-sm">1.Glass:</span>{" "}
              5,000–10,000 units. <br />{" "}
              <span className="text-headingColor lg:text-lg text-sm">2.Plastic:</span>{" "}
              3,000–5,000 units. <br />{" "}
              <span className="text-headingColor lg:text-lg text-sm">3.Accessories:</span>{" "}
              1,000+ for customization. <br />{" "}
            </p>
          </div>
        </div>
        {/* This is the second section */}
        <div className="rounded-[20px] border border-[#F0F0F0] lg:py-12 py-5 lg:px-12 px-5 mt-12 mx-3 lg:mx-5 xlg:mx-10 mb-10 lg:mb-0">
          <h1 className="xl:text-[28px] text-2xl text-headingColor font-medium">
            Material-Specific Information
          </h1>
          {/* This is the Glass */}
          <div className="mt-[23px]">
            <h1 className="text-headingColor lg:text-2xl text-lg font-medium">
              1. Glass
            </h1>
            {/* This is the Glass Bottles div */}
            <p className="lg:mt-5 mt-2 md:mt-4 text-navbarColor xl:text-lg md:text-base text-sm lg:leading-[170%] leading-6">
              - Offers a premium feel, excellent for cosmetics, perfumes, and
              food products. <br /> - Customizations: Tinting, frosting,
              metallic coatings. <br /> - MOQs: 3,000–10,000 depending on design
              complexity.
            </p>
          </div>
          {/* This is the Plastic */}
          <div className="mt-[23px]">
            <h1 className="text-headingColor lg:text-2xl text-lg font-medium">
              2. Plastic
            </h1>
            {/* This is the Glass Bottles div */}
            <p className="lg:mt-5 mt-2 md:mt-4 text-navbarColor xl:text-lg md:text-base text-sm lg:leading-[170%] leading-6">
              - Lightweight and versatile, ideal for retail, food, and personal
              care. <br /> - Options: HDPE, LDPE, PET, and biodegradable
              plastics. <br /> - MOQs: 2,000–10,000.
            </p>
          </div>
          {/* This is the Paper */}
          <div className="mt-[23px]">
            <h1 className="text-headingColor lg:text-2xl text-lg font-medium">
              3. Paper
            </h1>
            {/* This is the Glass Bottles div */}
            <p className="lg:mt-5 mt-2 md:mt-4 text-navbarColor xl:text-lg md:text-base text-sm lg:leading-[170%] leading-6">
              - Eco-friendly, recyclable, and widely customizable. <br /> -
              Options: Kraft paper, coated and uncoated finishes. <br /> - MOQs:
              500–5,000.
            </p>
            {/* Other guideline */}
          </div>

          {/* This is the other guideline  */}
          <h1 className="xl:text-[28px] text-2xl text-headingColor font-medium mt-10">
            Order Guidelines
          </h1>
          {/* This is the Customization Options */}
          <div className="mt-[23px]">
            <h1 className="text-headingColor lg:text-2xl text-lg font-medium">
              1. Customization Options
            </h1>
            <p className="lg:mt-5 mt-2 md:mt-4 text-navbarColor xl:text-lg md:text-base text-sm lg:leading-[170%] leading-6">
              - Artwork, dimensions, and materials. <br /> - Clients must upload
              design files or request custom design assistance.
            </p>
          </div>
          {/* This is the Trial Quantities */}
          <div className="mt-[23px]">
            <h1 className="text-headingColor lg:text-2xl text-lg font-medium">
              2. Trial Quantities
            </h1>
            <p className="lg:mt-5 mt-2 md:mt-4 text-navbarColor xl:text-lg md:text-base text-sm lg:leading-[170%] leading-6">
              - Small MOQs available for testing markets or new products.
            </p>
          </div>
          {/* This is the Lead Times */}
          <div className="mt-[23px]">
            <h1 className="text-headingColor lg:text-2xl text-lg font-medium">
              3. Lead Times
            </h1>
            {/* This is the Glass Bottles div */}
            <p className="lg:mt-5 mt-2 md:mt-4 text-navbarColor xl:text-lg md:text-base text-sm lg:leading-[170%] leading-6">
              - Typically 30–60 days depending on complexity and supplier.
            </p>
            <p className="text-navbarColor lg:text-lg text-base mt-5">
              <span className="text-headingColor lg:text-lg text-base font-medium">
                Note:
              </span>{" "}
              Final MOQs may vary depending on specific supplier capabilities
              and customer requirements.
            </p>
          </div>
        </div>
        {/* This ist the third section */}
        <div className="rounded-[20px] border border-[#F0F0F0] lg:py-12 py-5 lg:px-12 px-5 mt-12 mx-3 lg:mx-5 xlg:mx-10 mb-10 lg:mb-0">
          <h1 className="xl:text-[28px] text-2xl text-headingColor font-medium">
            Request a Quote
          </h1>
          <p className="text-navbarColor lg:text-lg lg:mt-9 mt-5 text-base">
            For all inquiries, please use the order form to specify:
          </p>
          <div className="lg:mt-9 mt-5 gap-y-[9px] flex flex-col">
            <p className="text-headingColor lg:text-xl text-sm md:text-base">
              1. Product type and industry
            </p>
            <p className="text-headingColor  lg:text-xl text-sm md:text-base">
              2. Desired material and customization options.
            </p>
            <p className="text-headingColor lg:text-xl text-sm md:text-base">
              3. Approximate order quantity (consider trial options).
            </p>
            <p className="text-headingColor  lg:text-xl text-sm md:text-base">
              4. Upload design files or request assistance.
            </p>
          </div>
        </div>
      </div>
      {/* Need help? */}
      <h1 className="text-center lg:mt-12 mt-6 lg:mb-[120px] mb-14 text-navbarColor md:text-xl text-base px-3">
        <span className="text-headingColor md:text-xl text-base font-semibold ">
          Need help?
        </span>{" "}
        Our team is ready to guide you through the process.
      </h1>
    </section>
  );
};

export default ProductGuidePage;
