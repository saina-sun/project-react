import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./component/sidebar";
import './App.css';
import HoverableIcon from './component/HoverableIcon';
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
       <div  style={{ position: "relative"}}className={`mobileSideBar${isOpen ? "hide":""}`} onClick={toggleMenu}><img src={`${process.env.PUBLIC_URL}/photo/32.png`} style={{ position: "absolute",left: "50%",transform: "translateX(-50%)"}}/><HoverableIcon style={{visibiliy:"hidden"}}tooltipText="Open sidebar"/></div>
       

      <main className={`main-content ${isOpen ? "shifted" : ""}`}>

        <div className="main-inner">

          <Outlet />

        </div>

      </main>

    </div>
  );
}

export default Layout;