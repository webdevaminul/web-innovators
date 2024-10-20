import {
  FaBell,
  FaUser,
  FaBars,
  FaHome,
  FaFileAlt,
  FaUsers,
  FaStore,
  FaExchangeAlt,
  FaSignOutAlt,
  FaSearch,
} from "react-icons/fa";
// import Darkmode from "../../components/Darkmode/Darkmode";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Darkmode from "../../components/Darkmode/Darkmode";

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);

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
            <FaUser className="text-primary text-xl" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Sidebar - visible on md and lg, drawer on smaller devices */}
        <div
          className={`p-2 bg-backgroundPrimary md:w-60 lg:w-60 md:flex-col lg:flex-col transform top-0 left-0 fixed md:relative lg:relative h-full z-50 transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 lg:translate-x-0`}
        >
          <nav>
            <Link
              to="admin-home"
              className="block text-text py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link
              className="block text-text py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text"
              to="user-manage"
            >
              <FaUsers className="mr-2 inline" />
              User Manage
            </Link>
            <Link
              to="course-manage"
              className="block text-text py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text"
            >
              <FaFileAlt className="mr-2 inline" />
              Course Manage
            </Link>
            <Link
              to="/admin-dashboard/blog-creation"
              className="block text-primary py-2.5 px-4 my-2 rounded-lg transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
            >
              <FaHome className="mr-2 inline" />
              Blog Creation
            </Link>
            <Link
              to="adminBlog-management"
              className="block text-primary py-2.5 px-4 my-2 rounded-lg transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
            >
              <FaHome className="mr-2 inline" />
              Blog Management
            </Link>
            <a
              className="block text-primary py-2.5 px-4 my-2 rounded-lg transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
              href="#"
            >
              <FaStore className="mr-2 inline" />
              Comercios
            </a>
            <a
              className="block text-primary py-2.5 px-4 my-2 rounded-lg transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
              href="#"
            >
              <FaExchangeAlt className="mr-2" />
              Transactions
            </a>
          </nav>

          {/* Logout */}
          <Link
            className="block text-text py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text mt-auto"
            to="/"
          >
            <FaSignOutAlt className="mr-2" />
           Leave to Home
          </Link>
        </div>

        {/* Main content area */}
        <div className="flex-1 p-4">
          <div className="relative max-w-md w-full">
            <div className="absolute top-1 left-2 inline-flex items-center p-2">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              className="w-full h-10 pl-10 pr-4 py-1 bg-backgroundPrimary text-base placeholder-placeholder border rounded-full focus:shadow-outline"
              type="search"
              placeholder="Search..."
            />
          </div>

          {/* Container for the 4 sections */}
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
