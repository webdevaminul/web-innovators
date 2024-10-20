import { Link } from "react-router-dom";
import banner_image from "../../assets/banner_image.png";

const Banner = () => {
  return (
    <section className="p-5 flex gap-4 flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Left Column: Heading and Subheading */}
      <div className="flex flex-col gap-4 text-center md:text-left md:max-w-[50%]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-bai text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-red-500">
          Best Online <br /> Platform to{" "}
          <span className="bg-backgroundOrange text-textReverse px-3 rounded-3xl leading-normal font-ubuntu">
            Learn
          </span>
        </h1>
        <p className="text-justify md:text-left md:text-xl text-textPrimary font-extralight">
          Access expert-led courses across various fields and unlock your potential with engaging
          content tailored for all levels.
        </p>
        <Link to="/all-courses" className="relative p-3 font-poppins text-textWhite group md:w-fit">
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-blue-500 group-hover:bg-blue-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-blue-700 group-hover:bg-blue-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-blue-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-blue-400 -rotate-12"></span>
          <span className="relative">Explore Courses</span>
        </Link>
      </div>

      {/* Right Column: Educational Image */}
      <div className="relative grow flex items-center justify-center md:justify-end md:mr-2">
        {/* Background and Spinning Border Container */}
        <div className="relative max-w-[30rem] max-h-[34rem] p-4">
          {/* Spinning Border */}
          <div className="absolute inset-2 rounded-full border-[2rem] border-blue-500 animate-spin-infinite z-10"></div>

          {/* Background Color */}
          <div className="absolute inset-0 bg-backgroundBlue rounded-full w-full h-full"></div>

          {/* Image */}
          <img
            src={banner_image}
            className="relative w-full h-full z-30 rounded-full"
            loading="lazy"
          />

          {/* Small Circles */}
          <div className="absolute z-20 inset-0 flex flex-wrap items-center justify-center">
            <div className="bg-blue-600 rounded-full w-4 h-3 absolute top-14 left-5"></div>
            <div className="bg-blue-600 rounded-full w-2 h-2 absolute top-28 right-14"></div>
            <div className="bg-blue-600 rounded-full w-4 h-5 absolute top-4 right-28"></div>
            <div className="bg-blue-600 rounded-full w-3 h-3 absolute top-24 left-28"></div>
            <div className="bg-blue-600 rounded-full w-4 h-3 absolute bottom-14 left-10"></div>
            <div className="bg-blue-600 rounded-full w-4 h-3 absolute bottom-30 right-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
