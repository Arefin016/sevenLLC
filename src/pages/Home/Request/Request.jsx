import requestSectionPic from "../../../assets/images/requestSectionPic.png";
import ButtonTwo from "../../../components/ButtonTwo/ButtonTwo";

const Request = () => {
  return (
    <section className="lg:mt-[150px] mt-8">
      <div
        className="lg:h-[619px] h-[370px]"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(7, 160, 236, 0.90) 0%, rgba(7, 160, 236, 0.90) 100%), url(${requestSectionPic}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* This is the content inside the background image */}
        <div className="flex flex-col items-center lg:pt-[136px] lg:pb-[150px] pt-5 px-3">
          <h2 className="text-[#FFF] lg:text-5xl text-2xl mt-5 lg:mt-0 font-bold">
            Request a Quote Today
          </h2>
          <p className="mt-6 max-w-[639px] lg:text-[22px] text-base px-4 lg:px-0 text-center text-[#FAFBFC] lg:leading-[37.4px]">
            Upload your design to get a quote today or let us help you create a
            product tailored to your business needs!
          </p>
          {/* This is button section */}
          <div className="lg:mt-12 mt-7 md:mt-8 flex flex-col gap-6">
            <ButtonTwo text={"Upload Your Design"} />
            <ButtonTwo text={"I need a design"} variant="transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Request;
