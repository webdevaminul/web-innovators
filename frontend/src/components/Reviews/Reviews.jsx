// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import userAvatar from "../../assets/useravatar.png";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Reviews() {
  // Example reviews data
  const reviews = [
    {
      id: 1,
      message:
        "This course management system has made my life as a teacher so much easier! The intuitive design and smooth workflow are perfect for organizing my classes.",
      userName: "Sophia P.",
      avatar: userAvatar,
    },
    {
      id: 2,
      message:
        "The reporting tools are great for tracking student progress, and it saves me a ton of time. Highly recommend it to educators handling large classes.",
      userName: "James K.",
      avatar: userAvatar,
    },
    {
      id: 3,
      message:
        "Very efficient for remote learning. Everything from assignments to video conferencing is integrated seamlessly into the platform.",
      userName: "Emily S.",
      avatar: userAvatar,
    },
    {
      id: 4,
      message:
        "Very efficient for remote learning. Everything from assignments to video conferencing is integrated seamlessly into the platform.",
      userName: "Emma.",
      avatar: userAvatar,
    },
  ];

  return (
    <section>
      <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          // 1 slide on screens less than 640px
          640: {
            slidesPerView: 1,
          },
          // 2 slides between 640px and 1024px
          768: {
            slidesPerView: 2,
          },
          // 3 slides for screens larger than 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="m-6 h-96 ">
              <div className="border rounded-lg p-6 h-full flex flex-col gap-4 justify-between shadow-md">
                <ImQuotesLeft className="text-2xl" />
                <p className="leading-relaxed">{review.message}</p>
                <div className="flex justify-end">
                  <ImQuotesRight className="text-2xl" />
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <figure className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={review.avatar}
                      alt={`${review.userName}'s avatar`}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <p className="font-medium text-gray-900">{review.userName}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
