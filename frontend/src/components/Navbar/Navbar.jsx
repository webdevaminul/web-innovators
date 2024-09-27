import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenuFold2Line } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import Darkmode from "../Darkmode/Darkmode";

const Navbar = () => {
  const links = (
    <>
      <li onClick={() => setOpenMenu(false)}>
        <NavLink to="/allCourses" className="text-nowrap">
          All Courses
        </NavLink>
      </li>
      <li onClick={() => setOpenMenu(false)}>
        <NavLink to="/course-details" className="text-nowrap">
          Pricing
        </NavLink>
      </li>

      {/* <li><NavLink to="/about">About</NavLink></li> */}
      <li onClick={() => setOpenMenu(false)}>
        <NavLink to="/contact" className="text-nowrap">
          Contact
        </NavLink>
      </li>
      <li onClick={() => setOpenMenu(false)}>
        <NavLink to="/userDeshbroad" className="text-nowrap">
          Dashboard
        </NavLink>
      </li>
    </>
  );

  const [openMenu, setOpenMenu] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  console.log(searchBarOpen);

  return (
    <header className="fixed h-[5rem] w-full top-0 left-0 z-20 border-b border-border/70 font-bai bg-bg">
      <nav className="container px-3 h-full mx-auto flex justify-between items-center gap-3 sm:gap-5 relative">
        {/* Logo and Search bar */}
        <div className="flex items-center gap-3">
          {/* Logo and Menu button for small devices */}
          <div className="flex items-center gap-3">
            {/* Menu button for small devices */}
            <div onClick={() => setOpenMenu(!openMenu)} className="md:hidden flex items-center">
              <button className="text-2xl">
                {openMenu ? <RiMenuFoldLine /> : <RiMenuFold2Line />}
              </button>
            </div>

            {/* Logo */}
            <div>
              <Link to="/">
                <h1 className="font-bold text-2xl md:text-3xl font-inter">
                  Learn<span className="text-secondary">UP</span>
                </h1>
              </Link>
            </div>
          </div>

          {/* search bar for large device */}
          <div className="border px-4 border-border rounded-3xl w-full max-w-md justify-between sm:flex md:hidden lg:flex hidden bg-inputBg">
            <input
              className="outline-none w-full placeholder:text-text/70 text-text py-2 bg-inputBg"
              type="text"
              placeholder="Search program..."
            />
            <button className="text-2xl">
              <IoSearchOutline />
            </button>
          </div>
        </div>

        {/* search bar for small device */}
        <div
          className={`container mx-auto border-b absolute z-10 top-0 h-[5.18rem] flex gap-3 bg-bg transition-all duration-400 ease-in-out ${
            searchBarOpen ? "w-full left-0" : "w-0 -left-[300px]"
          }`}
        >
          {/* Close button for search bar */}
          <button
            onClick={() => setSearchBarOpen(false)}
            className="absolute left-4 top-1/2 transform translate-y-[-50%]  bg-bg/90 border border-border rounded-full p-2"
          >
            <MdArrowBackIosNew />
          </button>

          {/* Search bar and search button*/}
          <div className="flex w-full my-auto">
            <input
              className="outline-none bg-inputBg w-full placeholder:text-text/70 text-text my-auto ml-12 p-2 px-4 border border-r-0 border-border rounded-l-full"
              type="text"
              placeholder="Search program..."
            />

            <button className="text-2xl bg-inputBg p-2 my-auto rounded-r-full border border-border">
              <IoSearchOutline />
            </button>
          </div>
        </div>

        {/* nav links for small device */}
        <div
          className={`container mx-auto px-3 nav-parent md:hidden transition-all duration-400 ease-in-out flex flex-col gap-5 absolute list-none top-[4.8rem] border-t bg-bg h-screen ${
            openMenu ? "left-0 w-full" : "-left-[300px] w-[300px]"
          } font-semibold text-lg`}
        >
          {links}
        </div>

        {/* nav links for large device and buttons*/}
        <div className="flex items-center gap-4">
          {/* nav links for large device */}
          <div className="nav-parent text-lg list-none gap-4 hidden md:flex flex-nowrap font-semibold">
            {links}
          </div>

          {/* buttons */}
          <div className="flex items-center gap-3">
            {/* Registration button */}
            <button className="sm:py-[6px] p-2 px-3 rounded-md bg-primary hover:bg-primaryHover font-semibold">
              <Link to="/register" className="text-textReversed hover:text-textReversed">
                Register
              </Link>
            </button>

            {/* Search button  */}
            <button
              onClick={() => setSearchBarOpen(true)}
              className="text-2xl sm:hidden md:flex lg:hidden p-2 text-text bg-accentOne hover:bg-accentOne/50 border border-border/25 rounded-full"
            >
              <IoSearchOutline />
            </button>

            {/* Theme Switch */}
            <Darkmode />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
