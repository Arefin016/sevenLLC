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
        <div className="xl:py-[150px] py-8 xl:px-[221px] flex flex-col-reverse lg:flex-row lg:gap-[133px] gap-12 px-5">
          <div className="lg:w-[45%]">
            <h1 className="lg:max-w-[595px] text-[#FFF] xl:text-5xl text-2xl lg:text-3xl font-bold xl:leading-[67px] lg:leading-7">
              {title}
            </h1>
            <div className="xl:mt-9 mt-5">
              <ButtonTwo text={buttonText} />
            </div>
          </div>
          <div>
            <p className="max-w-[720px] text-[#FAFBFC] xl:text-xl text-sm md:text-base xl:leading-9 leading-6">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetterPlanet;
