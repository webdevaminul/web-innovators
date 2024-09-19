import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { Slide, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition={Slide}
    />
  </StrictMode>
);
