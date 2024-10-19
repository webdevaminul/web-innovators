import { IoLanguage } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../utils/Title";
import { FaBusinessTime, FaCamera, FaDumbbell } from "react-icons/fa";

const categories = [
  {
    name: "Language",
    courses: "10 Courses",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-400",
    icon: IoLanguage, // Use the IoLanguage icon
  },
  {
    name: "Design",
    courses: "10 Courses",
    bgColor: "bg-green-100",
    iconColor: "text-green-400",
    icon: IoLanguage, // You can replace this with another icon if needed
  },
  {
    name: "Development",
    courses: "10 Courses",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-400",
    icon: IoLanguage,
  },
  {
    name: "Marketing",
    courses: "10 Courses",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-400",
    icon: IoLanguage,
  },
  {
    name: "Photography",
    courses: "10 Courses",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-400",
    icon: FaCamera,
  },
  {
    name: "Business",
    courses: "10 Courses",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-400",
    icon: FaBusinessTime,
  },
  {
    name: "Fitness",
    courses: "10 Courses",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-400",
    icon: FaDumbbell,
  },
  {
    name: "Videography",
    courses: "10 Courses",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-400",
    icon: IoLanguage, // Replace with the appropriate icon if needed
  },
];

export default function Categories() {
  const navigate = useNavigate();
  const handleCategory = (cate) => {
    navigate("/all-courses");
    console.log(cate);
  };
  return (
    <section className="p-5">
      <Title
        title={"Explore Our Courses"}
        subTitle={"Welcome to our diverse and dynamic course catalog"}
      />

      <div className="grid grid-cols-4 gap-5">
        {categories.map((category, index) => (
          <Link
            onClick={() => handleCategory(category.name)}
            key={index}
            className="border border-borderLight hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3"
          >
            <div className={`${category.bgColor} rounded-full p-4`}>
              {/* Render the icon dynamically */}
              <category.icon className={`text-5xl ${category.iconColor}`} />
            </div>
            <div>
              <h2 className="font-bold mb-2 text-lg">{category.name}</h2>
              <p>{category.courses}</p>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="text-center my-10">
        {" "}
        Here The Break i can remove it with Aminul bhai&apos;s permission{" "}
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {/* cat 1 */}
        <Link className="border border-borderLight hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-pink-100 rounded-full p-4 ">
            <IoLanguage className="text-5xl text-pink-400" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Language</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        {/* cat 2 */}
        <Link className="border border-borderLight hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-green-100 rounded-full p-4 ">
            <IoLanguage className="text-5xl text-green-400" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Design</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        {/* cat 3 */}
        <Link className="border border-borderLight hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-purple-50 rounded-full p-4 ">
            <IoLanguage className="text-5xl" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Development</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        {/* cat 4 */}
        <Link className="border border-borderLight hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-purple-50 rounded-full p-4 ">
            <IoLanguage className="text-5xl" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Marketing</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        {/* cat 5 */}
        <Link className="border border-borderLight hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-purple-50 rounded-full p-4 ">
            <IoLanguage className="text-5xl" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Photography</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        {/* cat 6 */}
        <Link className="border border-borderLight hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-purple-50 rounded-full p-4 ">
            <IoLanguage className="text-5xl" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Business</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        <Link className="border border-borderLight hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-purple-50 rounded-full p-4 ">
            <IoLanguage className="text-5xl" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Fitness</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        <Link className="border border-borderLight hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-purple-50 rounded-full p-4 ">
            <IoLanguage className="text-5xl" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Videography</h2>
            <p>10 Courses</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
