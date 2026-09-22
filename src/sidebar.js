import React from 'react';
import Pop from './component/PopUp'

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
            <li className='mainli'> <img src={`${process.env.PUBLIC_URL}/photo/inline-svg-3.svg`} alt="SVG"/> <span className="label">New chat</span></li>
            <li className={`mainli  ${isOpen ? "lipop":""}`} ><img src={`${process.env.PUBLIC_URL}/photo/inline-svg-4.svg`} alt="SVG"/><span className="label">Search chats</span>
            <div  className="popup-container"><Pop
           
    firstColor="#7dcfea"
    secColor="#bc8aea"
    title="Search your chat history"
    explain="Log in to save conversations, search past answers, and pick up where you left off"
    
    /></div></li>
            <li className='mainli'><img src={`${process.env.PUBLIC_URL}/photo/inline-svg-5.svg`} alt="SVG"/><span className="label">Images</span></li>
            <li className='mainli'><img src={`${process.env.PUBLIC_URL}/photo/6.png`} /><span className="label">Plugins</span></li>
            <li className={`mainli  ${isOpen ? "lipop":""}`} ><img src={`${process.env.PUBLIC_URL}/photo/7.png`} /><span className="label">Deep research</span>
             <div  className="popup-container"><Pop
           
    firstColor="#05a5da"
    secColor="#5a06aa"
    title="Turn questions into research"
    explain="Log in to run multi-step research, compare sources, and save cited reports to revisit later."
    
    /></div></li>
          </ul></div>
          <div style={{marginTop:"auto", justifyContent:"flex-start" , borderTop: "1px solid #1A1A1A"}} >
            <ul >
            <li className='mainli'> <img src={`${process.env.PUBLIC_URL}/photo/inline-svg-15.svg`} alt="SVG"/> <span className="label">See plans and princing</span><img className={`img${isOpen ?  "show":"hide"}`}src={`${process.env.PUBLIC_URL}/photo/12.png`} style={{marginLeft: "auto"}}/></li>
            <li className='mainli'><img src={`${process.env.PUBLIC_URL}/photo/inline-svg-17.svg`} alt="SVG"/><span className="label">Settings</span></li>
            <li className='mainli'><img src={`${process.env.PUBLIC_URL}/photo/inline-svg-18.svg`} alt="SVG"/><span className="label">Help</span><img className={`img${isOpen ? "show":"hide"}`} src={`${process.env.PUBLIC_URL}/photo/12.png`} style={{marginLeft: "auto"}}/></li>           
          </ul></div>
          <div   className={isOpen ? 'reqOpen' : 'reqClosed'}>
            <h2>Get responses tailored to you</h2>
            <p>Log in to get answers based on saved chats, plus create images and upload files</p>
            <button>Log in</button>
          </div>
        </div>
        
        {/* ===== سایه پشت زمینه (Overlay) ===== */}
        {/* با کلیک روی سایه هم منو بسته میشه (اختیاری ولی خوبه) */}
        
  
      </div>
  )}
  export default Sidebar;