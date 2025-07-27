"use client";

import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Swiper from "swiper";
import { register } from 'swiper/element/bundle';
import Splitting from "splitting";
import {WOW} from 'wowjs';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "/public/assets/css/style.css";
import 'animate.css';

export default function AboutComponent() {
  // Initialize animations
  useEffect(() => {
    if (typeof window !== "undefined") {
      register();
      Splitting();
      const wow = new WOW({
        animateClass: 'animated',
        offset: 50,
        live: false
      });
      wow.init();
    }
  }, []);

  // Slider functionality
  useEffect(() => {
    if (typeof window !== "undefined") {
      const sliderthumbs = new Swiper('.about-gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 3,
      });

      const slider = new Swiper('.about-gallery-top', {
        spaceBetween: 0,
        autoplay: {
          delay: 9500,
          disableOnInteraction: false,
        },
        loop: true,
        loopedSlides: 3,
        thumbs: {
          swiper: sliderthumbs
        }
      });

      const aboutSlider = new Swiper('.about-office-slider', {
        slidesPerView: '1',
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  }, []);

  // Background images
  useEffect(() => {
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
      <Navbar>
        <header className="slider">
          <div className="swiper-container about-gallery-top">
            <div className="swiper-wrapper">
              <div className="swiper-slide" data-background="/assets/images/slide01.jpg"></div>
              <div className="swiper-slide" data-background="/assets/images/slide02.jpg"></div>
              <div className="swiper-slide" data-background="/assets/images/office01.jpg"></div>
            </div>
          </div>
          <div className="swiper-container about-gallery-thumbs">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <span>ABOUT US</span> <a href="/about">OUR STORY</a>
              </div>
              <div className="swiper-slide">
                <span>EXPERIENCE</span> <a href="/about">OUR JOURNEY</a>
              </div>
              <div className="swiper-slide">
                <span>EXPERTISE</span> <a href="/about">OUR TEAM</a>
              </div>
            </div>
          </div>
        </header>
      </Navbar>

      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow" data-splitting>
              <h3 className="section-title">ABOUT CROSSFIRE<br />
                FIRE PROTECTION</h3>
              <a href="mailto:contact@crossfire.com">contact@crossfire.com</a>
            </div>
            <div className="col-lg-7 wow" data-splitting>
              <p>Crossfire has been providing comprehensive fire safety solutions since 2000.
                Our team of certified fire protection engineers and consultants specialize in designing,
                implementing, and maintaining fire safety systems.</p>
              <h6>Crossfire Team</h6>
              <small>Fire Protection Engineers</small> <b>25+</b>
              <h4>YEARS OF<br />
                FIRE SAFETY EXPERIENCE</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-image">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about-office-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <figure className="reveal-effect masker wow">
                      <img src="/assets/images/office01.jpg" alt="Image" />
                      <figcaption>
                        <h6>CROSSFIRE HEADQUARTERS</h6>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className='reveal-effect masker wow'>
                      <img src="/assets/images/office02.jpg" alt="Image" />
                      <figcaption>
                        <h6>FIRE SAFETY TRAINING CENTER</h6>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className='reveal-effect masker wow'>
                      <img src="/assets/images/office03.jpg" alt="Image" />
                      <figcaption>
                        <h6>ENGINEERING LABORATORY</h6>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="icon-content-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 wow" data-splitting>
              <h3 className="section-title">
                WHY CHOOSE<br />
                CROSSFIRE PROTECTION
              </h3>
            </div>
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon01.png" alt="Image" />
                </figure>
                <h6>25+ YEARS EXPERIENCE</h6>
                <ul>
                  <li>Fire Protection Engineering</li>
                  <li>Safety Consulting</li>
                  <li>Code Compliance</li>
                  <li>Industry Leadership</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block selected">
                <figure>
                  <img src="/assets/images/icon02.png" alt="Image" />
                </figure>
                <h6>CERTIFIED PROFESSIONALS</h6>
                <ul>
                  <li>Licensed Engineers</li>
                  <li>Safety Consultants</li>
                  <li>Trained Technicians</li>
                  <li>Ongoing Education</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon03.png" alt="Image" />
                </figure>
                <h6>COMPREHENSIVE SOLUTIONS</h6>
                <ul>
                  <li>Design & Engineering</li>
                  <li>Installation Services</li>
                  <li>Maintenance & Support</li>
                  <li>Training Programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
