import { NavLink, Outlet } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineChangeCircle } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";
import { AiOutlineUserDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function ManageAccount() {
  const { isGoogle } = useSelector((state) => state.authUsers);

  return (
    <main className="flex relative min-h-[calc(100vh-3.8rem)]">
      <aside className="bg-backgroundPrimary absolute w-full md:w-52 h-fit sm:h-full top-0 left-0 bottom-0 z-30 shadow md:border-r border-highlightGray/10 overflow-y-auto scroll no-scrollbar">
        <ul className="flex flex-row sm:flex-col gap-2 sm:py-5 sm:pr-4">
          <NavLink
            to="/manage-account/overview"
            className="sm:hover:bg-primaryShadeHover whitespace-nowrap w-full sm:rounded-r-full p-2 flex items-center justify-center sm:justify-start gap-1 sm:gap-2"
          >
            <span className="text-2xl">
              <IoIosInformationCircleOutline />
            </span>
            <span>Overview</span>
          </NavLink>

          <NavLink
            to="/manage-account/manage-profile"
            className="sm:hover:bg-primaryShadeHover whitespace-nowrap w-full sm:rounded-r-full p-2 flex items-center justify-center sm:justify-start gap-1 sm:gap-2"
          >
            <span className="text-2xl">
              <MdOutlineChangeCircle />
            </span>
            <span>Update Profile</span>
          </NavLink>

          {!isGoogle && (
            <NavLink
              to="/manage-account/change-password"
              className="sm:hover:bg-primaryShadeHover whitespace-nowrap w-full sm:rounded-r-full p-2 flex items-center justify-center sm:justify-start gap-1 sm:gap-2"
            >
              <span className="text-2xl">
                <PiPasswordFill />
              </span>
              <span>Change Password</span>
            </NavLink>
          )}

          <NavLink
            to="/manage-account/delete-account"
            className="sm:hover:bg-primaryShadeHover whitespace-nowrap w-full sm:rounded-r-full p-2 flex items-center justify-center sm:justify-start gap-1 sm:gap-2"
          >
            <span className="text-2xl">
              <AiOutlineUserDelete />
            </span>
            <span>Delete Account</span>
          </NavLink>
        </ul>
      </aside>
      <section className="sm:pl-52 pt-12 sm:pt-0 text-justify w-full">
        <Outlet></Outlet>
      </section>
    </main>
  );
}
