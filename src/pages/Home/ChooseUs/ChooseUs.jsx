/* eslint-disable react/prop-types */
import Button from '../../../components/Button/Button';
import parse from 'html-react-parser';

const ChooseUs = ({ data }) => {
  // const location = useLocation();

  // console.log(data);

  return (
    <section className="ml-[210px] mt-[150px]">
      <div className="flex gap-[150px] items-center">
        {/* First div: Title, Bullet Points, Description, and Button */}
        <div className="w-1/2">
          {/* Conditionally render Breadcrumb */}
          {/* {showBreadcrumb && <Breadcrumb location={location} />} */}

          <h1 className="text-headingColor text-5xl font-bold max-w-[721px] leading-[67.2px]">
            {data?.title}
          </h1>

          <div className="user-descreption-wrapper mt-4">
            {parse(data?.description)}
          </div>
          {/* Button Section */}
          <div className="mt-12">
            <Button text="Learn More About 777Bags" color={'bg-buttonColor'} />
          </div>
        </div>
        {/* Second div: Image */}
        <div className="max-w-[829px] h-[710px] object-cover">
          <img
            className="rounded-tl-[80px] rounded-tr-none rounded-br-none rounded-bl-none"
            src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
            alt={data?.title}
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
