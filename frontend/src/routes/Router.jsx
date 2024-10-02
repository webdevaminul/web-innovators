import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import AllCourses from "../pages/AllCourses/AllCourses";
import BlogPosts from "../pages//BlogPosts/BlogPosts"
import UserDashbroad from "../pages/UserDashBroad/UserDashbroad";
import ContactPage from "../pages/ContactPage/ContactPage";
import BeInstructor from "../pages/BeInstructor/BeInstructor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/sign-in",
        element: <SignIn />,
      },

      {
        path: "/register",
        element: <SignUp />,
      },

      {
        path: "/allCourses",
        element: <AllCourses />,
      },
      {
        path: "/blog",
        element: <BlogPosts />,
      },
      {
        path: "/contactUs",
        element: <ContactPage />,
      },
      {
        path: "/become-instructor",
        element: <BeInstructor />,
      },
    ],
  },

  {
    path: "/userDeshbroad",
    element: <UserDashbroad />,
  },
]);
export default router;
