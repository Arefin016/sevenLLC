import { Link } from "react-router-dom";
import { UpArrowSvg } from "../SvgContainer/SvgConainer";
const ButtonTwo = ({ text, variant }) => {
  return (
    <Link to={"/"}>
      <button
        className={`${
          variant == "transparent"
            ? "bg-transparent text-white hover:bg-white hover:text-buttonColor min-w-[262px] xl:text-base text-sm"
            : "bg-[#FFF] text-buttonColor hover:bg-transparent xl:text-base text-sm"
        } rounded-[60px] xl:px-8 px-6 flex gap-2 justify-center items-center xl:py-4 py-2 text-base xl:font-semibold font-medium border hover:border-[#FFF] hover:text-[#FFF] ease-in-out duration-150 group min-w-[262px]`}
      >
        {text}
        <UpArrowSvg variant={variant} />
      </button>
    </Link>
  );
};

export default ButtonTwo;
