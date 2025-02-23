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
        <div className="lg:py-[150px] py-8 lg:px-[221px] flex flex-col-reverse lg:flex-row lg:gap-[133px] gap-12 px-5">
          <div className="lg:w-[45%]">
            <h1 className="lg:max-w-[595px] text-[#FFF] lg:text-5xl text-2xl font-bold lg:leading-[67px]">
              {title}
            </h1>
            <div className="mt-9">
              <ButtonTwo text={buttonText} />
            </div>
          </div>
          <div>
            <p className="max-w-[720px] text-[#FAFBFC] lg:text-xl text-base lg:leading-9">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetterPlanet;
