import CardSecondary from "../../../components/CardSecondary/CardSecondary";
import visionCardPic from "../../../assets/images/visionCardPic.png";
import missionCardPic from "../../../assets/images/missionCardPic.png";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const MissionAndVision = () => {
  // const cardsData = [
  //   {
  //     image: missionCardPic,
  //     title: "Our Mission",
  //     content:
  //       "“To empower businesses with high-quality, personalized packaging solutions that build brands and foster lasting relationships, all delivered with exceptional customer service and unmatched professionalism.”",
  //     textColor: "#07A0EC",
  //   },
  //   {
  //     image: visionCardPic,
  //     title: "Our Vision",
  //     content:
  //       "“To become the go-to packaging partner for businesses across industries, known for our unwavering commitment to quality, fast turnaround times, and unparalleled customer experiences.”",
  //     textColor: "#FFAB99",
  //   },
  // ];

  const axiosPublic = useAxiosPublic();

  const ourMissionData = async () => {
    try {
      const response = await axiosPublic.get("/api/about-us");
      return response.data;
    } catch (error) {
      console.error("Error fetching card data:", error.message || error);
      throw new Error("Failed to fetch card data");
    }
  };

  const { data: OurMissionData } = useQuery({
    queryKey: ["ourMissionData"],
    queryFn: ourMissionData,
  });

  return (
    <section className="bg-buttonColor w-full">
      <div className="py-[100px] px-[224px]">
        <div className="flex gap-[38px]">
          <CardSecondary
            image={missionCardPic}
            title={OurMissionData?.data?.OUR_MISSION?.title}
            content={OurMissionData?.data?.OUR_MISSION?.description}
            textColor={"#07A0EC"}
          />
          <CardSecondary
            image={visionCardPic}
            title={OurMissionData?.data?.OUR_VISION?.title}
            content={OurMissionData?.data?.OUR_VISION?.description}
            textColor={"#FFAB99"}
          />
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
