import { Outlet } from "react-router-dom";
import Footer from "./Section/Footer/Footer";

function App() {
  return (
    <main>
      <Outlet />
      <Footer></Footer>
    </main>
  );
}

export default App;
