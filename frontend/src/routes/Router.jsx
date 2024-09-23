import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import AllCourses from "../pages/AllCourses/AllCourses";
import CourseDetails from "../pages/CourseDetails/CourseDetails";


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
        path: "/register",
        element: <SignUp />,
      },

      {
        path: "/register",
        element: <SignUp />,
      },

      {
        path: "/allCourses",
        element: <AllCourses></AllCourses>
      },
      {
        path: '/course-details',
        element: <CourseDetails />
      }

    ],
  },
]);
export default router;
