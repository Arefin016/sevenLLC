import CardSecondary from "../../../components/CardSecondary/CardSecondary";
import visionCardPic from "../../../assets/images/visionCardPic.png";
import missionCardPic from "../../../assets/images/missionCardPic.png";

const MissionAndVision = () => {
  const cardsData = [
    {
      image: missionCardPic,
      title: "Our Mission",
      content:
        "“To empower businesses with high-quality, personalized packaging solutions that build brands and foster lasting relationships, all delivered with exceptional customer service and unmatched professionalism.”",
      textColor: "#07A0EC",
    },
    {
      image: visionCardPic,
      title: "Our Vision",
      content:
        "“To become the go-to packaging partner for businesses across industries, known for our unwavering commitment to quality, fast turnaround times, and unparalleled customer experiences.”",
      textColor: "#FFAB99",
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
              textColor={card.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
