import { HiOutlineUsers } from "react-icons/hi2";
import { IoIosTrendingUp } from "react-icons/io";
import Heading from "../../../utils/Heading";
import TeacherOwnCourse from "../../../components/TeacherOwnCourse/TeacherOwnCourse";

const TeacherHome = () => {

  return (
    <div className="mt-12">
      <Heading heading={"Teacher Home"} />    
      <div className="mb-12 grid gap-y-10 gap-x-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        <div className="relative flex flex-col rounded-xl shadow-md border py-3">
          <div
            className="bg-clip-border mx-4 rounded-xl light:bg-gray-300 dark:bg-bg text-
           absolute grid h-16 w-16 place-items-center"
          >
            <HiOutlineUsers className="w-5 h-5" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-bai text-sm leading-normal font-normal text-text">
              Teachers
            </p>
            <h4 className="block antialiased tracking-normal font-bai text-2xl font-semibold leading-snug text-text">
              54,332
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-bai text-base leading-relaxed font-normal text-text">
              <strong className="text-green-500">+55%</strong>&nbsp;than last week
            </p>
          </div>
        </div>
        <div className="relative flex flex-col rounded-xl shadow-md border py-3">
          <div className="bg-clip-border mx-4 rounded-xl light:bg-gray-300 text-white absolute grid h-16 w-16 place-items-center">
            <HiOutlineUsers className="w-5 h-5" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-bai text-sm leading-normal font-normal text-text">
              Students
            </p>
            <h4 className="block antialiased tracking-normal font-bai text-2xl font-semibold leading-snug text-text">
              23,300
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-bai text-base leading-relaxed font-normal text-text">
              <strong className="text-green-500">+3%</strong>&nbsp;than last month
            </p>
          </div>
        </div>
        <div className="relative flex flex-col rounded-xl shadow-md border py-3">
          <div className="bg-clip-border mx-4 rounded-xl light:bg-gray-300 dark:bg-bg text-white absolute  grid h-16 w-16 place-items-center">
            <HiOutlineUsers className="w-5 h-5" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-bai text-sm leading-normal font-normal text-text">
              New Students
            </p>
            <h4 className="block antialiased tracking-normal font-bai text-2xl font-semibold leading-snug text-text">
              3,462
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-bai text-base leading-relaxed font-normal text-text">
              <strong className="text-red-500">-2%</strong>&nbsp;than yesterday
            </p>
          </div>
        </div>
        <div className="relative flex flex-col rounded-xl shadow-md border py-3">
          <div className="bg-clip-border mx-4 rounded-xl light:bg-gray-300 dark:bg-bg text-white absolute  grid h-16 w-16 place-items-center">
            <IoIosTrendingUp className="w-5 h-5" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-bai text-sm leading-normal font-normal text-text">
              Total Students
            </p>
            <h4 className="block antialiased tracking-normal font-bai text-2xl font-semibold leading-snug text-text">
              103,430
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-bai text-base leading-relaxed font-normal text-text">
              <strong className="text-green-500">+5%</strong>&nbsp;than yesterday
            </p>
          </div>
        </div>
      </div>
      {/* Project */}
      <TeacherOwnCourse />
    </div>
  );
};

export default TeacherHome;
