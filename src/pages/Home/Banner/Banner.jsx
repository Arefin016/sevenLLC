import bannerPic from "../../../assets/images/bannerpic.png";
import Button from "../../../components/Button/Button";

const Banner = () => {
  return (
    <section className="mt-[132px]">
      <div className="container mx-auto">
        <div className="flex gap-[66px]">
          {/* This is the first div */}
          <div className="w-1/2">
            <h2 className="text-[#000B1C] max-w-[707px] text-[64px] font-bold">
              Premium Custom Packaging Solutions |{" "}
              <span className="text-buttonColor">777bags.com</span>
            </h2>
            <p className="max-w-[700px] text-2xl text-navbarColor mt-5">
              At 777bags, we specialize in delivering exceptional custom
              packaging solutions for businesses across industries. Whether
              you're looking for eco-friendly bags, Mylar pouches, or custom
              printed boxes, we have options tailored to your needs.
            </p>
            <div className="mt-12">
              <Button text="Request a Quote" color="bg-buttonColor" />
            </div>
          </div>
          {/* This is the second div */}
          <div className="max-w-[703px h-[650px]">
            <img src={bannerPic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
