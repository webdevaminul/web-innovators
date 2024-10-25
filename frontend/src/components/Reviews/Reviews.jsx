// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Import required modules
import { Autoplay } from "swiper/modules";
import Title from "../../utils/Title";

// Function to cut text to 250 characters
const cutText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export default function Reviews() {
  // Example reviews data
  const reviews = [
    {
      id: 1,
      message:
        "This course management system has made my life as a teacher so much easier! The intuitive design and smooth workflow are perfect for organizing my classes.",
      userName: "Sophia P.",
      role: "Student",
    },
    {
      id: 2,
      message:
        "The reporting tools are great for tracking student progress, and it saves me a ton of time. Highly recommend it to educators handling large classes.",
      userName: "James K.",
      role: "Teacher",
    },
    {
      id: 3,
      message:
        "Very efficient for remote learning. Everything from assignments to video conferencing is integrated seamlessly into the platform.",
      userName: "Emily S.",
      role: "Student",
    },
    {
      id: 4,
      message:
        "Very efficient for remote learning. Everything from assignments to video conferencing is integrated seamlessly into the platform. Very efficient for remote learning. Everything from assignments to video conferencing is integrated seamlessly into the platform. Very efficient for remote learning. Everything from assignments to video conferencing is integrated seamlessly into the platform.",
      userName: "Emma.",
      role: "Student",
    },
  ];

  return (
    <section>
      <Title
        title={"Our Reviews"}
        subTitle={
          "Grateful for the Trust of Teachers and Students, Empowering Every Step of Their Learning Journey."
        }
      />

      <Swiper
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="p-2 md:py-4 lg:py-5">
            <div className="bg-backgroundShadeOne rounded-2xl overflow-hidden">
              <div className="relative border border-borderLight rounded-2xl p-6 h-full flex flex-col gap-4 justify-between">
                <div className="text-2xl text-textWhite absolute z-10 top-3 left-10 bg-backgroundBlue p-2 rounded-full">
                  <ImQuotesLeft />
                </div>

                {/* Cut message to 250 characters */}
                <p className="leading-relaxed border rounded border-blue-500 h-[14rem] py-10 px-4">
                  {cutText(review.message, 200)}
                </p>

                <div className="flex justify-end text-textWhite border border-borderLight absolute bottom-[4.5rem] right-10 bg-backgroundBlue p-2 rounded-full">
                  <ImQuotesRight className="text-2xl" />
                </div>

                <div className="flex items-center gap-2">
                  <figure className="w-10 h-10 rounded-full overflow-hidden border border-blue-500">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div>
                    <p className="font-medium">{review.userName}</p>
                    <p className="text-sm text-textPrimary/50">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
