/* eslint-disable react/prop-types */
import RecentBlogCard from "../Cards/RecentBlogCard";

const RecentBlogs = ({ data }) => {
  return (
    <div>
      <h2 className="text-headingColor text-2xl pl-6 lg:pl-0 xl:pl-0 font-bold mb-7">
        Recent News
      </h2>
      <div className="mb-10 xl:mb-0">
        {data?.map((news, idx) => (
          <RecentBlogCard
            lastElement={idx == data.length - 1}
            key={news?.id}
            data={news}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
