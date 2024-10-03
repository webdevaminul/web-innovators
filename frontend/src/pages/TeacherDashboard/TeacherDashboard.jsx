import { HiBars3, HiOutlineUsers } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";

const TeacherDashboard = () => {
  const location = useLocation();
  const pathname = location?.pathname;
  console.log(pathname);

  return (
    <div className="min-h-screen bg-white">
      <aside className="bg-bg -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
        <div className="relative">
          <Link className="flex items-center gap-4 py-6 px-8">
            <h6 className="block antialiased font-bai font-semibold text-white">
              Teacher Dashboard
            </h6>
          </Link>
          <button
            className="middle none font-medium text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <HiBars3 className="h-5 w-5 text-white" />
            </span>
          </button>
        </div>
        <div className="m-4">
          <ul className="mb-4 flex flex-col gap-1">
            <li>
              <Link className="active">
                <button
                  className="font-bai transition-all py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md hover:shadow-lg hover:shadow-blue-500/40 w-full flex items-center gap-4 px-4"
                  type="button"
                >
                  <IoHomeOutline className="w-5 h-5" />
                  <p className="block font-bai text-base text-inherit font-medium">
                    dashboard
                  </p>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/teacher-dashboard/teacher-profile">
                <button
                  className="middle none font-bai font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                >
                  <HiOutlineUsers className="w-5 h-5" />
                  <p className="block antialiased font-bai text-base leading-relaxed text-inherit font-medium capitalize">
                    profile
                  </p>
                </button>
              </Link>
            </li>
            <li>
              <Link className to="/teacher-dashboard/create-course">
                <button
                  className="middle none font-bai font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                >
                  <FaRegPenToSquare className="w-5 h-5" />
                  <p className="block antialiased font-bai text-base leading-relaxed text-inherit font-medium capitalize">
                    Create a course
                  </p>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 xl:ml-80">
        <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <nav aria-label="breadcrumb" className="w-max">
                <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                  <li className="flex items-center text-blue-gray-900 antialiased font-bai text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                    <p className="block antialiased font-bai text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">
                      dashboard / home
                    </p>
                  </li>
                </ol>
              </nav>
              <h6 className="block antialiased tracking-normal font-bai text-base font-semibold leading-relaxed text-gray-900">
                home
              </h6>
            </div>
            <div className="flex items-center">
              <div className="mr-auto md:mr-4 md:w-56">
                <div className="relative w-full min-w-[200px] h-10">
                  <input
                    className="peer w-full h-full bg-transparent text-gray-700 font-bai font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                    placeholder=" "
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md peer-focus:before:border-t-2 peer-focus:before:border-l-2 before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                    Type here
                  </label>
                </div>
              </div>
              <button
                className="relative middle none font-bai font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
                type="button"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <HiBars3 className="w-5 h-5" />
                </span>
              </button>
              <a href="#">
                <button
                  className="middle none font-bai font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 hidden items-center gap-1 px-4 xl:flex"
                  type="button"
                >
                  <HiOutlineUsers className="w-5 h-5" />
                  Sign In{" "}
                </button>
                <button
                  className="relative middle none font-bai font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
                  type="button"
                >
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <IoSettingsOutline className="w-5 h-5" />
                  </span>
                </button>
              </a>
              <button
                className="relative middle none font-bai font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                type="button"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <MdOutlineNotificationsActive className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </nav>
        <Outlet />
        <div className="text-blue-gray-600">
          <footer className="py-2">
            <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
              <p className="block antialiased font-bai text-sm leading-normal font-normal text-inherit">
                © 2023, made with by{" "}
                <a
                  href="/"
                  target="_blank"
                  className="transition-colors hover:text-blue-500"
                >
                  Learn Up
                </a>{" "}
                for a better web.{" "}
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;