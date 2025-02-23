/* eslint-disable react/prop-types */
import CardSecondary from "@/components/CardSecondary/CardSecondary";

const MissionAndVision = ({ mission, vision }) => {
  return (
    <section className="bg-buttonColor w-full py-10">
      <div className="xl:py-[100px] xl:px-[224px]">
        <div className="flex flex-col lg:flex-row md:gap-[38px] gap-7 px-5 md:px-10 lg:px-10">
          <CardSecondary data={mission} textColor={"#07A0EC"} />
          <CardSecondary data={vision} textColor={"#FFAB99"} />
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
