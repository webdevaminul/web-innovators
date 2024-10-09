import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import AllCourses from "../pages/AllCourses/AllCourses";
import BlogPosts from "../pages//BlogPosts/BlogPosts";
import ContactPage from "../pages/ContactPage/ContactPage";
import BeInstructor from "../pages/BeInstructor/BeInstructor";
import EmailVerify from "../pages/Authentication/EmailVerify/EmailVerify";
import DashboardLayoutBasic from "../pages/UserDashboard/Dashboard/DashboardLayoutBasic";
import ManageAccount from "../pages/AccountManagement/ManageAccount";
import Overview from "../pages/AccountManagement/Overview";
import UpdateProfile from "../pages/AccountManagement/UpdateProfile";
import ChangePassword from "../pages/AccountManagement/ChangePassword";
import DeleteAccount from "../pages/AccountManagement/DeleteAccount";

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
        path: "/sign-up",
        element: <SignUp />,
      },

      {
        path: "/email-verify",
        element: <EmailVerify />,
      },
      {
        path: "/manage-account",
        element: <ManageAccount />,
        children: [
          {
            path: "/manage-account/overview",
            element: <Overview />,
          },
          {
            path: "/manage-account/manage-profile",
            element: <UpdateProfile />,
          },
          {
            path: "/manage-account/change-password",
            element: <ChangePassword />,
          },
          {
            path: "/manage-account/delete-account",
            element: <DeleteAccount />,
          },
        ],
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
    element: <DashboardLayoutBasic></DashboardLayoutBasic>,
  },
]);
export default router;
