import BlogCard from "../../components/BlogCard/BlogCard";
import { ViewAllSvg } from "../../components/SvgContainer/SvgConainer";
import { Link } from "react-router-dom";
import { blogPosts } from "../../components/DummyData/DummyData";

const BlogArticles = () => {

  return (
    <section className="pt-[165px]">
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
              imageSrc={post?.imageSrc}
              date={post?.date}
              title={post?.title}
              link={post?.link}
              slug={post?.slug}
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
