import {
  FaBell,
  FaBars,
  FaHome,
  FaFileAlt,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Darkmode from "../../components/Darkmode/Darkmode";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.authUsers);
  const location = useLocation();

  // define the route is active
  const isActive = (route) => location?.pathname === route;

  return (
    <div className="flex flex-col md:px-10 px-5">
      {/* Top Navbar */}
      <div className="bg-backgroundPrimary text-text shadow w-full p-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="md:flex items-center">
            <Link to="/">
              <h1 className="font-bold text-2xl md:text-2xl font-ubuntu">
                Learn<span className="text-secondary">UP</span>
              </h1>
            </Link>
          </div>
        </div>

        {/* Notification and Profile Icons */}
        <div className="space-x-5 flex items-center">
          {/* Hamburger Menu for small devices */}
          <div className="md:hidden flex items-center justify-end">
            <button onClick={() => setOpen(!open)} id="menuBtn">
              {open ? (
                <RxCross1 className="text-text text-lg" />
              ) : (
                <FaBars className="text-text text-lg" />
              )}
            </button>
          </div>
          <Darkmode />
          <button>
            <FaBell className="text-primary text-xl" />
          </button>
          <button>
          <img src={user?.userInfo?.userPhoto} className="rounded-full object-center object-cover h-8 w-8 sm:h-9 sm:w-9 cursor-pointer" loading="lazy" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Sidebar - visible on md and lg, drawer on smaller devices */}
        <div
          className={`p-2 bg-backgroundPrimary md:w-60 lg:w-60 md:flex-col lg:flex-col transform top-0 left-0 fixed md:relative lg:relative h-full md:z-0 z-50 transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 lg:translate-x-0`}
        >
          <nav>
            <Link
              to="admin-home"
              className={`block text-text py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text ${
                isActive("/admin-dashboard/admin-home")
                  ? "bg-gradient-to-r from-cyan-400 to-cyan-300"
                  : ""
              }`}
            >
              <FaHome className="mr-2 inline" />
              Home
            </Link>
            <Link
              to="user-manage"
              className={`block text-text py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text ${
                isActive("/admin-dashboard/user-manage")
                  ? "bg-gradient-to-r from-cyan-400 to-cyan-300"
                  : ""
              }`}
            >
              <FaUsers className="mr-2 inline" />
              User Manage
            </Link>
            <Link
              to="course-manage"
              className={`block text-text py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text ${
                isActive("/admin-dashboard/course-manage")
                  ? "bg-gradient-to-r from-cyan-400 to-cyan-300"
                  : ""
              }`}
            >
              <FaFileAlt className="mr-2 inline" />
              Course Manage
            </Link>
            <Link
              to="adminBlog-management"
              className={`block text-text py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text ${
                isActive("/admin-dashboard/adminBlog-management")
                  ? "bg-gradient-to-r from-cyan-400 to-cyan-300"
                  : ""
              }`}
            >
              <FaHome className="mr-2 inline" />
              Blog Management
            </Link>
          </nav>

          {/* Logout */}
          <Link
            className="block text-text py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text mt-auto"
            to="/"
          >
            <FaSignOutAlt className="mr-2 inline" />
            Leave to Home
          </Link>
        </div>

        {/* Main content area */}
        <div className="flex-1 p-4">
          {/* Content sections */}
          <Outlet />
        </div>
      </div>

      {/* Overlay for the drawer on smaller screens */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden lg:hidden z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminDashboard;
