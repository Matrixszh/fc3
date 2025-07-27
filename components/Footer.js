"use client"
import React, { useEffect } from 'react'
import "/public/assets/css/style.css";


function Footer() {
    useEffect(() => {
        const setFooterHeight = () => {
          const footerHeight = document.querySelector('.footer').offsetHeight;
          document.body.style.marginBottom = `${footerHeight}px`;
        };
    
        setFooterHeight();
        window.addEventListener('resize', setFooterHeight);
    
        // Cleanup listener on component unmount
        return () => {
          window.removeEventListener('resize', setFooterHeight);
        };
      }, []);
  return (
    <div>
      <>
      <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            </ul>
            <h6>LET’S HAVE A TALK ABOUT YOUR PROJECT.</h6>
            <h2>
              Need more information or want <br />
              to get in touch?
            </h2>
            <a href="#" className="link">Get in touch</a>
          </div>
          {/* end col-12 */}
          <div className="col-12">
            <div className="footer-bar">
              <span className="copyright">© 2023 Tourog | All Rights Reserved</span>
              <span className="creation">Site created by <a href="#">Themezinho</a></span>
            </div>
            {/* end footer-bar */}
          </div>
          {/* end col-12 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </footer>
      </>
    </div>
  )
}

export default Footer
