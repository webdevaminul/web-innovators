import { Outlet } from "react-router-dom";

import { Slide, ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <main className="mt-[5rem]">
        <Outlet />
        <Footer></Footer>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </main>
  );
}

export default App;
