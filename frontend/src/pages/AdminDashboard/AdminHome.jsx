import useAllCourse from "../../api/useAllCourse";
import useAllTeacher from "../../api/useAllTeacher";
import useAllUser from "../../api/useAllUser";
import Heading from "../../utils/Heading";
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
  console.log('c',courses)
  const pending = courses?.filter((c) => c.status === status);
  console.log('c',pending)
  return (
    <div>
      <Heading heading={"Admin Home"} />
      {/* All users here */}
      <h2 className="text-xl mb-4 text-text">Users overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-bg rounded-lg shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-text">Total Users</h3>
          <p className="text-3xl font-bold text-blue-500">{totalUser}200</p>
        </div>
        <div className="bg-bg rounded-lg shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-text">Total Teachers</h3>
          <p className="text-3xl font-bold text-green-500">
            {" "}
            {courses?.length}0
          </p>
        </div>
        <div className="bg-bg rounded-lg shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-text">Total Students</h3>
          <p className="text-3xl font-bold text-red-500"> {pending?.length} s 5</p>
        </div>
        <div className="bg-bg rounded-lg shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-text">Pending Request</h3>
          <p className="text-3xl font-bold text-red-500"> {pending?.length} s 5</p>
        </div>
      </div>

      {/* Courses and Blog */}
      <h2 className="text-xl my-4 text-text">Courses and Blogs overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
          <p className="text-3xl font-bold text-red-500"> {pending?.length} s 5</p>
        </div>
        <div className="bg-bg rounded-lg shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-text">Pending Blogs</h3>
          <p className="text-3xl font-bold text-red-500"> {pending?.length} s 5</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 bg-bg h-screen">
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
