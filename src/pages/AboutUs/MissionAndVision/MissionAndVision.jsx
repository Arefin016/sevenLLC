import CardSecondary from "../../../components/CardSecondary/CardSecondary";
import visionCardPic from "../../../assets/images/visionCardPic.png";
import missionCardPic from "../../../assets/images/missionCardPic.png";

const MissionAndVision = () => {
  const cardsData = [
    {
      image: missionCardPic,
      title: "Our Mission",
      content:
        "To empower businesses with high-quality, personalized packaging solutions that build brands and foster lasting relationships.",
    },
    {
      image: visionCardPic,
      title: "Our Vision",
      content:
        "To be the leading provider of innovative packaging solutions that empower businesses and elevate brands.",
    },
  ];
  return (
    <section className="bg-buttonColor w-full">
      <div className="py-[100px] px-[224px]">
        <div className="flex gap-6">
          {cardsData.map((card, index) => (
            <CardSecondary
              key={index}
              image={card.image}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
