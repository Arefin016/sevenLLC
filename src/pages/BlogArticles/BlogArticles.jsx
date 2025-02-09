import BlogCard from "../../components/BlogCard/BlogCard";
import blogCardPic from "../../assets/images/blogCardPic/blogCardPic.png";
import blogCardPic2 from "../../assets/images/blogCardPic/blogCardPic2.png";
import blogCardPic3 from "../../assets/images/blogCardPic/blogCardPic3.png";
import blogCardPic4 from "../../assets/images/blogCardPic/blogCardPic4.png";
import Button from "../../components/Button/Button";
import { ViewAllSvg } from "../../components/SvgContainer/SvgConainer";
import { Link } from "react-router-dom";

const BlogArticles = () => {
  const blogPosts = [
    {
      imageSrc: blogCardPic,
      date: "March 01, 2024",
      title: "Discover the Latest in Packaging Innovation",
      link: "/blog/packaging-innovation",
    },
    {
      imageSrc: blogCardPic2,
      date: "March 05, 2024",
      title: "Trending Topics in Packaging",
      link: "/blog/sustainable-packaging",
    },
    {
      imageSrc: blogCardPic3,
      date: "March 10, 2024",
      title: "Our Packaging Solutions in Action",
      link: "/blog/custom-packaging-trends",
    },
    {
      imageSrc: blogCardPic4,
      date: "March 10, 2024",
      title: "Stay Updated with Packaging Insights",
      link: "/blog/custom-packaging-trends",
    },
  ];

  return (
    <section className="mt-[165px]">
      <div className="container mx-auto">
        {/* This is the blog and articles */}
        <div className="flex justify-center">
          <h2 className="text-headingColor text-5xl font-bold">
            Blog & Articles
          </h2>
        </div>
        {/* This is the card section */}
        <div className="grid grid-cols-2 gap-6 gap-y-[60px] mt-[60px]">
          {blogPosts?.map((post, index) => (
            <BlogCard
              key={index}
              imageSrc={post.imageSrc}
              date={post.date}
              title={post.title}
              link={post.link}
            />
          ))}
        </div>
        {/*  */}
        <div className="flex justify-center mt-[60px]">
          <Link to={"/"}>
            <button className="w-[332px] justify-center gap-2 text-[#FFF] font-semibold border text-base bg-buttonColor px-8 py-4 rounded-[60px] flex hover:bg-white hover:text-buttonColor hover:border-buttonColor ease-in-out duration-150">
              View All <ViewAllSvg />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
