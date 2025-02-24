/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  return (
    <section>
      <div className="xl:mt-12 lg:hover:bg-[#E0E0E0] hover:shadow-custom_shadow ease-out duration-300 xl:p-[10px] p-4 hover:rounded-xl group">
        <img
          className="xl:w-[347px] xl:h-[360px] object-cover transition-transform ease-out duration-300 transform group-hover:scale-95 rounded-2xl"
          src={`${import.meta.env.VITE_SITE_URL}/${data?.image}`}
          alt=""
        />
        <h2 className="text-headingColor xl:text-xl text-lg font-semibold px-2 xl:mt-5 my-[10px] xl:h-[50px]">
          {data?.title}
        </h2>
      </div>
    </section>
  );
};

export default Card;
