/* eslint-disable react/prop-types */
const CardSecondary = ({ data, textColor }) => {
  return (
    <div className="bg-[#FFF] lg:max-w-[729px] shadow-custom rounded-[20px] xlg:py-[81px] xlg:px-[117.5px] p-4 lg:p-4">
      <div>
        <img
          className="xlg:w-[116px] xlg:h-[97px] object-cover"
          src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
          alt={data?.title}
        />
        <h1
          className="xlg:text-[40px] text-xl md:text-2xl font-bold lg:mt-8 mt-4"
          style={{ color: textColor }}
        >
          {data?.title}
        </h1>
        <p className="text-navbarColor mt-5 xlg:text-lg text-sm md:text-base font-medium">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default CardSecondary;
