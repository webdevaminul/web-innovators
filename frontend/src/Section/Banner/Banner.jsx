import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon

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

const BannerSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <section
      className="relative bg-cover bg-center h-screen flex flex-col items-start justify-center px-5 sm:px-10"
      style={{
        backgroundImage: "url('./banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Side Text */}
      <div className="text-white text-left mt-3 p-10 rounded-lg w-full sm:w-full md:w-3/5 lg:w-3/5 font-roboto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          6th-HSC Class Online Batch Admission is Ongoing!
        </h1>
        <p className="text-sm sm:text-xl md:text-xl mb-6">
          100% preparation of complete syllabus with years of experienced teachers!
        </p>
      </div>

      {/* Cards below the text */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 w-full max-w-6xl">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-gray-900 p-2 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => openModal(card)}
          >
            <div className="text-white pt-3 pb-3 pl-2 pr-2 font-roboto">
              <h3 className="text-xl font-bold flex items-center justify-between mb-2">
                {card.title} Batch
                <FaArrowRight className="ml-2 text-yellow-500" />
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
  );
};

export default BannerSection;
