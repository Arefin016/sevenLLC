import BlogCard from "../../components/BlogCard/BlogCard";
import { ViewAllSvg } from "../../components/SvgContainer/SvgConainer";
import { Link } from "react-router-dom";
import { useAllBlogsQuery } from "@/hooks/cms.queries";
import Loader from "@/components/Loader/Loader";

const BlogArticles = () => {
  const { data: allBlogs, isLoading } = useAllBlogsQuery();
  console.log(allBlogs);

  // loader:
  if (isLoading) return <Loader />;

  return (
    <section className="xlg:pt-[165px]">
      <div className="container mx-auto">
        {/* This is the blog and articles */}
        <div className="flex justify-center">
          <h2 className="text-headingColor text-2xl lg:text-5xl font-bold">
            Blog & Articles
          </h2>
        </div>
        {/* This is the card section */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-y-[60px] gap-y-9 mt-5 lg:mt-[60px] justify-center">
          {allBlogs?.map((post) => (
            <BlogCard key={post?.id} data={post} />
          ))}
        </div>
        {/*  */}
        <div className="flex justify-center lg:mt-[60px] mt-8">
          <Link to={"/"}>
            <button className="w-[332px] justify-center gap-2 text-[#FFF] font-semibold border text-base bg-buttonColor px-8 lg:py-4 py-2 rounded-[60px] flex hover:bg-white hover:text-buttonColor hover:border-buttonColor ease-in-out duration-150">
              View All <ViewAllSvg />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
