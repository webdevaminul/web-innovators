import { Outlet } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";

function App() {
  return (
    <main>
      {/* navbar */}
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
