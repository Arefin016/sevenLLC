import footerLogo from "../../assets/images/logo.png";
import Button from "../../components/Button/Button";
import {
  FacebookSvg,
  InstagramSvg,
  LinkedInSvg,
  TwitterSvg,
} from "../../components/SvgContainer/SvgConainer";
import { Link } from "react-router-dom";
const links = [
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Contact Us", href: "/contactUs" },
];

const Footer = () => {
  const socialMediaLinks = [
    { name: "Facebook", icon: FacebookSvg, url: "https://www.facebook.com" },
    { name: "Twitter", icon: TwitterSvg, url: "https://www.twitter.com" },
    { name: "Instagram", icon: InstagramSvg, url: "https://www.instagram.com" },
    { name: "LinkedIn", icon: LinkedInSvg, url: "https://www.linkedin.com" },
  ];

  return (
    <section className=" mt-[30px] xlg:mt-[60px]  lg:px-10 xlg:px-0 mb-[10px] xlg:mb-[21px]">
      <div className="container">
        <div className="flex flex-col md:flex-row xl:gap-[30px] lg:gap-[100px] gap-10 md:gap-5 xlg:gap-[320px] xlg:items-center px-4 lg:px-0 xlg:px-5 xl:px-0">
          {/* This is first div */}
          <div className="w-full lg:w-[60%]">
            <Link to={"/"}>
              <img
                src={footerLogo}
                className=" w-[60] h-[50px] xlg:w-[125px] h xlg:h-[108px]"
                alt="not found"
              />
            </Link>
            <p className="max-w-[351px] mt-6 text-headingColor">
              Turning your ideas into reality with precision and speed, exactly
              when you need them.
            </p>
            {/* This is the dynamic page */}
            <div className="flex flex-col text-[14px] md:flex-row gap-2 md:gap-6 xlg:gap-12 mt-[22px]">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-headingColor text-sm hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          {/* This is second div */}
          <div className="">
            <p className="flex text-sm xlg:text-base xlg:text-right xlg:max-w-[404px]">
              Stay Up-to-Date with the Latest Social Media Strategies and
              Insights
            </p>
            <div
              className="flex md:flex-row flex-col sm:items-center md:justify-end lg:justify-start xlg:justify-end mt-[26px] gap-4 md:gap-1 lg:gap-4 
          "
            >
              <input
                className="bg-[#F0F0F0] max-h-[58px] py-[12px] md:py-3 lg:py-[14px] xl:py-4 text-[#616161] text-sm px-4 xlg:px-10 w-full md:w-[135px] lg:w-[150px] xl:w-[230px] rounded-[20px] xlg:rounded-[46px] text-left email-border"
                type="text"
                placeholder="Email"
              />
              <Link to={"/signUp"}>
                <Button text={"Sign Up"} color={"bg-buttonColor"} />
              </Link>
            </div>
          </div>
        </div>
        {/* This is the border section */}
        <div
          className="mt-[20px]"
          style={{
            borderTop: "0.5px solid #616161",
          }}
        ></div>
        {/* This is the copyright section */}
        <div className="flex flex-col-reverse gap-y-4 sm:flex-row items-center xlg:items-start justify-between mt-[30px]">
          <p className="text-navbarColor text-[15px] sm:text-base">
            © Copyright 2024, All Rights Reserved
          </p>
          <div className="flex flex-row gap-3">
            {socialMediaLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.name}
                  className="border border-buttonColor rounded-full p-2 md:p-[10px] transition-all duration-300 bg-white text-buttonColor hover:bg-buttonColor hover:text-white ease-in-out"
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
