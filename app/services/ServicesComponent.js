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

export default function ServicesComponent() {
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

  // Interactive content blocks
  useEffect(() => {
    const contentBlocks = document.querySelectorAll('.icon-content-block .content-block');
    contentBlocks.forEach((block) => {
      block.addEventListener('mouseenter', function () {
        const selected = document.querySelector('.selected');
        if (selected) {
          selected.classList.remove('selected');
        }
        this.classList.add('selected');
      });
    });
  }, []);

  // Slider functionality
  useEffect(() => {
    if (typeof window !== "undefined") {
      const sliderthumbs = new Swiper('.services-gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 3,
      });

      const slider = new Swiper('.services-gallery-top', {
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

      const servicesSlider = new Swiper('.services-office-slider', {
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
          <div className="swiper-container services-gallery-top">
            <div className="swiper-wrapper">
              <div className="swiper-slide" data-background="/assets/images/slide01.jpg"></div>
              <div className="swiper-slide" data-background="/assets/images/office02.jpg"></div>
              <div className="swiper-slide" data-background="/assets/images/slide02.jpg"></div>
            </div>
          </div>
          <div className="swiper-container services-gallery-thumbs">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <span>CONSULTING</span> <a href="/services">OUR SERVICES</a>
              </div>
              <div className="swiper-slide">
                <span>SYSTEMS</span> <a href="/services">OUR SERVICES</a>
              </div>
              <div className="swiper-slide">
                <span>ENGINEERING</span> <a href="/services">OUR SERVICES</a>
              </div>
            </div>
          </div>
        </header>
      </Navbar>

      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow" data-splitting>
              <h3 className="section-title">COMPREHENSIVE<br />
                FIRE PROTECTION SERVICES</h3>
              <a href="mailto:services@crossfire.com">services@crossfire.com</a>
            </div>
            <div className="col-lg-7 wow" data-splitting>
              <p>From fire risk assessment to system design and maintenance,
                we provide complete fire protection solutions tailored to your specific needs.</p>
              <h6>Crossfire Services</h6>
              <small>Professional Fire Protection</small> <b>100+</b>
              <h4>SERVICES<br />
                COMPLETED ANNUALLY</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-image">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="services-office-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <figure className="reveal-effect masker wow">
                      <img src="/assets/images/works01.jpg" alt="Image" />
                      <figcaption>
                        <h6>FIRE SUPPRESSION SYSTEMS</h6>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className='reveal-effect masker wow'>
                      <img src="/assets/images/works02.jpg" alt="Image" />
                      <figcaption>
                        <h6>SAFETY CONSULTING</h6>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className='reveal-effect masker wow'>
                      <img src="/assets/images/works03.jpg" alt="Image" />
                      <figcaption>
                        <h6>SYSTEM MAINTENANCE</h6>
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
                FIRE PROTECTION<br />
                SERVICES WE PROVIDE
              </h3>
            </div>
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon01.png" alt="Fire Safety Consulting" />
                </figure>
                <h6>FIRE SAFETY CONSULTING</h6>
                <ul>
                  <li>Fire Risk Assessment</li>
                  <li>Code Compliance</li>
                  <li>Safety Planning</li>
                  <li>Emergency Protocols</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block selected">
                <figure>
                  <img src="/assets/images/icon02.png" alt="Fire Suppression Systems" />
                </figure>
                <h6>FIRE SUPPRESSION SYSTEMS</h6>
                <ul>
                  <li>Sprinkler Systems</li>
                  <li>Fire Alarm Systems</li>
                  <li>Smoke Detection</li>
                  <li>Emergency Lighting</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon03.png" alt="Fire Protection Engineering" />
                </figure>
                <h6>FIRE PROTECTION ENGINEERING</h6>
                <ul>
                  <li>System Design</li>
                  <li>Code Analysis</li>
                  <li>Performance Testing</li>
                  <li>Maintenance Plans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="works">
        <ul>
          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works01.jpg" data-fancybox>
                <img src="/assets/images/works01.jpg" alt="Image" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>Fire Safety Consulting</h3>
              <small>ASSESSMENT, PLANNING, COMPLIANCE</small>
            </div>
          </li>
          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works02.jpg" data-fancybox>
                <img src="/assets/images/works02.jpg" alt="Image" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>Suppression Systems</h3>
              <small>SPRINKLERS, ALARMS, DETECTION</small>
            </div>
          </li>
          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works03.jpg" data-fancybox>
                <img src="/assets/images/works03.jpg" alt="Image" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>Engineering Services</h3>
              <small>DESIGN, ANALYSIS, TESTING</small>
            </div>
          </li>
          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works04.jpg" data-fancybox>
                <img src="/assets/images/works04.jpg" alt="Image" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>Emergency Planning</h3>
              <small>TRAINING, DRILLS, PROTOCOLS</small>
            </div>
          </li>
          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works05.jpg" data-fancybox>
                <img src="/assets/images/works05.jpg" alt="Image" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>Maintenance Services</h3>
              <small>INSPECTION, REPAIR, UPGRADE</small>
            </div>
          </li>
          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works06.jpg" data-fancybox>
                <img src="/assets/images/works06.jpg" alt="Image" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>Special Systems</h3>
              <small>CLEAN AGENT, FOAM, INDUSTRIAL</small>
            </div>
          </li>
        </ul>
      </section>

      <Footer/>
    </>
  );
}
