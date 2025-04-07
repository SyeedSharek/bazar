import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./pages/frontend/header/Header";
import Navbar from "./pages/frontend/navbar/Navbar";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      {/* footer will be here */}
    </>
  );
}

export default App;
