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
import TeacherDashboard from "../pages/TeacherDashboard/TeacherDashboard";
import TeacherProfile from "../pages/TeacherDashboard/TeacherProfile";
import TeacherHome from "../pages/TeacherDashboard/TeacherHome";
import CreateCourse from "../pages/TeacherDashboard/CreateCourse";

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
    path: "/user-dashboard",
    element: <UserDashbroad />,
  },
  {
    path: "teacher-dashboard",
    element: <TeacherDashboard />,
    children : [
      {
        index :true ,
        element : <TeacherHome />
      },
      {
        path : "teacher-profile",
        element : <TeacherProfile />
      },
      {
        path : "/teacher-dashboard/create-course",
        element : <CreateCourse />
      },
    ]
  },
]);
export default router;
