import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { Slide, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition={Slide}
    />
=======
    <div className="max-w-screen-2xl m-auto">
      <RouterProvider router={router} />
    </div>
>>>>>>> 0678d17198ea3f9669a1aecb8234f492d8a98704
  </StrictMode>
);
