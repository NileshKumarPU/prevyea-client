import React from 'react';
import { useState,useEffect } from 'react';
import '../assets/css/MovingText.css'

const MovingText = (props) => {

    const [showAnimation, setShowAnimation] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowAnimation(false);
//     }, 30000); // 30 seconds

//     return () => clearTimeout(timer);
//   }, []);
  return (
    <div className="marquee-container">
      <div className={showAnimation ? 'marquee-text' : 'marquee-text stopped'}>
        {props.text}</div>
    </div>
  );
};

export default MovingText;
