import Title from "../../utils/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Import required modules
import { Autoplay } from "swiper/modules";
import DiscountedCard from "./DiscountedCard/DiscountedCard";

const DiscountedSection = () => {
  const courses = [
    {
      id: 1,
      name: "Mastering Web Development",
      oldPrice: 199,
      newPrice: 99,
      instructorName: "John Doe",
    },
    {
      id: 2,
      name: "Advanced Data Analysis with Python",
      oldPrice: 249,
      newPrice: 149,
      instructorName: "Jane Smith",
    },
    {
      id: 3,
      name: "Digital Marketing & SEO Masterclass",
      oldPrice: 179,
      newPrice: 89,
      instructorName: "Mark Johnson",
    },
    {
      id: 4,
      name: "Project Management Professional (PMP) Prep",
      oldPrice: 299,
      newPrice: 199,
      instructorName: "Sarah Lee",
    },
    {
      id: 5,
      name: "Project Management Professional (PMP) Prep",
      oldPrice: 299,
      newPrice: 199,
      instructorName: "Sarah Lee",
    },
    {
      id: 6,
      name: "Project Management Professional (PMP) Prep",
      oldPrice: 299,
      newPrice: 199,
      instructorName: "Sarah Lee",
    },
  ];

  return (
    <>
      <section className="container mx-auto">
        <Title
          title={"Discounted Courses"}
          subTitle={"Get Expert Knowledge for Less, Enroll in Our Discounted Courses Today!"}
        />
        <Swiper
          watchSlidesProgress={true}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper container mx-auto"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id} className="w-[9rem]">
              <DiscountedCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default DiscountedSection;
