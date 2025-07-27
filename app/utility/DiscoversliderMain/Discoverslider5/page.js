"use client";
import React, { useEffect, useState } from "react";
import "/public/assets/css/jsSlider.css";
// import "/public/assets/css/jsSliderWebFlow.css";
import Swiper from "swiper";
// // import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import Navbar from "@/components/Navbar";
// // register Swiper custom elements
register();
 
function noise() {
  let canvas, ctx;
  let wWidth, wHeight;
  let noiseData = [];
  let frame = 0;
  let loopTimeout;

  // Create Noise
  const createNoise = () => {
    const idata = ctx.createImageData(wWidth, wHeight);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;
    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.01) {
        buffer32[i] = 0xff000000;
      }
    }
    noiseData.push(idata);
  };

  // Play Noise
  const paintNoise = () => {
    if (frame === 9) {
      frame = 0;
    } else {
      frame++;
    }
    ctx.putImageData(noiseData[frame], 0, 0);
  };

  // Loop
  const loop = () => {
    paintNoise(frame);
    loopTimeout = window.setTimeout(() => {
      window.requestAnimationFrame(loop);
    }, 1000 / 25); 
  };

  // Setup
  const setup = () => {
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;
    canvas.width = wWidth;
    canvas.height = wHeight;
    for (let i = 0; i < 10; i++) {
      createNoise();
    }
    loop();
  };

  // Reset
  let resizeThrottle;
  const reset = () => {
    window.addEventListener(
      "resize",
      () => {
        window.clearTimeout(resizeThrottle);
        resizeThrottle = window.setTimeout(() => {
          window.clearTimeout(loopTimeout);
          setup();
        }, 200);
      },
      false
    );
  };

  // Init
  const init = () => {
    canvas = document.getElementById("noise");
    ctx = canvas.getContext("2d");
    setup();
    reset();
  };

  init();
}


function Page() {


    const [isToggled, setIsToggled] = useState(false);

    // removing margin botton 
    useEffect(() => {
      
    }, []);

    //  arrows buttons

    const handleButtonClick = () => {
      setIsToggled((prevToggled) => !prevToggled);
    };
  
    useEffect(() => {
      const toggleClasses = () => {
        if (isToggled) {
          document
            .querySelectorAll(".swiper-nav-btn")
            .forEach((target) => target.classList.add("show"));
          document
            .querySelectorAll(".control-btn")
            .forEach((target) => target.classList.add("active"));
        } else {
          document
            .querySelectorAll(".swiper-nav-btn")
            .forEach((target) => target.classList.remove("show"));
          document
            .querySelectorAll(".control-btn")
            .forEach((target) => target.classList.remove("active"));
        }
      };
  
      toggleClasses(); // Initial setup based on initial state
  
      // Cleanup: Remove event listeners on unmount
      return () => {
        // Cleanup code (if needed)
      };
    }, [isToggled]); // Dependency array ensures useEffect runs when isToggled changes

    // slider
    useEffect(() => {
        const slider = new Swiper(".swiper-container", {
          loopAdditionalSlides:1,
            effect: "coverflow", // Kind of slider effect
            centeredSlides: true, // Force centered slide
            slidesPerView: "auto", // auto = the slide itself defined the viewport of the slider
            allowTouchMove: true, // Allows more control options except Slide Next and Slide Prev
            speed: 1000, // Speed of the change animation
            loop: false, // Looping the slides
            mousewheel: true,// control the slider with mousewheel
            loopPreventsSliding:true, 
            navigation: {
              nextEl: ".next", // Class for the Next Slide Button
              prevEl: ".prev", // Class for the Previous Slide Button
            },
            coverflowEffect: {
              // Properties for the coverflow effect
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: true,
            }

        });
      

    }, []);

  //    // Noise effect initialization
  // useEffect(() => {
  //   noise();
  // }, []);

  useEffect(() => {
    // Function to add classes to HTML element
    const addClassesToHtml = () => {
      var n = document.documentElement,
        t = " w-mod-";
      n.className += t + "js";
      ("ontouchstart" in window ||
        (window.DocumentTouch && document instanceof DocumentTouch)) &&
        (n.className += t + "touch");
    };

      // Set margin bottom to zero
      document.body.style.marginBottom = "0";

      // Enable vertical scrolling
      document.body.style.overflowY = "hidden";
    

    // Call the function when component mounts
    addClassesToHtml();

    // Cleanup (if needed)
    return () => {
      // Cleanup code (if needed)
    };
  }, []); // Empty dependency array ensures this runs only once on mount



  return (
    <>
    <Navbar>
      <header className="page-header">

    <div className="slider-Wrapper">
      
      <div className="page-content">

        {/* Noise canvas */}
        <div className="noiser w-embed">
          <canvas id="noise" className="noise"></canvas>
        </div>

        {/* slider */}
        <div className="hero">
          <div className="clone-the-child-of-this">
            <div id="wheel-slider" className="wheel-slider">
              <div className="swiper-container js-slider-swiper">
              
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="#" className="slide-content w-inline-block">
                      <img
                        src="/assets/images/slider/slide-1.jpg"
                        loading="lazy"
                        sizes="30vw"
                        srcset="
                        /assets/images/slider/slide-1-p-500.jpeg 500w,
                        /assets/images/slider/slide-1-p-800.jpeg 800w,
                        /assets/images/slider/slide-1.jpg        934w
                      "
                        alt=""
                        className="slide-image"
                      />
                      <div className="slide-inner">
                        <div className="slide-text-wrap">
                          <div className="slide-category"></div>
                        </div>
                        <div className="slide-text-wrap">
                          <h2 className="slide-heading">Target Audience Identifying</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="slide-content w-inline-block">
                      <img
                        src="/assets/images/slider/slide-2.jpg"
                        loading="lazy"
                        sizes="30vw"
                        srcset="
                        /assets/images/slider/slide-2-p-500.jpeg 500w,
                        /assets/images/slider/slide-2-p-800.jpeg 800w,
                        /assets/images/slider/slide-2.jpg        934w
                      "
                        alt=""
                        className="slide-image"
                      />
                      <div className="slide-inner">
                        <div className="slide-text-wrap">
                          <div className="slide-category"></div>
                        </div>
                        <div className="slide-text-wrap">
                          <h2 className="slide-heading">A/B Testing Campaigns</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="slide-content w-inline-block">
                      <img
                        src="/assets/images/slider/slide-3.jpg"
                        loading="lazy"
                        sizes="30vw"
                        srcset="
                        /assets/images/slider/slide-3-p-500.jpeg 500w,
                        /assets/images/slider/slide-3-p-800.jpeg 800w,
                        /assets/images/slider/slide-3.jpg        934w
                      "
                        alt=""
                        className="slide-image"
                      />
                      <div className="slide-inner">
                        <div className="slide-text-wrap">
                          <div className="slide-category"></div>
                        </div>
                        <div className="slide-text-wrap">
                          <h2 className="slide-heading">Buying Strategy</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="slide-content w-inline-block">
                      <img
                        src="/assets/images/slider/slide-4.jpg"
                        loading="lazy"
                        sizes="30vw"
                        srcset="
                        /assets/images/slider/slide-4-p-500.jpeg 500w,
                        /assets/images/slider/slide-4-p-800.jpeg 800w,
                        /assets/images/slider/slide-4.jpg        934w
                      "
                        alt=""
                        className="slide-image"
                      />
                      <div className="slide-inner">
                        <div className="slide-text-wrap">
                          <div className="slide-category"></div>
                        </div>
                        <div className="slide-text-wrap">
                          <h2 className="slide-heading">Search Engine Optimization</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="slide-content w-inline-block">
                      <img
                        src="/assets/images/slider/slide-5.jpg"
                        loading="lazy"
                        sizes="30vw"
                        srcset="
                        /assets/images/slider/slide-5-p-500.jpeg 500w,
                        /assets/images/slider/slide-5-p-800.jpeg 800w,
                        /assets/images/slider/slide-5.jpg        934w
                      "
                        alt=""
                        className="slide-image"
                      />
                      <div className="slide-inner">
                        <div className="slide-text-wrap">
                          <div className="slide-category"></div>
                        </div>
                        <div className="slide-text-wrap">
                          <h2 className="slide-heading">Search Engine Marketing</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="slide-content w-inline-block">
                      <img
                        src="/assets/images/slider/slide-1.jpg"
                        loading="lazy"
                        sizes="30vw"
                        srcset="
                        /assets/images/slider/slide-1-p-500.jpeg 500w,
                        /assets/images/slider/slide-1-p-800.jpeg 800w,
                        /assets/images/slider/slide-1.jpg        934w
                      "
                        alt=""
                        className="slide-image"
                      />
                      <div className="slide-inner">
                        <div className="slide-text-wrap">
                          <div className="slide-category"></div>
                        </div>
                        <div className="slide-text-wrap">
                          <h2 className="slide-heading">Pay-Per-Click Ads</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="slide-content w-inline-block">
                      <img
                        src="/assets/images/slider/slide-5.jpg"
                        loading="lazy"
                        sizes="30vw"
                        srcset="
                        /assets/images/slider/slide-5-p-500.jpeg 500w,
                        /assets/images/slider/slide-5-p-800.jpeg 800w,
                        /assets/images/slider/slide-5.jpg        934w
                      "
                        alt=""
                        className="slide-image"
                      />
                      <div className="slide-inner">
                        <div className="slide-text-wrap">
                          <div className="slide-category"></div>
                        </div>
                        <div className="slide-text-wrap">
                          <h2 className="slide-heading">Lead Generation Ads</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="slide-content w-inline-block">
                      <img
                        src="/assets/images/slider/slide-2.jpg"
                        loading="lazy"
                        sizes="30vw"
                        srcset="
                        /assets/images/slider/slide-2-p-500.jpeg 500w,
                        /assets/images/slider/slide-2-p-800.jpeg 800w,
                        /assets/images/slider/slide-2.jpg        934w
                      "
                        alt=""
                        className="slide-image"
                      />
                      <div className="slide-inner">
                        <div className="slide-text-wrap">
                          <div className="slide-category"></div>
                        </div>
                        <div className="slide-text-wrap">
                          <h2 className="slide-heading">Conversion Ads</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-navigation">
                <a href="#" className="swiper-nav-btn prev w-inline-block">
                  <div className="swiper-nav-btn-icon w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M10.3637 17.9125L6.85085 14.4183H22.7143C23.4244 14.4183 24 13.8458 24 13.1394V11.8606C24 11.1542 23.4244 10.5817 22.7143 10.5817H6.85085L10.3637 7.08752C10.8659 6.58806 10.8659 5.77832 10.3637 5.27892L9.45458 4.37459C8.95245 3.87514 8.13838 3.87514 7.63631 4.37459L0.376593 11.5957C-0.125531 12.0951 -0.125531 12.9048 0.376593 13.4043L7.63631 20.6254C8.13844 21.1249 8.95251 21.1249 9.45458 20.6254L10.3637 19.7211C10.8659 19.2217 10.8659 18.4119 10.3637 17.9125Z"
                      />
                    </svg>
                  </div>
                </a>
                <a href="#" className="swiper-nav-btn next w-inline-block">
                  <div className="swiper-nav-btn-icon w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M13.6363 7.08752L17.1492 10.5817H1.28572C0.575625 10.5817 0 11.1542 0 11.8606V13.1394C0 13.8458 0.575625 14.4183 1.28572 14.4183H17.1492L13.6363 17.9125C13.1342 18.4119 13.1342 19.2217 13.6363 19.7211L14.5455 20.6254C15.0476 21.1249 15.8617 21.1249 16.3637 20.6254L23.6234 13.4043C24.1255 12.9048 24.1255 12.0951 23.6234 11.5957L16.3637 4.37459C15.8616 3.87514 15.0475 3.87514 14.5455 4.37459L13.6363 5.27892C13.1342 5.77832 13.1342 6.58806 13.6363 7.08752V7.08752Z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="controls">
            <div onClick={handleButtonClick}  className="control-btn">
              <div className="icon-show-slider-nav w-embed">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 39 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M10.3637 13.9125L6.85081 10.4183L22.7143 10.4183C23.4244 10.4183 24 9.84575 24 9.13944L24 7.86056C24 7.15425 23.4244 6.58168 22.7143 6.58168L6.85081 6.58168L10.3637 3.08752C10.8658 2.58806 10.8658 1.77832 10.3637 1.27892L9.45455 0.37459C8.95242 -0.124865 8.13835 -0.124865 7.63628 0.37459L0.376595 7.59572C-0.125531 8.09518 -0.125531 8.90492 0.376594 9.40432L7.63628 16.6254C8.1384 17.1249 8.95247 17.1249 9.45454 16.6254L10.3637 15.7211C10.8658 15.2217 10.8658 14.4119 10.3637 13.9125V13.9125Z"
                  />
                  <path
                    fill="currentColor"
                    d="M28.6363 11.0875L32.1492 14.5817L16.2857 14.5817C15.5756 14.5817 15 15.1542 15 15.8606L15 17.1394C15 17.8458 15.5756 18.4183 16.2857 18.4183L32.1492 18.4183L28.6363 21.9125C28.1341 22.4119 28.1341 23.2217 28.6363 23.7211L29.5454 24.6254C30.0475 25.1249 30.8616 25.1249 31.3637 24.6254L38.6234 17.4043C39.1255 16.9049 39.1255 16.0952 38.6234 15.5957L31.3637 8.37459C30.8616 7.87514 30.0475 7.87514 29.5454 8.37459L28.6363 9.27892C28.1341 9.77832 28.1341 10.5881 28.6363 11.0875Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </header>
    </Navbar>
    </>
  );
}

export default Page;
