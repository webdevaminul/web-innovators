import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import AllCourses from "../pages/AllCourses/AllCourses";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import UserDashbroad from "../pages/UserDashBroad/UserDashbroad";

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
        path: "/course-details",
        element: <CourseDetails />,
      },
    ],
  },

  {
    path: "/userDeshbroad",
    element: <UserDashbroad></UserDashbroad>,
  },
]);
export default router;
