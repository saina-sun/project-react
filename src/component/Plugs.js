import React, { useState } from 'react';

function Plugs({
image,title,explain}){
return(
    <>
   
   <div className="plugs" style={{width:"100%",height:"auto",display:"flex",flexDirection:"row",borderRadius:"20px",justifyContent:"space-between",padding:"5px",fontSize:"10px",boxSizing:"border-box",minWidth: "350px",flexShrink: 0}}>
        <div style={{display:"flex",flexDirection:"row",gap:"3px"}}>
           <div><img style={{width:"45px",height:"45px",border:"solid gray 1px",borderRadius:"15px",margin:"5px"}}  src={`${process.env.PUBLIC_URL}/photo/${image}`}  /></div>
           <div style={{alignContent:"center",alignContent: "center",  flexShrink: 0 }}>
              <h2>{title}</h2>
              <p>{explain}</p>
           </div>
        </div>
        <div className='plus' style={{alignContent:"center",justifyContent:"center",padding:"10px"}}>  
       <img  src={`${process.env.PUBLIC_URL}/photo/inline-svg-21.svg`} alt="SVG" style={{width:"20px",height:"20px",alignContent:"center"}}/>
        </div>
      </div>
  </>
)


}


export default Plugs;