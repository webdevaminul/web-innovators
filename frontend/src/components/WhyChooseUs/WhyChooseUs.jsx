import React from "react";
import {
  FaBell,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaGraduationCap,
  FaChartLine,
  FaBookOpen,
} from "react-icons/fa";
import sideImage from "../../assets/question_mark.png"; // Change to your image handling method if not using Next.js

const features = [
  {
    icon: <FaChalkboardTeacher className="text-green-500 text-5xl" />,
    title: "Free Demo Class",
    subtitle: "Try a free class and explore our platform.",
  },
  {
    icon: <FaChartLine className="text-purple-500 text-5xl" />,
    title: "Progress Tracking",
    subtitle: "Monitor learning with detailed reports.",
  },
  {
    icon: <FaClipboardCheck className="text-yellow-500 text-5xl" />,
    title: "Exam Management",
    subtitle: "Seamlessly create and manage exams.",
  },
  {
    icon: <FaGraduationCap className="text-red-500 text-5xl" />,
    title: "Instant Results",
    subtitle: "Access results with complete transparency.",
  },
  {
    icon: <FaBookOpen className="text-teal-500 text-5xl" />,
    title: "Course Management",
    subtitle: "Easily organize and update courses.",
  },
  {
    icon: <FaBell className="text-blue-500 text-5xl" />,
    title: "Real-Time Notifications",
    subtitle: "Get instant updates on schedules and tasks.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="p-2 md:p-4 lg:p-5 grid grid-cols-12 gap-4">
      <div className="pt-4 md:pt-6 hidden lg:block col-span-12 sm:col-span-4 rounded-2xl overflow-hidden">
        <img
          src={sideImage}
          className="bg-backgroundBlue rounded-2xl w-full h-full object-cover object-right"
        />
      </div>
      <div className="col-span-12 lg:col-span-8 grid">
        <div className="py-4 md:py-6">
          <h2 className="text-2xl md:text-4xl font-black font-bai text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-600 to-red-500">
            Why Choose Us?
          </h2>
          <p className="md:text-lg mx-auto mt-2">
            Discover the features that set our platform apart, designed for both teachers and
            students to enhance the learning experience.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-span-2 bg-backgroundShadeOne sm:col-span-1 rounded-2xl border border-borderDark p-3 md:p-4 lg:p-5 flex items-start transition-transform duration-300 transform hover:-translate-y-1"
            >
              <div className="mr-4">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
