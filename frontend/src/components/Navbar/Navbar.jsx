import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiMenuFold2Line } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import Darkmode from "../Darkmode/Darkmode";
import { useDispatch, useSelector } from "react-redux";
import { requestFailure, requestStart, userClearSuccess } from "../../redux/authUsersSlice";
import axiosInstance from "../../api/axiosInstance";

const Navbar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.authUsers);
  const [profileMenu, setProfileMenu] = useState(false);
  const profileMenuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // this user role will be dynamic
  const role = "teacher";
  console.log(user);

  // Toggle Profile Menu
  const toggleProfileMenu = () => {
    setProfileMenu(!profileMenu);
    // setMobileMenu(false);
  };

  // Handle Click Outside Mobile Menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target)) {
        setProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      dispatch(requestStart());
      const res = await axiosInstance.get("/api/auth/sign-out");
      if (res.data.success) {
        dispatch(userClearSuccess());
        localStorage.removeItem("accessToken");
        setProfileMenu(false);
        navigate("/");
      }
    } catch (error) {
      dispatch(
        requestFailure(error.response?.data?.message || "Something went wrong. Please try again.")
      );
    }
  };

  const links = (
    <>
      <li onClick={() => setOpenMenu(false)}>
        <NavLink to="/allCourses" className="text-nowrap">
          All Courses
        </NavLink>
      </li>
      <li onClick={() => setOpenMenu(false)}>
        <NavLink to="/blog" className="text-nowrap">
          Blog
        </NavLink>
      </li>

      {/* <li><NavLink to="/about">About</NavLink></li> */}
      <li onClick={() => setOpenMenu(false)}>
        <NavLink to="/contactUs" className="text-nowrap">
          Contact
        </NavLink>
      </li>
      <li onClick={() => setOpenMenu(false)}>
        <NavLink to="/become-instructor" className="text-nowrap">
          Become an Instructor
        </NavLink>
      </li>
      <li onClick={() => setOpenMenu(false)}>        
        {
          role === "student" ? <NavLink to="/dashbroad/home" className="text-nowrap">
          Dashboard
        </NavLink> : <NavLink to="teacher-dashboard" className="text-nowrap">
          Dashboard
        </NavLink>
        }
      </li>
    </>
  );

  const [openMenu, setOpenMenu] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  console.log(searchBarOpen);

  return (
    <header className="fixed h-[3.8rem] w-full top-0 left-0 z-20 border-b border-border/70 font-bai bg-bg">
      <nav className="container px-2 sm:px-0 gap-2 h-full mx-auto flex justify-between items-center relative">
        {/* Logo and Search bar */}
        <div className="flex items-center gap-3">
          {/* Logo and Menu button for small devices */}
          <div className="flex items-center gap-1">
            {/* Menu button for small devices */}
            <div onClick={() => setOpenMenu(!openMenu)} className="md:hidden flex items-center">
              <button className="text-xl">
                {openMenu ? <RiMenuFoldLine /> : <RiMenuFold2Line />}
              </button>
            </div>

            {/* Logo */}
            <div>
              <Link to="/">
                <h1 className="font-bold text-2xl md:text-2xl font-inter">
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
            <button className="text-xl">
              <IoSearchOutline />
            </button>
          </div>
        </div>

        {/* search bar for small device */}
        <div
          className={`container mx-auto px-3 border-b absolute z-10 top-0 h-[3.8rem] flex gap-3 bg-bg transition-all duration-400 ease-in-out ${
            searchBarOpen ? "w-full left-0" : "w-0 left-[-300px]"
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
          className={`container mx-auto transition-all duration-400 ease-in-out md:hidden absolute top-[3.8rem] flex flex-col gap-5 list-none bg-bg h-screen ${
            openMenu ? "left-0 right-0" : "left-[-150%] right-[100%]"
          } font-semibold p-3`}
        >
          {links}
        </div>

        {/* nav links for large device and buttons*/}
        <div className="flex items-center gap-2 md:gap-3">
          {/* nav links for large device */}
          <div className="list-none gap-4 hidden md:flex flex-nowrap font-semibold">{links}</div>

          {/* buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Profile or Sign in */}
            {user && isAuthenticated ? (
              <div ref={profileMenuRef} className="relative">
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
                      <p className="whitespace-nowrap">Hi, {user?.userInfo?.userName}</p>
                      <p className="text-xs ">{user?.userInfo?.userEmail}</p>
                    </div>

                    <Link
                      onClick={() => setProfileMenu(false)}
                      to=""
                      className="text-sm bg-bg hover:bg-secondaryHover border border-border whitespace-nowrap w-full rounded-xl p-2 flex items-center  gap-2"
                    >
                      <span className="text-2xl">{/* <BiCreditCardFront /> */}</span>
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      onClick={() => setProfileMenu(false)}
                      to=""
                      className="text-sm bg-bg hover:bg-secondaryHover border border-border whitespace-nowrap w-full rounded-xl p-2 flex items-center  gap-2"
                    >
                      <span className="text-2xl">{/* <IoOptions /> */}</span>
                      <span>Manage account</span>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="text-sm bg-secondary hover:bg-secondaryHover text-primaryWhite border border-border whitespace-nowrap w-full rounded-xl p-2 flex items-center  gap-2"
                    >
                      <span className="text-2xl">{/* <IoExitOutline /> */}</span>
                      <span>Sign out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to="sign-in"
                className="bg-link hover:bg-linkHover text-textReversed hover:text-textReversed p-2 rounded-md font-medium w-full sm:w-fit text-center sm:text-start flex gap-1 items-center justify-center"
              >
                <span className="text-2xl">{/* <IoEnterOutline /> */}</span>
                <span>Sign In</span>
              </NavLink>
            )}

            {/* Search button  */}
            <button
              onClick={() => setSearchBarOpen(true)}
              className="text-xl sm:hidden md:flex lg:hidden p-2 text-text bg-accentOne hover:bg-accentOne/50 border border-border/25 rounded-full"
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
