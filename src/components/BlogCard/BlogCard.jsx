/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BlogCardSVG } from "../SvgContainer/SvgConainer";

const BlogCard = ({ data }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="overflow-hidden rounded-2xl lg:w-[723px] w-full lg:h-[361px]">
        <img
          className="object-cover transition-all duration-300 hover:scale-105"
          src={`${import.meta.env.VITE_SITE_URL}/${data?.image}`}
          alt="Blog"
        />
      </div>

      <p className="bg-buttonColor min-w-[136px] text-[#FFF] h-[31px] rounded-2xl font-bricolage px-3 py-1 absolute top-[14px] left-[14px]">
        {data?.created_date}
      </p>
      <div className="flex gap-2 justify-between max-w-[723px] mt-6">
        <h1 className="text-headingColor text-xl lg:text-2xl font-bold lg:max-w-[545px]">
          {data?.title}
        </h1>
        <Link to={`/blogArticles/${data?.slug}`}>
          <p className="flex lg:gap-2 items-center text-buttonColor text-xs lg:text-base justify-center mt-[6px] font-bold font-bricolage">
            Read More <BlogCardSVG />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
