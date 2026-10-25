import { NavLink } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
function Loginpage() {
  const inputRef = useRef(null);

       useEffect(() => {
  inputRef.current.focus();
}, []);
  return (
    <main style={{ width: "100%", height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "flex-start", alignContent: "flex-start", top: "5px", left: "5px" }}>
        <h2>ChatGPT</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column",  alignContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignContent: "center", fontSize: "30px", marginBottom: "10px" }}>
          <p>Log in or sign up</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px", gap: "5px", flexDirection: "column" }}>
          <div className="loginbtn">
            <div><img src={`${process.env.PUBLIC_URL}/photo/google.svg`} alt="SVG"  /></div>
            <div><p>countinue with google</p></div>
          </div>
          <div className="loginbtn">
            <div><img src={`${process.env.PUBLIC_URL}/photo/apple.png`} alt="SVG"  /></div>
            <div><p>countinue with Apple</p></div>
          </div>
          <div  className="loginbtn" >
            <div><img src={`${process.env.PUBLIC_URL}/photo/phone.png`} alt="SVG"  /></div>
            <div><p>countinue with phone</p></div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px",marginTop:"10px", width: "60%" }}>
            <div style={{ flex: 1, height: "0.5px", backgroundColor: "gray",weight:"100%",transform: "scaleY(0.5)" }}></div>
            <span style={{fontSize:"15px",fontWeight:"bold"}} >OR</span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "gray",transform: "scaleY(0.5)" }}></div>
          </div>
          <div>
            <div className="logininput">
              <input type="text" ref={inputRef}
              placeholder="Email address"></input>
            </div>
          </div>
          <div className="loginconbtn"><button>countinue</button></div>
          <NavLink className="textLink" to="/newchat"><p >Try it first</p></NavLink>

        </div>


        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",bottom:"2px",position:"fixed",left:"50%",transform: "translateX(-50%)"}}>
          <img style={{width:"40px",height:"auto"}} src={`${process.env.PUBLIC_URL}/photo/content_1.svg`} alt="SVG"  />
          <p >{<NavLink className="textLink">Terms of use</NavLink>} | {<NavLink className="textLink">Privacy policy</NavLink>}</p>
        </div>

      </div>

    </main>

  );
}

export default Loginpage;