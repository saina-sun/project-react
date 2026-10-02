import React from 'react';
import Pop from './PopUp';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Sidebar({ isOpen, toggleMenu, closeMenu }) {
  return (

     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        
         
        {/* ===== سایدبار ===== */}
        <div className="sidebar-inner" style={{display: "flex", flexDirection: "column" }}>
          
          
          <div style={{ justifyContent:"flex-start"}} >
            <ul >
             <li style={{display:isOpen?"none":"flex" , marginBottom:"20px"}}><img src={`${process.env.PUBLIC_URL}/photo/13.png`} onClick={toggleMenu} style={{width: "18px",
height:" 18px" , position:" absolute",left: "50%",transform:" translateX(-50%)"}}></img></li>
            <li style={{display:isOpen?"flex":"none"}} ><div>
            <img  src={`${process.env.PUBLIC_URL}/photo/inline-svg-7.svg`} alt="SVG" className="close-btn" onClick={toggleMenu}  />
            <div></div>
          </div ></li>
            <li className='mainli'> <NavLink to="/newchat" className="main-link"><img src={`${process.env.PUBLIC_URL}/photo/inline-svg-3.svg`} alt="SVG"/> <span className="label">New chat</span></NavLink></li>
            <li className={`mainli  ${isOpen ? "lipop":""}`} ><NavLink to="/SearchChat"className="main-link"><img src={`${process.env.PUBLIC_URL}/photo/inline-svg-4.svg`} alt="SVG"/><span className="label">Search chats</span></NavLink>
            <div  className="popup-container"><Pop
           
    firstColor="#7dcfea"
    secColor="#bc8aea"
    title="Search your chat history"
    explain="Log in to save conversations, search past answers, and pick up where you left off"
    
    /></div></li>
            <li className='mainli'><NavLink to="/images" className="main-link"><img src={`${process.env.PUBLIC_URL}/photo/inline-svg-5.svg`} alt="SVG"/><span className="label">Images</span></NavLink></li>
            <li className='mainli'><NavLink to="/plugin" className="main-link"><img src={`${process.env.PUBLIC_URL}/photo/6.png`} /><span className="label">Plugins</span></NavLink></li>
            <li className={`mainli  ${isOpen ? "lipop":""}`} ><NavLink to="/deep-research"className="main-link"><img src={`${process.env.PUBLIC_URL}/photo/7.png`} /><span className="label">Deep research</span></NavLink>
             <div  className="popup-container"><Pop
           
    firstColor="#05a5da"
    secColor="#5a06aa"
    title="Turn questions into research"
    explain="Log in to run multi-step research, compare sources, and save cited reports to revisit later."
    
    /></div></li>
          </ul></div>
          <div style={{marginTop:"auto", justifyContent:"flex-start" , borderTop: "1px solid #1A1A1A"}} >
            <ul >
            <li className='mainli'><NavLink to="/plan"className="main-link"><img src={`${process.env.PUBLIC_URL}/photo/inline-svg-15.svg`} alt="SVG"/> <span className="label">See plans and princing</span><img className={`img${isOpen ?  "show":"hide"}`}src={`${process.env.PUBLIC_URL}/photo/12.png`} style={{marginLeft: "auto"}}/></NavLink></li>
            <li className='mainli'><NavLink to="/settings"className="main-link"><img src={`${process.env.PUBLIC_URL}/photo/inline-svg-17.svg`} alt="SVG"/><span className="label">Settings</span></NavLink></li>
            <li className='mainli'><NavLink to="/help"className="main-link"><img src={`${process.env.PUBLIC_URL}/photo/inline-svg-18.svg`} alt="SVG"/><span className="label">Help</span><img className={`img${isOpen ? "show":"hide"}`} src={`${process.env.PUBLIC_URL}/photo/12.png`} style={{marginLeft: "auto"}}/></NavLink></li>           
          </ul></div>
          <div   className={isOpen ? 'reqOpen' : 'reqClosed'}>
            <h2>Get responses tailored to you</h2>
            <p>Log in to get answers based on saved chats, plus create images and upload files</p>
            <button>Log in</button>
          </div>
        </div>
        
      
  
      </div>
  )}
  export default Sidebar;