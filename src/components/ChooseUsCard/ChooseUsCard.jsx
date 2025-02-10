const ChooseUsCard = ({ imgSrc, title, description }) => {
  return (
    <div className="max-w-[473px] rounded-[20px] bg-[#FAFBFC] pt-[71.5px] pb-16 px-[43px] text-center flex flex-col items-center overflow-hidden transition-all duration-300 hover:scale-105">
      <img
        className="h-16 w-16 object-cover"
        src={imgSrc}
        alt="Choose Us Logo"
      />
      <h1 className="text-headingColor text-xl font-semibold max-w-[370px] mt-7">
        {title}
      </h1>
      <p className="text-navbarColor max-w-[387px] leading-9 mt-4">
        {description}
      </p>
    </div>
  );
};

export default ChooseUsCard;
