import footerLogo from "../../assets/images/logo.png";
import Button from "../../components/Button/Button";
import socialLogo from "../../assets/images/Social Media.png";
import {
  FacebookSvg,
  InstagramSvg,
  LinkedInSvg,
  TwitterSvg,
} from "../../components/SvgContainer/SvgConainer";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Returns & Refunds", href: "/returns" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialMediaLinks = [
    { name: "Facebook", icon: FacebookSvg, url: "https://www.facebook.com" },
    { name: "Twitter", icon: TwitterSvg, url: "https://www.twitter.com" },
    { name: "Instagram", icon: InstagramSvg, url: "https://www.instagram.com" },
    { name: "LinkedIn", icon: LinkedInSvg, url: "https://www.linkedin.com" },
  ];

  return (
    <section className="mt-[60px] mb-[21px]">
      <div className="container">
        <div className="flex gap-[320px] items-center">
          {/* This is first div */}
          <div className="">
            <Link to={"/"}>
              <img src={footerLogo} alt="" />
            </Link>
            <p className="max-w-[351px] mt-6 text-headingColor">
              Turning your ideas into reality with precision and speed, exactly
              when you need them.
            </p>
            {/* This is the dynamic page */}
            <div className="flex gap-12 mt-[22px]">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-headingColor hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          {/* This is second div */}
          <div className="">
            <p className="flex text-right max-w-[404px]">
              Stay Up-to-Date with the Latest Social Media Strategies and
              Insights
            </p>
            <div
              className="flex justify-end mt-[26px] gap-4
          "
            >
              <input
                className="bg-[#F0F0F0] py-4 px-10 w-[230px] rounded-[46px] text-left email-border"
                type="text"
                placeholder="Email"
              />
              <Button text={"Sign Up"} color={"bg-buttonColor"} />
              <div className=""></div>
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
        <div className="flex justify-between mt-[30px]">
          <p className="text-navbarColor">
            © Copyright 2024, All Rights Reserved
          </p>
          <div className="flex gap-3">
            {socialMediaLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.name}
                  className="border border-buttonColor rounded-full p-[10px] transition-all duration-300 bg-white text-buttonColor hover:bg-buttonColor hover:text-white ease-in-out"
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
