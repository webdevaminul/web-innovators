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
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AdminHome from "../pages/AdminDashboard/AdminHome";
import UserManage from "../pages/AdminDashboard/UserManage";
import ManageAccount from "../pages/AccountManagement/ManageAccount";
import Overview from "../pages/AccountManagement/Overview";
import UpdateProfile from "../pages/AccountManagement/UpdateProfile";
import ChangePassword from "../pages/AccountManagement/ChangePassword";
import DeleteAccount from "../pages/AccountManagement/DeleteAccount";

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
        path: "/course-details/:id",
        element: <CourseDetails />,
        loader: () => fetch("./courses.json"),
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
        element: (
          <PrivateRouter>
            <BeInstructor />
          </PrivateRouter>
        ),
      },
    ],
  },

  {
    path: "dashbroad/home",
    element: (
      <PrivateRouter>
        <DashboardLayoutBasic />
      </PrivateRouter>
    ),
  },
  {
    path: "teacher-dashboard",
    element: (
      <PrivateRouter>
        <TeacherDashboard />
      </PrivateRouter>
    ),
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
    element: (
      <PrivateRouter>
        {" "}
        <AdminDashboard />{" "}
      </PrivateRouter>
    ),
    children: [
      {
        path: "admin-home",
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
