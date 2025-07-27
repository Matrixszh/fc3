import React, { useEffect } from 'react'
import Swiper from "swiper";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

function SliderHome() {
     //  slider

     useEffect(() => {
    
        const sliderthumbs = new Swiper('.gallery-thumbs', {
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 3,
          touchRatio: 0.2,
          slideToClickedSlide: true,
          loop: true,
          loopedSlides: 3,
          breakpoints: {
            1024: {
              slidesPerView: 3
            },
            768: {
              slidesPerView: 1
            },
            640: {
              slidesPerView: 1
            },
            320: {
              slidesPerView: 1
            }
          }
        });
    
    
        const slider = new Swiper('.gallery-top', {
          spaceBetween: 0,
          autoplay: {
            delay: 9500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
          loop: true,
          loopedSlides: 3,
          thumbs: {
            swiper: sliderthumbs
          }
        });
      
        // return () => {
        //   slider.destroy(); // Clean up Swiper instance on unmount
        // };
      }, []);
    
      //   background img for slider
useEffect(() => {
  // Background image setup - only run on client side
  if (typeof window !== "undefined") {
    const pageSections = document.querySelectorAll(".swiper-slide");
    pageSections.forEach(slide => {
      const backgroundUrl = slide.getAttribute("data-background");
      if (backgroundUrl) {
        slide.style.backgroundImage = `url(${backgroundUrl})`;
      }
    });
  }
}, []);
  return (

      <header className="slider">
          {/* slider*/}
      <div className="swiper-container gallery-top">
        <div className="swiper-wrapper">
          <div className="swiper-slide" data-background="/assets/images/slide01.jpg"></div>
          <div className="swiper-slide">
            <video src="/assets/videos/video01.mp4" muted autoPlay loop></video>
          </div>
          <div className="swiper-slide" data-background="/assets/images/slide02.jpg"></div>
        </div>
        {/* end swiper-wrapper */}
        <div className="slide-progress">
          <span>01</span>
          <div className="swiper-pagination"></div>
          <span>03</span>
        </div>
        {/* end slide-progress */}
        <div className="swiper-button-prev">PREV</div>
        {/* end button-prev */}
        <div className="swiper-button-next">NEXT</div>
        {/* end button-next */}
      </div>
      {/* end gallery-top */}
      <div className="swiper-container gallery-thumbs">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <span>DISCOVER</span> <a href="/DiscoverSlider">DISCOVER CASE</a>
          </div>
          <div className="swiper-slide">
            <span>EXCLUSION</span> <a href="/DiscoverSlider">DISCOVER CASE</a>
          </div>
          <div className="swiper-slide">
            <span>EDITIONAL</span> <a href="/DiscoverSlider">DISCOVER CASE</a>
          </div>
        </div>
        {/* end swiper-wrapper */}
      </div>
      {/* end gallery-thumbs */}
          </header>
   
  )
}

export default SliderHome
