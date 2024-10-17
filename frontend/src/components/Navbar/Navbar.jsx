import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiMenuFold2Line } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Darkmode from "../Darkmode/Darkmode";
import {
  requestFailure,
  requestStart,
  userClearSuccess,
} from "../../redux/authUsersSlice";
import axiosInstance from "../../api/axiosInstance";
import useAllUser from "../../api/useAllUser";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import Loader from "../../utils/Loader";

const Navbar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.authUsers);
  const [profileMenu, setProfileMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const { isLoading } = useAllUser();
  const profileMenuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Toggle Profile Menu
  const toggleProfileMenu = () => {
    setProfileMenu(!profileMenu);
    // setMobileMenu(false);
  };

  // Handle Click Outside Mobile Menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target)
      ) {
        setProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if(isLoading) return <Loader />

  // const role = "Admin";
  // const role = "Teacher";
  const role = user?.userInfo?.userRole;
  console.log("role", role);

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

  const links = (
    <>
      <li onClick={() => setOpenMenu(false)}>
        <NavLink
          to="/all-courses"
          className="text-nowrap p-2 hover:text-textSecondary"
        >
          Our Courses
        </NavLink>
      </li>
      <li onClick={() => setOpenMenu(false)}>
        <NavLink
          to="/blog"
          className="text-nowrap p-2 hover:text-textSecondary"
        >
          Blogs
        </NavLink>
      </li>
      <li onClick={() => setOpenMenu(false)}>
        <NavLink
          to="/become-instructor"
          className="text-nowrap p-2 hover:text-textSecondary"
        >
          Become Instructor
        </NavLink>
      </li>
      <li onClick={() => setOpenMenu(false)}>
        <NavLink
          to="/contact-us"
          className="text-nowrap p-2 hover:text-textSecondary"
        >
          About Us
        </NavLink>
      </li>
      <li onClick={() => setOpenMenu(false)}></li>
    </>
  );


  return (
    <header className="fixed h-[3.8rem] border-b border-borderPrimary w-full top-0 left-0 z-50 bg-backgroundPrimary">
      <nav className="gap-2 h-full p-5 flex justify-between items-center relative">
        {/* Logo and Search bar */}
        <div className="flex items-center gap-12">
          {/* Logo and Menu button for small devices */}
          <div className="flex items-center gap-1">
            {/* Menu button for small devices */}
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className="md:hidden flex items-center"
            >
              <button className="h-8 w-8">
                {openMenu ? (
                  <RiMenuFoldLine className="m-auto text-2xl text-textSecondary" />
                ) : (
                  <RiMenuFold2Line className="m-auto text-2xl text-textSecondary" />
                )}
              </button>
            </div>

            {/* Logo */}
            <Link to="/">
              <div className="flex items-center">
                <img src={logo} alt="LearnUP" className="w-10" />
                <h1 className="font-bold text-3xl font-ubuntu text-textSecondary">
                  Learn<span className="text-textHighlight">UP</span>
                </h1>
              </div>
            </Link>
          </div>

          {/* search bar for large device */}
          <div className="px-4 border border-borderPrimary rounded-3xl w-full max-w-md justify-between sm:flex md:hidden lg:flex hidden">
            <input
              className="outline-none w-full placeholder:text-text/70 text-text py-2 bg-transparent"
              type="text"
              placeholder="Search program..."
            />
            <button className="text-xl">
              <IoSearchOutline />
            </button>
          </div>
        </div>

        {/* search bar for small device */}
        <div
          className={`container mx-auto px-3 absolute z-10 top-0 h-[3.8rem] flex gap-3 bg-backgroundPrimary transition-all duration-400 ease-in-out ${
            searchBarOpen ? "w-full left-0" : "w-0 left-[-300px]"
          }`}
        >
          {/* Close button for search bar */}
          <button
            onClick={() => setSearchBarOpen(false)}
            className="absolute left-4 top-1/2 transform translate-y-[-50%]  bg-backgroundHighlight shadow-sm rounded-full p-3"
          >
            <MdArrowBackIosNew />
          </button>

          {/* Search bar and search button*/}
          <div className="flex w-full my-auto">
            <input
              className="outline-none bg-transparent w-full placeholder:text-text/70 text-text my-auto ml-12 p-2 px-4 border border-r-0 border-border rounded-l-full"
              type="text"
              placeholder="Search program..."
            />

            <button className="text-2xl p-2 my-auto rounded-r-full border border-borderPrimary">
              <IoSearchOutline />
            </button>
          </div>
        </div>

        {/* nav links for small device */}
        <div
          className={`container mx-auto transition-all duration-400 ease-in-out md:hidden absolute top-[3.8rem] flex flex-col gap-5 list-none bg-backgroundPrimary h-screen ${
            openMenu ? "left-0 right-0" : "left-[-150%] right-[100%]"
          } font-semibold p-3 text-textPrimary text-center`}
        >
          {links}
        </div>

        {/* nav links for large device and buttons*/}
        <div className="flex items-center gap-2">
          {/* nav links for large device */}
          <div className="list-none hidden md:flex flex-nowrap font-semibold text-textPrimary">
            {links}
          </div>

          {/* buttons */}
          <div className="flex w-full items-center gap-2">
            {/* Profile or Sign in */}
            {user && isAuthenticated ? (
              <div ref={profileMenuRef} className="relative mt-[6px]">
                <button onClick={toggleProfileMenu}>
                  <img
                    src={user?.userInfo?.userPhoto}
                    className="h-8 w-8 rounded-full object-center"
                    loading="lazy"
                  />
                </button>

                {profileMenu && (
                  <div className="absolute top-[3.2rem] sm:right-0 right-[-4.5rem] z-40 bg-accentOne p-4 shadow-sm border border-border rounded-xl flex flex-col gap-4">
                    <div className="">
                      <p className="whitespace-nowrap">
                        Hi, {user?.userInfo?.userName}
                      </p>
                      <p className="text-xs ">{user?.userInfo?.userEmail}</p>
                    </div>

                    {role === "student" ? (
                      <Link
                        onClick={() => setProfileMenu(false)}
                        to="/dashboard/home"
                        className="text-nowrap text-sm bg-backgroundPrimary hover:bg-secondaryHover border border-border whitespace-nowrap w-full rounded-xl p-2 flex items-center  gap-2"
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
                            className="text-nowrap text-sm bg-backgroundPrimary hover:bg-secondaryHover border border-border whitespace-nowrap w-full rounded-xl p-2 flex items-center  gap-2"
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
                            className="text-nowrap text-sm bg-backgroundPrimary hover:bg-secondaryHover border border-border whitespace-nowrap w-full rounded-xl p-2 flex items-center  gap-2"
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
                      className="text-sm bg-backgroundPrimary hover:bg-secondaryHover border border-border whitespace-nowrap w-full rounded-xl p-2 flex items-center  gap-2"
                    >
                      <span className="text-2xl">{/* <IoOptions /> */}</span>
                      <span>Manage account</span>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="text-sm bg-secondary hover:bg-secondaryHover text-primaryWhite border border-border whitespace-nowrap w-full rounded-xl p-2 flex items-center  gap-2"
                    >
                      <span className="text-2xl">
                        {/* <IoExitOutline /> */}
                      </span>
                      <span>Sign out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to="sign-in"
                className="bg-link hover:bg-linkHover text-textReverse hover:text-textReverse p-2 rounded-md font-medium w-full sm:w-fit text-center sm:text-start flex gap-1 items-center justify-center"
              >
                <span className="text-2xl">{/* <IoEnterOutline /> */}</span>
                <span>Sign In</span>
              </NavLink>
            )}

            {/* Search button  */}
            <button
              onClick={() => setSearchBarOpen(true)}
              className="h-8 w-8 sm:hidden md:flex lg:hidden bg-blue-300 hover:bg-blue-400 border border-borderPrimary rounded-full"
            >
              <IoSearchOutline className="m-auto text-2xl text-textBlack" />
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
