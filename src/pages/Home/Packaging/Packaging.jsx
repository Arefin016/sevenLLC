import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";

const Packaging = () => {
  const cardData = [
    {
      imageSrc: "https://i.postimg.cc/HL7R0BwR/card1.png",
      title: "Food & Beverages",
    },
    {
      imageSrc: "https://i.postimg.cc/j5S8gcPR/Frame-2147224289.png",
      title: "Trash & Waste Management",
    },
    {
      imageSrc: "https://i.postimg.cc/tg5SNw1r/Frame-2147224289-1.png",
      title: "Industrial & Wholesale Packaging",
    },
    {
      imageSrc: "https://i.postimg.cc/5t1KvbtY/Frame-2147224289-2.png",
      title: "Health & Beauty Packaging",
    },
    {
      imageSrc: "https://i.postimg.cc/gJ7KMWGK/Frame-2147224289-3.png",
      title: "Eco Friendly",
    },
    {
      imageSrc: "https://i.postimg.cc/GmvSHHbn/Frame-2147224290.png",
      title: "Food & Beverage Packaging",
    },
    {
      imageSrc: "https://i.postimg.cc/Kv6HGnS5/Frame-2147224289-4.png",
      title: "Trash & Waste Packaging",
    },
    {
      imageSrc: "https://i.postimg.cc/Prp7nScx/Frame-2147224289-5.png",
      title: "Health & Beauty",
    },
    {
      imageSrc: "https://i.postimg.cc/pry6TCLs/Frame-2147224289-6.png",
      title: "Bamboo & Eco Friendly",
    },
    {
      imageSrc: "https://i.postimg.cc/76KRwdwC/Frame-2147224289-7.png",
      title: "Child resistant",
    },
    {
      imageSrc: "https://i.postimg.cc/bJyMXpcc/Frame-2147224289-8.png",
      title: "Food-Grade",
    },
  ];
  const remainder = cardData.length % 4;
  const fullRowsCount = Math.floor(cardData.length / 4) * 4;
  return (
    <section>
      <div className="container mx-auto">
        {/* This is the title section */}
        <div className="flex flex-col items-center">
          <h1 className="text-headingColor text-5xl font-bold max-w-[952px]">
            Packaging Solutions for Every Industry
          </h1>
          <p className="text-navbarColor mt-6 max-w-[553px]">
            No Matter the Industry, 777Bags has you covered.
          </p>
        </div>
        {/* This is the card section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Full rows */}
          {cardData.slice(0, fullRowsCount).map((card, index) => (
            <Card key={index} imageSrc={card.imageSrc} title={card.title} />
          ))}

          {/* Remainder cards - centered */}
          {remainder > 0 && (
            <div className="col-span-4 flex justify-center gap-4">
              {cardData.slice(fullRowsCount).map((card, index) => (
                <Card
                  key={fullRowsCount + index}
                  imageSrc={card.imageSrc}
                  title={card.title}
                />
              ))}
            </div>
          )}
        </div>
        {/* This is the button section */}
        <div className="flex flex-col items-center mt-12">
          <div className="border max-w-[914px] border-buttonColor py-4 px-8 rounded-[60px] text-buttonColor text-lg font-medium">
            Don’t see what you need? Fill out our form to the best of your
            ability and we’ll get you a quote!
          </div>
          <div className="mt-12">
            <Button text={"Explore All Products"} color={"bg-buttonColor"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packaging;
