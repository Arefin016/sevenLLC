import { Link } from "react-router-dom";
import { BlogCardSVG } from "../SvgContainer/SvgConainer";

const BlogCard = ({ imageSrc, date, title, slug }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105">
        <img
          className="w-[723px] h-[361px] object-cover"
          src={imageSrc}
          alt="Blog"
        />
      </div>

      <p className="bg-buttonColor max-w-[136px] text-[#FFF] h-[31px] rounded-2xl font-bricolage px-3 py-1 absolute top-[14px] left-[14px]">
        {date}
      </p>
      <div className="flex justify-between max-w-[723px] mt-6">
        <h1 className="text-headingColor text-2xl font-bold max-w-[545px]">
          {title}
        </h1>
        <Link to={`/blogArticles/${slug}`}>
          <p className="flex gap-2 text-buttonColor text-base justify-center mt-[6px] font-bold font-bricolage">
            Read More <BlogCardSVG />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
