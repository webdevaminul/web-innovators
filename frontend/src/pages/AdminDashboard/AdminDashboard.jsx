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
  const [profileMenu, setProfileMenu] = useState(false);
  const location = useLocation();

  const role = user?.userInfo?.userRole;

  // Toggle Profile Menu
  const toggleProfileMenu = () => {
    setProfileMenu(!profileMenu);
    // setMobileMenu(false);
  };

  const handleSignOut = async () => {
    try {
      dispatch(requestStart());
      const res = await axiosInstance.get("/auth/sign-out");
      if (res.data.success) {
        dispatch(userClearSuccess());
        localStorage.removeItem("accessToken");
        setProfileMenu(false);
        navigate("/");
      }
    } catch (error) {
      dispatch(
        requestFailure(
          error.response?.data?.message ||
            "Something went wrong. Please try again."
        )
      );
    }
  };

  // define the route is active
  const isActive = (route) => location?.pathname === route;

  return (
    <div className="mx-auto flex flex-col md:px-10 px-5">
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
          <div>
            <div className="relative rounded-full">
              {/* profile */}
              <div
                onClick={toggleProfileMenu}
                className="bg-blue-500 rounded-full m-auto h-8 w-8 sm:h-9 sm:w-9 cursor-pointer"
              >
                <img
                  src={user?.userInfo?.userPhoto}
                  className="rounded-full object-center object-cover"
                  loading="lazy"
                />
              </div>
              {/* dropdown */}
              {profileMenu && (
                <div className="absolute top-[3.2rem] sm:right-0 right-[-4.5rem] z-40 bg-backgroundShadeOne p-4 shadow-sm border border-borderDark rounded-xl flex flex-col gap-4">
                  <div className="">
                    <p className="whitespace-nowrap">
                      Hi, {user?.userInfo?.userName}
                    </p>
                    <p className="text-xs ">{user?.userInfo?.userEmail}</p>
                  </div>

                  {role === "student" ? (
                    <Link
                      onClick={() => setProfileMenu(false)}
                      to="dashboard/home"
                      className="text-nowrap text-textWhite text-sm bg-backgroundBlue hover:bg-backgroundBlueHover border border-borderLight whitespace-nowrap w-full rounded-xl p-2 flex items-center  gap-2"
                    >
                      <span className="text-2xl">
                        {/* <BiCreditCardFront /> */}
                      </span>
                      <span>Dashboard</span>
                    </Link>
                  ) : (
                    <>
                      {role === "Teacher" ? (
                        <Link
                          onClick={() => setProfileMenu(false)}
                          to="/teacher-dashboard"
                          className="text-nowrap text-textWhite text-sm bg-backgroundBlue hover:bg-backgroundBlueHover border border-borderLight whitespace-nowrap w-full rounded-xl p-2 flex items-center  gap-2"
                        >
                          <span className="text-2xl">
                            {/* <BiCreditCardFront /> */}
                          </span>
                          <span>Dashboard</span>
                        </Link>
                      ) : (
                        <Link
                          onClick={() => setProfileMenu(false)}
                          to="/admin-dashboard"
                          className="text-nowrap text-textWhite text-sm bg-backgroundBlue hover:bg-backgroundBlueHover border border-borderLight whitespace-nowrap w-full rounded-xl p-2 flex items-center  gap-2"
                        >
                          <span className="text-2xl">
                            {/* <BiCreditCardFront /> */}
                          </span>
                          <span>Dashboard</span>
                        </Link>
                      )}
                    </>
                  )}

                  <Link
                    onClick={() => setProfileMenu(false)}
                    to="/manage-account/overview"
                    className="text-nowrap text-textWhite text-sm bg-backgroundBlue hover:bg-backgroundBlueHover border border-borderLight whitespace-nowrap w-full rounded-xl p-2 flex items-center  gap-2"
                  >
                    <span className="text-2xl">{/* <IoOptions /> */}</span>
                    <span>Manage account</span>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-sm bg-red-500 hover:bg-red-600 text-textWhite border border-border whitespace-nowrap w-full rounded-xl p-2 flex items-center  gap-2"
                  >
                    <span className="text-2xl">{/* <IoExitOutline /> */}</span>
                    <span>Sign out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
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
