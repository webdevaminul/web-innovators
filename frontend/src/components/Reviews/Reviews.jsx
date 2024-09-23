// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import userAvatar from "../../assets/useravatar.png";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Import required modules
import { Autoplay } from "swiper/modules";
import Title from "../../utils/title";

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
        spaceBetween={20}
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
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper container mx-auto"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="py-10">
            <div className="bg-accentOne rounded-3xl">
              <div className="relative border border-border rounded-3xl p-6 h-full flex flex-col gap-4 justify-between shadow-md">
                <div className="text-2xl text-secondary border border-secondary absolute z-10 top-3 left-10 bg-bg p-2 rounded-full">
                  <ImQuotesLeft />
                </div>

                {/* Cut message to 250 characters and show full message on hover */}
                <p
                  className="leading-relaxed border border-secondary rounded-xl h-[14rem] py-10 px-4 tooltip tooltip-top tooltip-info"
                  data-tip={review.message} // Custom DaisyUI tooltip
                >
                  {cutText(review.message, 250)}
                </p>

                <div className="flex justify-end text-secondary border border-secondary absolute bottom-[4.5rem] right-10 bg-bg p-2 rounded-full">
                  <ImQuotesRight className="text-2xl" />
                </div>

                <div className="flex items-center gap-2">
                  <figure className="w-10 h-10 rounded-full overflow-hidden border">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div>
                    <p className="font-medium">{review.userName}</p>
                    <p className="text-sm text-text/50">{review.role}</p>
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
