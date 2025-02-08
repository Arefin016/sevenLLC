const CardSecondary = ({ image, title, content,textColor  }) => {
  return (
    <div className="bg-[#FFF] max-w-[729px] shadow-custom rounded-[20px] py-[81px] px-[117.5px]">
      <div>
        <img src={image} alt={title} />
        <h1 className={`text-${textColor || 'buttonColor'} text-[40px] font-bold mt-8`}>{title}</h1>
        <p className="text-navbarColor mt-5 text-lg font-medium">{content}</p>
      </div>
    </div>
  );
};

export default CardSecondary;
