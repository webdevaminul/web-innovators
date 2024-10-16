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
import Darkmode from "../../components/Darkmode/Darkmode";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col md:px-10 px-5">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-lg w-full p-4 flex items-center justify-between rounded-lg mb-5">
        <div className="flex items-center">
          <div className="hidden md:flex items-center">
            <Link to="/">
              <h1 className="font-bold text-2xl md:text-2xl font-inter text-primary">
                Learn<span className="text-secondary">UP</span>
              </h1>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button id="menuBtn">
              <FaBars className="text-primary text-xl" />
            </button>
          </div>
        </div>

        {/* Notification and Profile Icons */}
        <div className="space-x-5 flex items-center">
          <Darkmode />
          <button>
            <FaBell className="text-primary text-xl" />
          </button>
          <button>
            <FaUser className="text-primary text-xl" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Sidebar Navigation */}
        <div className="p-4 bg-white shadow-lg rounded-lg hidden md:flex flex-col w-60">
          <nav>
            <Link
              to="admin-home"
              className="block text-primary py-2.5 px-4 my-2 rounded-lg transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
            >
              <FaHome className="mr-2 inline" />
              Home
            </Link>
            <Link
              className="block text-primary py-2.5 px-4 my-2 rounded-lg transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
              to="user-manage"
            >
              <FaUsers className="mr-2 inline" />
              User Manage
            </Link>
            <a
              className="block text-primary py-2.5 px-4 my-2 rounded-lg transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
              href="#"
            >
              <FaFileAlt className="mr-2 inline" />
              Course Manage
            </a>
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
              <FaExchangeAlt className="mr-2 inline" />
              Transacciones
            </a>
          </nav>

          {/* Logout Item */}
          <a
            className="block text-primary py-2.5 px-4 my-2 rounded-lg transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white mt-auto"
            href="#"
          >
            <FaSignOutAlt className="mr-2 inline" />
            Cerrar sesión
          </a>

          {/* Location Indicator */}
          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

          {/* Copyright at the end of the sidebar */}
          <p className="mb-1 px-5 py-3 text-left text-xs text-primary">
            Copyright WCSLAT@2023
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          {/* Search Field */}
          <div className="relative max-w-md w-full mb-4">
            <div className="absolute top-1 left-2 inline-flex items-center p-2">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              className="w-full h-10 pl-10 pr-4 py-1 bg-white text-base placeholder-gray-400 border rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-300"
              type="search"
              placeholder="Buscar..."
            />
          </div>

          {/* Container for the 4 sections */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
