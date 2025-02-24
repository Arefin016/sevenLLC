/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BottomBorderSvg } from "../SvgContainer/SvgConainer";

const RecentBlogCard = ({ data, lastElement }) => {
  return (
    <div className="">
      {/* Card div */}
      <Link
        to={`/blogArticles/${data?.slug}`}
        className="flex flex-col lg:flex-row items-center gap-5 overflow-hidden lg:transition-all lg:duration-300 lg:hover:scale-105"
      >
        <div className="lg:h-[150px] lg:w-[208px] flex-shrink-0">
          <img
            className="xl:w-full lg:w-full md:w-[700px] lg:h-full md:h-[321px] object-cover rounded-2xl px-7 lg:px-0"
            src={`${import.meta.env.VITE_SITE_URL}/${data?.image}`}
            alt={data?.title}
          />
        </div>
        <div className="px-6 md:px-0">
          <p className="text-navbarColor">{data?.created_date}</p>
          <h1 className="lg:max-w-[557px] mt-3 text-headingColor text-base font-bold">
            {data?.title}
          </h1>
        </div>
      </Link>
      {/* Border SVG */}
      {!lastElement && (
        <div className="my-[30px] px-6 md:px-7 lg:px-1">
          <BottomBorderSvg />
        </div>
      )}
    </div>
  );
};

export default RecentBlogCard;
