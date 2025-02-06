const Card = ({ imageSrc, title }) => {
  return (
    <section>
      <div className="mt-12">
        <img className="w-[347px] h-[360px]" src={imageSrc} alt="" />
        <h2 className="text-headingColor text-xl font-semibold mt-5">
          {title}
        </h2>
      </div>
    </section>
  );
};

export default Card;
