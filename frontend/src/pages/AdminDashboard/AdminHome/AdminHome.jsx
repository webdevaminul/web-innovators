import useAllCourse from "../../../api/useAllCourse";
import useAllUser from "../../../api/useAllUser";
import useBlogPost from "../../../api/useBlogPost";
import Heading from "../../../utils/Heading";
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
import UserCharts from "./UserCharts";
import CourseBlogsCharts from "./CourseBlogsCharts";


const AdminHome = () => {
  const status = "pending"
  const { users } = useAllUser();
  const { courses } = useAllCourse({ status });
  const { blogs } = useBlogPost();

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","july","Aug","Sept","Oct","Nov", "Dec"];
const data2 = monthNames.map((month) => ({
  name: month,
  Courses: courses?.length || 0,
  Blogs: blogs?.length || 0
}));

console.log ( 'here data', data2);

  const students = users?.filter(std => std.userRole === "student");
  const teachers = users?.filter(teacher => teacher.userRole === "Teacher")
  const pendingUsers = users?.filter((u) => u.status === "Pending");
  const pendingCourses = courses?.filter((c) => c.status === "pending");
  const pendingBlogs = blogs?.filter((b) => b.status === "pending");

  console.log('teachers', pendingCourses)

  return (
    <div>
      <Heading heading={"Admin Home"} />
      {/* All users here */}
      <h2 className="text-sm text-text">Users Analytics</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-5 md:mb-10">
        <div className="bg-bg rounded-lg shadow hover:shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-base font-semibold text-text">Total Users</h3>
          <p className="text-2xl font-bold text-blue-500">{users?.length}</p>
        </div>
        <div className="bg-bg rounded-lg shadow hover:shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-base font-semibold text-text">Total Teachers</h3>
          <p className="text-2xl font-bold text-green-500">
            {" "}
            {teachers?.length}
          </p>
        </div>
        <div className="bg-bg rounded-lg shadow hover:shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-base font-semibold text-text">Total Students</h3>
          <p className="text-2xl font-bold text-red-500"> {students?.length} </p>
        </div>
        <div className="bg-bg rounded-lg shadow hover:shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-base font-semibold text-text">Pending Request</h3>
          <p className="text-2xl font-bold text-red-500"> {pendingUsers?.length}</p>
        </div>
      </div>

      {/* Courses and Blog */}
      <h2 className="text-sm mt-10 text-text">Courses and Blogs overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">

        <div className="bg-bg rounded-lg shadow hover:shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-text">Pending Courses</h3>
          <p className="text-3xl font-bold text-green-500">
            {" "}
            {pendingCourses?.length}
          </p>
        </div>
        <div className="bg-bg rounded-lg shadow hover:shadow-md p-5 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-text">Pending Blogs</h3>
          <p className="text-3xl font-bold text-red-500"> {pendingBlogs?.length}</p>
        </div>
      </div>

      {/* Main Content */}
      <UserCharts />
      <CourseBlogsCharts />
      {/* Graph Section */}
      <div className="bg-bg rounded-lg shadow hover:shadow-md p-5 mb-5">
          <h2 className="text-2xl font-semibold mb-4 text-text">
            User and Course Statistics
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data2}>
              <CartesianGrid strokeDasharray="33" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Courses" stroke="#82ca9d" />
              <Line type="monotone" dataKey="Blogs" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
    </div>
  );
};
export default AdminHome;
