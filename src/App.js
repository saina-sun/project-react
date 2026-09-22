import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Sidebar from './sidebar';
import Pop from './component/PopUp'
import HoverableIcon from './component/HoverableIcon';

function App() {
  
  
    // استیت برای مدیریت باز و بسته بودن
    const [isOpen, setIsOpen] = useState(false);

  
    const toggleMenu=()=>setIsOpen(!isOpen);

    const inputRef = useRef(null);

       useEffect(() => {
  inputRef.current.focus();
}, []);
    return (
      

      
         <>
     <div style={{display:"flex", width:"100%", minHeight:"100vh", height:"100dvh"}}>
      <div  style={{ position: "relative"}}className={`mobileSideBar${isOpen ? "hide":""}`} onClick={toggleMenu}><img src={`${process.env.PUBLIC_URL}/photo/32.png`} style={{ position: "absolute",left: "50%",transform: "translateX(-50%)"}}/><HoverableIcon style={{visibiliy:"hidden"}}tooltipText="Open sidebar"/></div>
       <Sidebar 
        isOpen={isOpen} 
        toggleMenu={toggleMenu} 
      
      />
     
      <main className={`main-content ${isOpen ? 'shifted' : ''}`}>
         <div  className="main-inner">
            <div className="top-title" style={{display:"flex",justifyContent:"space-between", width:"100%"}}>
              <div  className="lipop chattext" style={{display:"flex"}}>
                <p  style={{ fontSize: "15px", fontWeight: "bold", margin: 0 }}>ChatGPT</p>
                <img src={`${process.env.PUBLIC_URL}/photo/inline-svg-20.svg`} alt="SVG" className='mobile' style={{ width: "15px", height: "15px" }} />
                <div  className="popup-container"><Pop
           
    firstColor="#78a4ea"
    secColor="#f7f7f7"
    title="Try advanced features for free"
    explain="Get smarter responses, upload files, create images, and more by logging in."
    
    /></div>
              </div>
            
           
            <div style={{display:"flex", gap:"5px" ,right:"10px", marginRight:"10px",}} >
              <button className="login" style={{width:"65px", height:"50px",backgroundColor:"#E8E8E8", color:"black",borderRadius:"50px", border:"solid #E8E8E8 1px", fontWeight:"bold"}}>Log in</button>
              <button className='mobile' style={{width:"120px", height:"50px",backgroundColor:"#212121", color:"white",borderRadius:"50px", border:"solid #414141 1px", fontWeight:"bold" }}>Sign up for free</button>
            </div>
          </div>
               <p className="welcome-text">
            Where should we begin?
          </p>
            <div className="input-box" >
              <div className="plus"><img src={`${process.env.PUBLIC_URL}/photo/inline-svg-21.svg`} alt="SVG" style={{margin:"10px"}}/><HoverableIcon style={{visibiliy:"hidden"}}tooltipText="Add files and more"/> </div>
             
            <input
              className="main-input" type="text" ref={inputRef}
              placeholder="Ask ChatGpt..." ></input>
              
              
                <div style={{ display: "flex", alignItems: "center" }} >
                <div className="plus"><img src={`${process.env.PUBLIC_URL}/photo/inline-svg-22.svg`} alt="SVG" style={{margin:"0px 20px",width:"20px",height:"auto"}} /><HoverableIcon style={{visibiliy:"hidden"}}tooltipText="Start dictation"/>
             </div>
            <div className="plus send-button"><img src={`${process.env.PUBLIC_URL}/photo/inline-svg-23.svg`} alt="SVG" style={{margin:"20px"}}/><HoverableIcon style={{visibiliy:"hidden"}}tooltipText="send message"/> </div>
             
              </div>
             
              
                
             
          </div>
        </div>
       <p className="policy" style={{
  position: "absolute",
  bottom: "5px",
  left: "50%",
  transform: "translateX(-50%)",
  margin: 0,
  color: "#8a8a8a",
  fontSize: "12px",
  justifyContent:"center"
}}>
  ChatGPT is AI. By using it, you agree to our Terms & Privacy Policy. Chats may be reviewed and used to improve our AI models. Learn more
</p>
      </main>
      

     </div>

    
      
      </> 
    );
  }
export default App;
