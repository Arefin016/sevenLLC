/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  return (
    <section>
      <div className="xl:mt-12 lg:hover:bg-[#E0E0E0] hover:shadow-custom_shadow ease-out duration-300 xl:p-[10px]  hover:rounded-xl group py-4">
        <img
          className="lg:w-[347px] w-[340px] md:w-[390px] mx-auto xl:h-[360px] h-[200px] object-cover transition-transform ease-out duration-300 transform group-hover:scale-95 rounded-2xl"
          src={`${import.meta.env.VITE_SITE_URL}/${data?.image}`}
          alt=""
        />
        <h2 className="text-headingColor xl:text-xl text-lg font-semibold  xl:mt-5 my-[10px] xl:h-[50px] max-w-[280px] mx-auto text-center xl:text-left">
          {data?.title}
        </h2>
      </div>
    </section>
  );
};

export default Card;
