import { Outlet } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
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
