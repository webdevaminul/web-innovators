import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import AllCourses from "../pages/AllCourses/AllCourses";
import BlogPosts from "../pages//BlogPosts/BlogPosts";
import ContactPage from "../pages/ContactPage/ContactPage";
import BeInstructor from "../pages/BeInstructor/BeInstructor";
import TeacherDashboard from "../pages/TeacherDashboard/TeacherDashboard";
import TeacherProfile from "../pages/TeacherDashboard/TeacherProfile";
import TeacherHome from "../pages/TeacherDashboard/TeacherHome";
import CreateCourse from "../pages/TeacherDashboard/CreateCourse";
import ManageCourse from "../pages/TeacherDashboard/ManageCourse";
import EmailVerify from "../pages/Authentication/EmailVerify/EmailVerify";
import DashboardLayoutBasic from "../pages/UserDashboard/Dashboard/DashboardLayoutBasic";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AdminHome from "../pages/AdminDashboard/AdminHome";
import UserManage from "../pages/AdminDashboard/UserManage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
    ],
  },

  {
    path: "dashbroad/home",
    element: <DashboardLayoutBasic />,
  },
  {
    path: "teacher-dashboard",
    element: <TeacherDashboard />,
    children: [
      {
        index: true,
        element: <TeacherHome />,
      },
      {
        path: "profile",
        element: <TeacherProfile />,
      },
      {
        path: "manage-course",
        element: <ManageCourse />,
      },
      {
        path: "create-course",
        element: <CreateCourse />,
      },
    ],
  },
  {
    path: "admin-dashboard",
    element: <AdminDashboard />,
    children: [
      {
       
        path:"admin-home",
        element: <AdminHome />,
      },
      {
        path: "user-manage",
        element: <UserManage />,
      },
    ],
  },
]);
export default router;
