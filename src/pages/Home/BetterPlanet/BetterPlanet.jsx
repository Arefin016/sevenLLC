/* eslint-disable react/prop-types */
import ButtonTwo from "../../../components/ButtonTwo/ButtonTwo";

const BetterPlanet = ({ data, backgroundImage }) => {
  const { title, description, buttonText, gradient } = data;
  return (
    <section className="mb-16">
      <div
        className=""
        style={{
          backgroundImage: `${gradient}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:h-[515px] lg:py-[150px] py-5 lg:px-[221.5px]">
          <div className="flex flex-col lg:flex-row lg:gap-[195px] gap-9 justify-center text-center lg:text-left px-5 lg:px-0">
            <h1 className="max-w-[595px] text-[#FFF] lg:text-5xl text-2xl font-bold lg:leading-[67px] mt-5 lg:mt-0">
              {title}
            </h1>
            <p className="lg:max-w-[720px] text-[#FAFBFC] lg:text-xl text-base lg:leading-9">
              {description}
            </p>
          </div>
          <div className="mt-12">
            <ButtonTwo text={buttonText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetterPlanet;
