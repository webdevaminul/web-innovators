import { IoLanguage } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../utils/Title";
import { FaBusinessTime, FaCamera, FaDumbbell } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { PiPaintBrushBroad } from "react-icons/pi";
import { IoRocketOutline } from "react-icons/io5";
import { RiVideoOnLine } from "react-icons/ri";

const categories = [
  {
    name: "Language",
    courses: "10 Courses",
    bgColor: "bg-pink-200",
    iconColor: "text-pink-400",
    icon: IoLanguage,
  },
  {
    name: "Design",
    courses: "10 Courses",
    bgColor: "bg-green-200",
    iconColor: "text-green-500",
    icon: PiPaintBrushBroad,
  },
  {
    name: "Development",
    courses: "10 Courses",
    bgColor: "bg-orange-200",
    iconColor: "text-orange-400",
    icon: CgWebsite,
  },
  {
    name: "Marketing",
    courses: "10 Courses",
    bgColor: "bg-yellow-200",
    iconColor: "text-yellow-500",
    icon: IoRocketOutline,
  },
  {
    name: "Photography",
    courses: "10 Courses",
    bgColor: "bg-purple-200",
    iconColor: "text-purple-400",
    icon: FaCamera,
  },
  {
    name: "Business",
    courses: "10 Courses",
    bgColor: "bg-red-200",
    iconColor: "text-red-400",
    icon: FaBusinessTime,
  },
  {
    name: "Fitness",
    courses: "10 Courses",
    bgColor: "bg-pink-200",
    iconColor: "text-pink-400",
    icon: FaDumbbell,
  },
  {
    name: "Videography",
    courses: "10 Courses",
    bgColor: "bg-blue-200",
    iconColor: "text-blue-400",
    icon: RiVideoOnLine,
  },
];

export default function Categories() {
  const navigate = useNavigate();
  const handleCategory = (category) => {
    navigate(`/all-course/${category}`);
    // console.log(category);
  };

  return (
    <section className="p-5">
      <Title
        title={"Explore Our Courses"}
        subTitle={"Welcome to our diverse and dynamic course catalog"}
      />

      <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {categories?.map((category, index) => (
          <Link
            onClick={() => handleCategory(category.name)}
            key={index}
            className="col-span-4 sm:col-span-2 lg:col-span-1 border border-borderDark bg-backgroundShadeOne hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3"
          >
            <div
              className={`${category.bgColor} rounded-full p-2 sm:p-3 md:p-4`}
            >
              {/* Render the icon dynamically */}
              <category.icon
                className={`text-3xl sm:text-4xl md:text-5xl ${category.iconColor}`}
              />
            </div>
            <div>
              <h2 className="font-bold mb-2 sm:text-lg">{category.name}</h2>
              <p>{category.courses}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
