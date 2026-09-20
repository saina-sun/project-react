// src/component/HoverableIcon.jsx
import React, { useState } from 'react';


function HoverableIcon({ 
  
       
  alt = 'icon',   
  width="17px",
  height="16px",
  margin= '0',   // برای وسط‌چین کردن
  padding='0',
  className = '',
  onClick, 
  tooltipText = '',     // <-- اضافه کن
  tooltipStyle = {} ,       // <-- پراپ onClick رو اضافه کردیم
  style = {}      // برای استایل‌های اضافی
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={className}
      onClick={onClick}  // <-- پاس دادن onClick به div بیرونی
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'absolute',
        cursor: 'pointer',
        margin: '0',   // برای وسط‌چین کردن
             padding:'0',
        width: width,
        height: height,
        ...style, // ترکیب با استایل‌های ورودی
      }}
    >
      {/* ===== دیو سمت راست ===== */}
{isHovered && tooltipText && (
  <div
    style={{
      position: 'absolute',
      top: 'calc(100% + 25px)',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#212121',
      color: '#fff',
       border:" 1px solid #5d5d5d",
       borderRadius:"20px",
      padding: '8px 14px',
      fontSize: '10px',
       fontWeight: 'bold',
      whiteSpace: 'nowrap',
      zIndex: 1000,
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      ...tooltipStyle,
    }}
  >
    {tooltipText}
    
    
    
  </div>
)}
      
    </div>
  );
}

export default HoverableIcon;