"use client";

import React, { useEffect } from 'react';

import Splitting from "splitting";
import {WOW} from 'wowjs';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "/public/assets/css/style.css";
import 'animate.css';
import Swiper from "swiper";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const UserExperience = () => {
    // splitting and wow
    useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      // Initialize Splitting.js
      Splitting();

          // Initialize WOW.js
          const wow = new WOW({
            animateClass: 'animated',
            offset: 50,
            live: false
          });
          wow.init();

        //   // Manually call wow.sync() to ensure WOW.js detects DOM changes
        //   wow.sync();
    }
  }, []);

    useEffect(() => {
      const carouselSlider = new Swiper('.office-slider', {
        slidesPerView: '1',
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

     
    }, []);

  return (
    <>
    {/* intro start */}
    <section className="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 wow" data-splitting>
            <h3 className="section-title">YOUR TRUSTED<br />
              FIRE SAFETY PARTNER</h3>
            <a href="mailto:contact@crossfire.com">contact@crossfire.com</a>
          </div>
          {/* end col-5 */}
          <div className="col-lg-7 wow" data-splitting>
            <p>Fire protection engineering and consultants -
              providing comprehensive fire safety solutions since 2000.</p>
            <h6>Crossfire Team</h6>
            <small>Fire Protection Engineers</small> <b>25+</b>
            <h4>YEARS OF<br />
              FIRE SAFETY EXPERIENCE</h4>
          </div>
          {/* end col-7 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>

{/* intro img start */}
    <section className="intro-image  ">
  <div className="container ">
    <div className="row">
      <div className="col-12">
        <div className="office-slider ">
          <div className="swiper-wrapper">
            <div className="swiper-slide ">
              <figure className="reveal-effect masker wow">
                <img src="/assets/images/office01.jpg" alt="Image" />
                <figcaption>
                  <h6>CROSSFIRE HEADQUARTERS</h6>
                </figcaption>
              </figure>
            </div>
            {/* end swiper-slide */}
            <div className="swiper-slide">
              <figure className='reveal-effect masker wow'>
                <img src="/assets/images/office02.jpg" alt="Image" />
                <figcaption>
                  <h6>FIRE SAFETY TRAINING CENTER</h6>
                </figcaption>
              </figure>
            </div>
            {/* end swiper-slide */}
            <div className="swiper-slide">
              <figure className='reveal-effect masker wow'>
                <img src="/assets/images/office03.jpg" alt="Image" />
                <figcaption>
                  <h6>ENGINEERING LABORATORY</h6>
                </figcaption>
              </figure>
            </div>
            {/* end swiper-slide */}
          </div>
          {/* end swiper-wrapper */}
          <div className="swiper-pagination"></div>
          {/* end swiper-pagination */}
        </div>
        {/* end office-slider */}
      </div>
      {/* end col-12 */}
    </div>
    {/* end row */}
  </div>
  {/* end container */}
    </section>
{/* end intro-image */}

    
    </>
  );
};

export default UserExperience;
