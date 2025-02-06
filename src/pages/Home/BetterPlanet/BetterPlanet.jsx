import betterPlanetPic from "../../../assets/images/betterPlanetPic.png";
import Button from "../../../components/Button/Button";
import ButtonTwo from "../../../components/ButtonTwo/ButtonTwo";

const BetterPlanet = () => {
  return (
    <section className="mt-[150px] mb-16">
      <div
        className="h-[515px]"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(7, 160, 236, 0.70) 0%, rgba(7, 160, 236, 0.70) 100%), url(${betterPlanetPic}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* This is content inside the background image */}
        <div className="py-[150px] px-[221px] flex gap-[133px]">
          {/* This is the first div */}
          <div className="w-[45%]">
            <h1 className="max-w-[595px] text-[#FFF] text-5xl font-bold leading-[67px]">
              Packaging That’s Better for the Planet
            </h1>
            <div className="mt-9">
              <ButtonTwo text={"Explore Our Sustainability Practices"} />
            </div>
          </div>
          {/* This is the second div */}
          <div>
            <p className="max-w-[720px] text-[#FAFBFC] text-xl">
              We are committed to offering sustainable, recyclable, and reusable
              packaging options to reduce environmental impact. Ask us about our{" "}
              eco-friendly materials to align your packaging with your green
              goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetterPlanet;
