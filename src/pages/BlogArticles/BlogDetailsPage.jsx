import { useParams } from "react-router-dom";
import { blogPosts } from "../../components/DummyData/DummyData";
import {
  BorderSvg,
  BottomBorderSvg,
  DateSvg,
  HumanSvg,
  LineSvg,
  SubjectSvg,
} from "../../components/SvgContainer/SvgConainer";
import reviewTag from "../../assets/images/reviewSection.png";

import breakingPic1 from "../../assets/images/breakingPic/breakingPic1.png";
import breakingPic2 from "../../assets/images/breakingPic/breakingPic2.png";
import breakingPic3 from "../../assets/images/breakingPic/breakingPic3.png";

const BlogDetailsPage = () => {
  const { slug } = useParams();
  console.log(slug);

  const blog = blogPosts?.find((post) => post.slug === slug);
  console.log(blog);

  const breakingNews = [
    {
      image: breakingPic1,
      date: "March 01, 2024",
      title: "Discover the Latest in Packaging Innovation",
    },
    {
      image: breakingPic2,
      date: "Feb 8, 2024",
      title: "Trending Topics in Packaging",
    },
    {
      image: breakingPic3,
      date: "Feb 8, 2024",
      title: "Our Packaging Solutions in Action",
    },
  ];

  return (
    <section className="px-[210px] py-[150px]">
      <div className="flex gap-[120px]">
        {/* This is the left side section */}
        <div className="w-[70%]">
          <img
            className="w-[972px] h-[596px] rounded-2xl object-cover"
            src={blog?.imageSrc}
            alt=""
          />
          <div className="flex gap-[90px] mt-7">
            {/* This is the date div */}
            <div className="flex gap-3 items-center">
              <DateSvg />
              <div>
                <h1 className="text-buttonColor font-semibold">Date:</h1>
                <p className="text-navbarColor">{blog?.date}</p>
              </div>
            </div>
            <LineSvg />
            {/* This is the human div */}
            <div className="flex gap-3 items-center">
              <HumanSvg />
              <div>
                <h1 className="text-buttonColor font-semibold">AUTHOR NAME</h1>
                <p className="text-navbarColor">{blog?.author}</p>
              </div>
            </div>
            <LineSvg />
            {/* This is the subject div */}
            <div className="flex gap-3 items-center">
              <SubjectSvg />
              <div>
                <h1 className="text-buttonColor font-semibold">SUBJECT</h1>
                <p className="text-navbarColor">{blog?.subject}</p>
              </div>
            </div>
          </div>
          {/* This is the border line */}
          <div className="mt-7">
            <BorderSvg />
          </div>
          {/* This is the title section */}
          <h1 className="mt-9 text-headingColor text-[32px] font-bold">
            {blog?.title}
          </h1>
          <p className="mt-[23px] text-navbarColor leading-[30.6px]">
            {blog?.desc}
          </p>
          {/* This is the review section */}
          <div className="bg-[#FAFBFC] max-w-[973px] shadow-customCard flex flex-col justify-center items-center text-center mt-12 border-l-[6px] border-buttonColor">
            <img className="mt-[45px]" src={reviewTag} alt="" />
            <h1 className="max-w-[668px] mt-6 text-[28px] font-medium">
              Packaging is the first impression of your <br /> product— make it
              count. Together, let’s shape <br /> the future of packaging!
            </h1>
            <h1 className="text-buttonColor text-lg font-bold mt-6 mb-[45px]">
              Albeniz Kerry
            </h1>
          </div>
          <div className="mt-12">
            <h1 className="text-navbarColor text-lg">{blog?.descPrimary}</h1>
          </div>
        </div>
        {/* This is the right side section */}
        <div>
          <h2 className="text-headingColor text-2xl font-bold mb-7">
            Recent News
          </h2>
          <div>
            {breakingNews?.map((news, index) => (
              <div key={index}>
                {/* Card div */}
                <div className="flex items-center gap-5">
                  <img src={news?.image} alt={news.title} />
                  <div>
                    <p className="text-navbarColor">{news?.date}</p>
                    <h1 className="max-w-[557px] mt-3 text-headingColor text-base font-bold">
                      {news?.title}
                    </h1>
                  </div>
                </div>
                {/* Border SVG */}
                {index !== breakingNews.length - 1 && (
                  <div className="my-[30px]">
                    <BottomBorderSvg />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
