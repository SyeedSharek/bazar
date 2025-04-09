import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./pages/frontend/header/Header";
import Navbar from "./pages/frontend/navbar/Navbar";
import Main_Footer from "./pages/frontend/footer/Main_Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Main_Footer />
      {/* footer will be here */}
    </>
  );
}

export default App;
