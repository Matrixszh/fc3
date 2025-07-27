"use client"; 
import React, { useEffect } from "react";
import Swiper from "swiper";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import Link from "next/link";

function CarouselHome() {
  
  //  Carousel
  useEffect(() => {
    if (typeof window !== "undefined") {
      const carouselSlider = new Swiper('.carousel-slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
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
        breakpoints: {
          1024: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 1
          },
          320: {
            slidesPerView: 1
          }
        }
      });
    }


  }, []); // Empty dependency array ensures useEffect runs only once on mount

//   background img for carousel
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
    <>
       <header className="carousel-hero">
          {/* Carousel Hero */}
            <div className="carousel-slider">
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide"
                  data-background="/assets/images/works07.jpg"
                >
                  <div className="inner">
                    <h2>ENJOY THE SHOW</h2>
                    <Link href="/utility/DiscoversliderMain/Discoverslider7">DISCOVER CASE</Link>
                  </div>
                  {/* end inner */}
                </div>
                {/* end swiper-slide */}
                <div
                  className="swiper-slide"
                  data-background="/assets/images/works08.jpg"
                >
                  <div className="inner">
                    <h2>BUILD YOUR WORLD</h2>
                    <Link href="/utility/DiscoversliderMain/Discoverslider8">DISCOVER CASE</Link>
                  </div>
                  {/* end inner */}
                </div>
                {/* end swiper-slide */}
                <div
                  className="swiper-slide"
                  data-background="/assets/images/works09.jpg"
                >
                  <div className="inner">
                    <h2>TECHNICAL SUPPORT</h2>
                    <Link href="/utility/DiscoversliderMain/Discoverslider9">DISCOVER CASE</Link>
                  </div>
                  {/* end inner */}
                </div>
                {/* end swiper-slide */}
                <div
                  className="swiper-slide"
                  data-background="/assets/images/works07.jpg"
                >
                  <div className="inner">
                    <h2>ENJOY THE SHOW</h2>
                    <Link href="/utility/DiscoversliderMain/Discoverslider7">DISCOVER CASE</Link>
                  </div>
                  {/* end inner */}
                </div>
                {/* end swiper-slide */}
                <div
                  className="swiper-slide"
                  data-background="/assets/images/works08.jpg"
                >
                  <div className="inner">
                    <h2>BUILD YOUR WORLD</h2>
                    <Link href="/utility/DiscoversliderMain/Discoverslider8">DISCOVER CASE</Link>
                  </div>
                  {/* end inner */}
                </div>
                {/* end swiper-slide */}
                <div
                  className="swiper-slide"
                  data-background="/assets/images/works09.jpg"
                >
                  <div className="inner">
                    <h2>TECHNICAL SUPPORT</h2>
                    <Link href="/utility/DiscoversliderMain/Discoverslider9">DISCOVER CASE</Link>
                  </div>
                  {/* end inner */}
                </div>
                {/* end swiper-slide */}
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
            {/* end carousel-slider */}
          </header>
     
    </>
  );
}

export default CarouselHome;
