import footerLogo from "../../assets/images/logo.png";
import Button from "../../components/Button/Button";

const Footer = () => {
  return (
    <section className="mt-[60px] mb-[21px]">
      <div className="flex container mx-auto gap-[320px] items-center">
        {/* This is first div */}
        <div className="">
          <img src={footerLogo} alt="" />
          <p className="max-w-[351px] mt-6 text-headingColor">
            Turning your ideas into reality with precision and speed, exactly
            when you need them.
          </p>
          <div className="flex gap-12 mt-[22px]">
            <a>Terms & Conditions</a>
            <a>Returns & Refunds</a>
            <a>Privacy Policy</a>
            <a>Contact Us</a>
          </div>
        </div>
        {/* This is second div */}
        <div className="">
          <p className="flex text-right max-w-[404px]">
            Stay Up-to-Date with the Latest Social Media Strategies and Insights
          </p>
          <div
            className="flex justify-end mt-[26px] gap-4
          "
          >
            <input
              className="bg-[#F0F0F0] py-5 px-10 w-[230px] rounded-[46px] text-left"
              type="button"
              value="Email"
            />
            <Button text={"Sign Up"} color={"bg-buttonColor"} />
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
