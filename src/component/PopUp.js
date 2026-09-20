import React, { useState } from 'react';

function Pop({
firstColor,secColor,title,explain}){
return(
    <>
   
         <style>
        {`
          .popupdiv{
                font-size:15px !important;
          }
        `}
      </style>
   

    <div className='popupdiv' style={{width:"315px", height:"315px",backgroundColor:"#212121",borderRadius:"15px",alignContent:"space-between", display:"flex",flexDirection:"column",overflow: "hidden",justifyContent:"space-between",fontSize:"16px" }}>
        <div style={{width:"315px", height:"130px",background: `linear-gradient(to right, ${firstColor}, ${secColor})`,padding:"10px",borderRadius:"15px 15px 0px 0px",flexShrink: 0}}>
        </div>
        <div style={{padding:"10px",fontWeight:"bolder",fontSize:"15px"}}><p>{title}</p></div>
        <div style={{padding:"10px" , width: "100%", boxSizing: "border-box",color:"#8a8a8a"}}><p style={{margin: 0, whiteSpace: "normal",overflowWrap: "break-word",wordBreak: "normal" ,fontSize:"15px"}}>{explain}</p></div>
        <div style={{padding:"20px",marginBottom:"5px"}}>
            <div style={{display:"flex", gap:"5px" ,right:"10px", marginRight:"10px"}} >
              <button style={{width:"65px", height:"30px",backgroundColor:"#E8E8E8", color:"black",borderRadius:"50px", border:"solid #E8E8E8 1px", fontWeight:"bold"}}>Log in</button>
              <button style={{width:"120px", height:"30px",backgroundColor:"#212121", color:"white",borderRadius:"50px", border:"solid #414141 1px", fontWeight:"bold" }}>Sign up for free</button>
            </div>
        </div>
    </div>
  </>
)


}


export default Pop;