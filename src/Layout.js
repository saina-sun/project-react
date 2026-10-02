import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./component/sidebar";
import './App.css';
function Layout() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app-wrapper">

      <Sidebar
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />

      <main className={`main-content ${isOpen ? "shifted" : ""}`}>

        <div className="main-inner">

          <Outlet />

        </div>

      </main>

    </div>
  );
}

export default Layout;