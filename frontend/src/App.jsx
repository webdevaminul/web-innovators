import { Outlet } from "react-router-dom";

import { Slide, ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "./utils/Preloader";

function App() {
  return (
    <>
    <Preloader />
      <Navbar />
      <main className="mt-[3.8rem]">
        <Outlet />
        <Footer />
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
