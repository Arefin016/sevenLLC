/* eslint-disable react/prop-types */
const ChooseUsCard = ({ data }) => {
  return (
    <div className="xl:max-w-[473px] rounded-[20px] bg-[#FAFBFC] xl:pt-[71.5px] py-5 xl:pb-16 xl:px-[43px] text-center flex flex-col items-center overflow-hidden transition-all duration-300 hover:scale-105 px-5">
      <img
        className="h-16 w-16 object-cover"
        src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
        alt="Choose Us Logo"
      />
      <h1 className="text-headingColor xl:text-xl text-base font-semibold max-w-[370px] xl:mt-7 mt-2">
        {data?.title}
      </h1>
      <p className="text-navbarColor max-w-[387px] lg:text-base text-sm lg:leading-9 mt-4">
        {data?.description}
      </p>
    </div>
  );
};

export default ChooseUsCard;
