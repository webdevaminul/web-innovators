import { Link } from "react-router-dom";
import Title from "../../utils/Title";
import { IoLanguage } from "react-icons/io5";

export default function Categories() {
  return (
    <section className="p-5">
      <Title
        title={"Explore Our Courses"}
        subTitle={"Welcome to our diverse and dynamic course catalog"}
      />

      <div className="grid grid-cols-4 gap-5">
        {/* cat 1 */}
        <Link className="border border-borderPrimary hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-pink-100 rounded-full p-4 ">
            <IoLanguage className="text-5xl text-pink-400" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Language</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        {/* cat 2 */}
        <Link className="border border-borderPrimary hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-green-100 rounded-full p-4 ">
            <IoLanguage className="text-5xl text-green-400" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Design</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        {/* cat 3 */}
        <Link className="border border-borderPrimary hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-purple-50 rounded-full p-4 ">
            <IoLanguage className="text-5xl" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Development</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        {/* cat 4 */}
        <Link className="border border-borderPrimary hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-purple-50 rounded-full p-4 ">
            <IoLanguage className="text-5xl" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Marketing</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        {/* cat 5 */}
        <Link className="border border-borderPrimary hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-purple-50 rounded-full p-4 ">
            <IoLanguage className="text-5xl" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Photography</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        {/* cat 6 */}
        <Link className="border border-borderPrimary hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-purple-50 rounded-full p-4 ">
            <IoLanguage className="text-5xl" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Business</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        <Link className="border border-borderPrimary hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
          <div className="bg-purple-50 rounded-full p-4 ">
            <IoLanguage className="text-5xl" />
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg">Fitness</h2>
            <p>10 Courses</p>
          </div>
        </Link>
        <Link className="border border-borderPrimary hover:shadow-md rounded-full overflow-hidden p-2 flex items-center gap-3">
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
