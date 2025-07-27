'use client';

import React, { useEffect, useRef } from 'react';
import '/public/assets/css/enterypoint.css';
import { useRouter } from 'next/navigation';

const MyComponent = () => {
  const router = useRouter();
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      if (backgroundRef.current) {
        backgroundRef.current.style.transformOrigin = `${x}% ${y}%`;
      }
    };

    const handleMouseOver = () => {
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = 'scale(1.1)';
      }
    };

    const handleMouseOut = () => {
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = 'scale(1)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return ( 
    <div className='entrypoint-wrapper'>
      <div className="background" ref={backgroundRef}></div>
      <div className="centered-button">
        <button className='button-entryPoint' type='button' onClick={() => router.push('/home')}>Click Me</button>
      </div>
    </div>
  );
};

export default MyComponent;
