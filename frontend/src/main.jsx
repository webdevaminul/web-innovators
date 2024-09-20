import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen-2xl m-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
