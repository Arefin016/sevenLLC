import useAxiosPublic from "@/hooks/useAxiosPublic";
import Button from "../../../components/Button/Button";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {
  const axiosPublic = useAxiosPublic();

  const bannerData = async () => {
    try {
      const response = await axiosPublic.get("/api/home");
      return response.data;
    } catch (error) {
      console.error("Error fetching card data: ", error.message || error);
      throw new Error("Failed to fetch card data");
    }
  };

  const { isLoading, data: BannerData } = useQuery({
    queryKey: ["bannerData"],
    queryFn: bannerData,
  });

  return (
    <section className="mt-[132px]">
      <div className="container mx-auto">
        <div className="flex gap-[66px]">
          {/* This is the first div */}
          <div className="w-1/2">
            <h2 className="text-[#000B1C] max-w-[707px] text-[64px] font-bold">
              {BannerData?.data?.hero_section?.title}
            </h2>
            <p className="text-buttonColor text-[64px] font-bold">
              {BannerData?.data?.hero_section?.sub_title}
            </p>
            <p className="max-w-[700px] text-2xl text-navbarColor mt-5">
              {BannerData?.data?.hero_section?.description}
            </p>
            <div className="mt-12">
              <Button text="Request a Quote" color="bg-buttonColor" />
            </div>
          </div>
          {/* This is the second div */}
          <div className="max-w-[703px h-[650px]">
            <img
              src={`${import.meta.env.VITE_SITE_URL}/${
                BannerData?.data?.hero_section?.image_url
              }`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
