import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {

    
    if (!text){setDisplayedText(''); return};

    if (index < text.length) {
      const timeout = setTimeout(() => {
       
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  
  }, [index, text, speed]);

  return (
    <div className="whitespace-pre-wrap font-mono text-lg">
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default Typewriter;
