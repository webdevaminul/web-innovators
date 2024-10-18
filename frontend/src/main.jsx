import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the styles

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <RouterProvider router={router} />
            <ToastContainer /> {/* Move here for better context */}
          </HelmetProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
