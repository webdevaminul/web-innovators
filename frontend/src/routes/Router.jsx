import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import AllCourses from "../pages/AllCourses/AllCourses";
import BlogPosts from "../pages/BlogPosts/BlogPosts";
import ContactPage from "../pages/ContactPage/ContactPage";
import BeInstructor from "../pages/BeInstructor/BeInstructor";
import EmailVerify from "../pages/Authentication/EmailVerify/EmailVerify";
import DashboardLayoutBasic from "../pages/UserDashboard/Dashboard/DashboardLayoutBasic";
import ErrorBoundary from "../pages/UserDashboard/ErrorBoundary/ErrorBoundary";
import BlogPostCreation from "../pages/BlogPosts/BlogPostForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />, // Add ErrorBoundary here
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
      {
        path:"/create-post",
        element:<BlogPostCreation></BlogPostCreation>,
       
      }
    ],
  },
  {
    path: "/userDeshbroad",
    element: <DashboardLayoutBasic />,
    errorElement: <ErrorBoundary />, // Add ErrorBoundary here as well
  },
]);

export default router;
