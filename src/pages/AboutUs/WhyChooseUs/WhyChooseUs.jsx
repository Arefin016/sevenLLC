import ChooseUsCard from "../../../components/ChooseUsCard/ChooseUsCard";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const WhyChooseUs = () => {
  const axiosPublic = useAxiosPublic();

  const whyChooseUsData = async () => {
    try {
      const response = await axiosPublic.get("/api/about-us");
      return response.data;
    } catch (error) {
      console.error("Error fetching card data:", error.message || error);
      throw new Error("Failed to fetch card data");
    }
  };

  const { data: WhyChooseUsData } = useQuery({
    queryKey: ["WhyChooseUsData"],
    queryFn: whyChooseUsData,
  });

  // console.log(WhyChooseUsData?.data?.WHY_CHOOSE_ITEMS);

  const remainder = WhyChooseUsData?.data?.WHY_CHOOSE_ITEMS.length % 3;
  const fullRowsCount =
    Math.floor(WhyChooseUsData?.data?.WHY_CHOOSE_ITEMS.length / 3) * 3;

  return (
    <section className="mt-[158px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center text-center">
          <h2 className="headingStyle">Why Choose 777Bags?</h2>
          <p className="subHeadingStyle max-w-[732px] mx-auto mt-6">
            We’re more than just a packaging provider—we’re a partner in your
            success. Here’s what sets us apart:
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[30px] mt-[52px] ">
          {WhyChooseUsData?.data?.WHY_CHOOSE_ITEMS.slice(0, fullRowsCount).map(
            (card, index) => (
              <ChooseUsCard
                key={index}
                imgSrc={`${import.meta.env.VITE_SITE_URL}/${card.image_url}`}
                title={card.title}
                description={card.description}
              />
            )
          )}

          {/* This is the card section */}
          {remainder > 0 && (
            <div className="col-span-3 flex justify-center gap-[30px]">
              {WhyChooseUsData?.data?.WHY_CHOOSE_ITEMS.slice(fullRowsCount).map(
                (item, index) => (
                  <ChooseUsCard
                    key={fullRowsCount + index}
                    imgSrc={`${import.meta.env.VITE_SITE_URL}/${
                      item.image_url
                    }`}
                    title={item.title}
                    description={item.description}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
