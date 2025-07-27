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

export default function ContactComponent() {
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
      const sliderthumbs = new Swiper('.contact-gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 3,
      });

      const slider = new Swiper('.contact-gallery-top', {
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

      const contactSlider = new Swiper('.contact-office-slider', {
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
          <div className="swiper-container contact-gallery-top">
            <div className="swiper-wrapper">
              <div className="swiper-slide" data-background="/assets/images/office01.jpg"></div>
              <div className="swiper-slide" data-background="/assets/images/office02.jpg"></div>
              <div className="swiper-slide" data-background="/assets/images/office03.jpg"></div>
            </div>
          </div>
          <div className="swiper-container contact-gallery-thumbs">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <span>CONTACT</span> <a href="/contact">GET IN TOUCH</a>
              </div>
              <div className="swiper-slide">
                <span>SUPPORT</span> <a href="/contact">GET IN TOUCH</a>
              </div>
              <div className="swiper-slide">
                <span>EMERGENCY</span> <a href="/contact">GET IN TOUCH</a>
              </div>
            </div>
          </div>
        </header>
      </Navbar>

      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow" data-splitting>
              <h3 className="section-title">GET IN TOUCH<br />
                FIRE SAFETY EXPERTS</h3>
              <a href="mailto:contact@crossfire.com">contact@crossfire.com</a>
            </div>
            <div className="col-lg-7 wow" data-splitting>
              <p>Contact Crossfire today for comprehensive fire protection engineering
                and consulting services. Our certified experts are ready to help.</p>
              <h6>Crossfire Contact</h6>
              <small>Fire Protection Experts</small> <b>24/7</b>
              <h4>EMERGENCY<br />
                SUPPORT AVAILABLE</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-image">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-office-slider">
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
                        <h6>CUSTOMER SERVICE CENTER</h6>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className='reveal-effect masker wow'>
                      <img src="/assets/images/office03.jpg" alt="Image" />
                      <figcaption>
                        <h6>EMERGENCY RESPONSE UNIT</h6>
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
                CONTACT<br />
                INFORMATION
              </h3>
            </div>
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon01.png" alt="Image" />
                </figure>
                <h6>PHONE & EMERGENCY</h6>
                <ul>
                  <li><a href="tel:+1-555-FIRE-911">+1 (555) FIRE-911</a></li>
                  <li><a href="tel:+1-555-347-3911">+1 (555) 347-3911</a></li>
                  <li><a href="tel:+1-555-EMERGENCY">Emergency Line</a></li>
                  <li>24/7 Support Available</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block selected">
                <figure>
                  <img src="/assets/images/icon02.png" alt="Image" />
                </figure>
                <h6>EMAIL & ONLINE</h6>
                <ul>
                  <li><a href="mailto:contact@crossfire.com">contact@crossfire.com</a></li>
                  <li><a href="mailto:emergency@crossfire.com">emergency@crossfire.com</a></li>
                  <li><a href="mailto:services@crossfire.com">services@crossfire.com</a></li>
                  <li>Online Support Portal</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon03.png" alt="Image" />
                </figure>
                <h6>OFFICE LOCATIONS</h6>
                <ul>
                  <li>123 Fire Safety Lane</li>
                  <li>Protection Plaza, Suite 500</li>
                  <li>Safety City, SC 12345</li>
                  <li>Mon-Fri: 8AM-6PM</li>
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
