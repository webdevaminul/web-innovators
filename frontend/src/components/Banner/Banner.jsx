import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import bannerImage from "../../assets/banner.jpg";

const cardData = [
  {
    id: 1,
    title: "HSC 26",
    description: "Online Batch (Physics, Chemistry, Math, Biology)",
    details: "12 live classes per week",
    img: "https://via.placeholder.com/300x150",
  },
  {
    id: 2,
    title: "HSC 26",
    description: "Online Batch (Bangla, English, Information and Communication Technology)",
    details: "5 live classes per week",
    img: "https://via.placeholder.com/300x150",
  },
  {
    id: 3,
    title: "HSC 25",
    description: "Online Batch (Physics, Chemistry, Math, Biology)",
    details: "10 live classes per week",
    img: "https://via.placeholder.com/300x150",
  },
  {
    id: 4,
    title: "HSC 24",
    description: "Online Batch (Physics, Chemistry, Math, Biology)",
    details: "8 live classes per week",
    img: "https://via.placeholder.com/300x150",
  },
  {
    id: 5,
    title: "SSC 25",
    description: "Online Batch (Physics, Chemistry, Math, Biology)",
    details: "7 live classes per week",
    img: "https://via.placeholder.com/300x150",
  },
  {
    id: 6,
    title: "SSC 24",
    description: "Online Batch (Physics, Chemistry, Math, Biology)",
    details: "6 live classes per week",
    img: "./banner.jpg",
  },
];

const Banner = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <section
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="bg-cover bg-center bg-no-repeat px-3"
    >
      <section className="relative w-full md:min-h-[calc(100vh-3.8rem)] container mx-auto flex flex-col justify-evenly gap-4 font-bai">
        {/* Left Side Text */}
        <div className="rounded-lg max-w-2xl font-roboto mt-10 md:mt-0">
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-extrabold leading-relaxed md:leading-[5rem] text-textWhite">
            Skills Development <br /> Online Batch 2024
          </h2>
          <p className="text-sm sm:text-xl md:text-xl text-textWhite">
            100% preparation of complete syllabus with years of experienced teachers!
          </p>
        </div>

        {/* Cards below the text */}
        <div className="grid grid-cols-12 gap-3 md:gap-4 w-full max-w-6xl mb-10 md:mb-0">
          {cardData?.map((card) => (
            <div
              key={card.id}
              className="bg-[#121212] col-span-6 sm:col-span-4 md:col-span-2 p-2 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer border border-gray-50/5"
              onClick={() => openModal(card)}
            >
              <div className="pt-3 pb-3 pl-2 pr-2 font-roboto">
                <h3 className="text-xl font-bold flex items-center justify-between mb-2 text-textWhite">
                  {card.title} Batch
                  <FaArrowRight className="ml-2 text-secondary" />
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCard && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full relative shadow-lg">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-black font-bold text-2xl"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
              <p className="text-gray-700">{selectedCard.description}</p>
              <p className="text-gray-500 mt-2">{selectedCard.details}</p>
              <button
                onClick={closeModal}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg"
              >
                View Details
              </button>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default Banner;
