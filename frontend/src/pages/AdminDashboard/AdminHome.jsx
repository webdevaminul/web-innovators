import useAllCourse from "../../api/useAllCourse";
import useAllTeacher from "../../api/useAllTeacher";
import useAllUser from "../../api/useAllUser";
import Heading from "../../utils/Heading";
import { IoMdPerson } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { MdDownloading } from "react-icons/md";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CourseProgress from "../../utils/CourseProgress";

// Sample Data for Graphs
const data = [
  { name: "Jan", Users: 4000, Courses: 2400 },
  { name: "Feb", Users: 3000, Courses: 1398 },
  { name: "Mar", Users: 2000, Courses: 9800 },
  { name: "Apr", Users: 2780, Courses: 3908 },
  { name: "May", Users: 1890, Courses: 4800 },
  { name: "Jun", Users: 2390, Courses: 3800 },
];
//
const AdminHome = () => {
  const status = "pending";
  const { users } = useAllUser();
  const { teachers } = useAllTeacher();
  const { courses } = useAllCourse();
  const totalUser = users?.length + teachers?.length;
  // console.log("c", courses);
  const pending = courses?.filter((c) => c.status === status);
  // console.log("c", pending);
  return (
    <div>
      <Heading heading={"Admin Home"} />
      {/* All users here 1st section of admin-home */}
      {/* <h2 className="text-xl mb-4 text-text">Users overview</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {/* <div className="bg-bg rounded-lg shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-text">Total Users</h3>
          <p className="text-3xl font-bold text-blue-500">{totalUser}200</p>
        </div> */}

        {/* total teachers card */}
        <div className="rounded-lg shadow-md p-5 flex flex-col justify-between bg-gradient-to-r from-cyan-400 to-cyan-200">
          <div className="flex items-center gap-4 mb-4">
            <IoMdPerson className="text-3xl rounded-md bg-cyan-100" />
            <p className="flex justify-between items-center gap-2 text-black">
              <BsGraphDownArrow />
              <span>1.3 %</span>
            </p>
          </div>
          <p className="text-3xl font-bold text-black">{courses?.length}</p>
          <h3 className="text-lg font-semibold text-black">Total Teachers</h3>
        </div>

        {/* total students */}
        <div className="rounded-lg shadow-md p-5 flex flex-col justify-between bg-gradient-to-r from-cyan-400 to-cyan-200">
          <div className="flex items-center gap-4 mb-4">
            <RiTeamFill className="text-3xl rounded-md bg-cyan-100" />
            <p className="flex justify-between items-center gap-2 text-black">
              <BsGraphUpArrow />
              <span>1.3 %</span>
            </p>
          </div>
          <p className="text-3xl font-bold text-black">{pending?.length}</p>
          <h3 className="text-lg font-semibold text-black">Total Students</h3>
        </div>

        {/* pending request */}
        <div className="bg-bg rounded-lg shadow-md p-5 flex flex-col justify-between bg-gradient-to-r from-cyan-400 to-cyan-200">
          <MdDownloading className="mb-4 text-3xl rounded-md bg-cyan-100" />
          <p className="text-3xl font-bold text-black">{pending?.length}</p>
          <h3 className="text-lg font-semibold text-black">Pending Request</h3>
        </div>
      </div>

      {/* Courses and Blog */}
      {/* <h2 className="text-xl my-4 text-text">Courses and Blogs overview</h2> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-bg rounded-lg shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-text">Total Courses</h3>
          <p className="text-3xl font-bold text-blue-500">{totalUser}200</p>
        </div>
        <div className="bg-bg rounded-lg shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-text">Pending Courses</h3>
          <p className="text-3xl font-bold text-green-500">
            {" "}
            {courses?.length}0
          </p>
        </div>
        <div className="bg-bg rounded-lg shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-text">Total Blogs</h3>
          <p className="text-3xl font-bold text-red-500">
            {" "}
            {pending?.length} s 5
          </p>
        </div>
        <div className="bg-bg rounded-lg shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-text">Pending Blogs</h3>
          <p className="text-3xl font-bold text-red-500">
            {" "}
            {pending?.length} s 5
          </p>
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 border-2 border-black">
          <div>
            <p>Popular Courses</p>
            <div className="flex flex-col">
              <CourseProgress />
            </div>
            {/* <table>
              <thead className="bg-backgroundPrimary">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider"
                  >
                    <IoMdFlame />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider"
                  >
                    Development
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider"
                  >
                    2332
                  </th>
                  <th scope="col" className="">
                    <progress
                      className="progress w-56"
                      value="70"
                      max="100"
                    ></progress>
                  </th>
                </tr>
              </thead>
            </table> */}
          </div>
        </div>
        <div className="">
          <p>pie chart</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 bg-bg">
        {/* Recent Activities Section */}
        <div className="bg-bg rounded-lg shadow-md p-5 mb-5 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold mb-4 text-text">
            Recent Activities
          </h2>
          <ul>
            <li className="border-b py-2 text-text hover:text-text transition duration-200">
              User John Doe registered
            </li>
            <li className="border-b py-2 text-text hover:text-text transition duration-200">
              Course &quot;React Basics&quot; created
            </li>
            <li className="border-b py-2 text-text hover:text-text transition duration-200">
              User Jane Smith completed &quot;Web Design 101&quot;
            </li>
          </ul>
        </div>
        {/* Graph Section */}
        <div className="bg-bg rounded-lg shadow-md p-5 mb-5 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-4 text-text">
            User and Course Statistics
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Users" stroke="#8884d8" />
              <Line type="monotone" dataKey="Courses" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default AdminHome;
