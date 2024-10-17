import { Outlet } from "react-router-dom";

import { Slide, ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import BottomToTop from "./utils/BottomToTop";
import useAllCourse from "./api/useAllCourse";
import useAllUser from "./api/useAllUser";
import Loader from "./utils/Loader";

function App() {
  const { isLoading } = useAllCourse();
  const { isLoading: loading } = useAllUser();
  if (isLoading || loading) return <Loader />;
  return (
    <>
      <Navbar />
      <main className="mt-[3.8rem]">
        <Outlet />
        <Footer />
        <BottomToTop />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover
        transition={Slide}
      />
    </>
  );
}

export default App;
