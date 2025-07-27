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

export default function GalleryComponent() {
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
      const sliderthumbs = new Swiper('.gallery-gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 3,
      });

      const slider = new Swiper('.gallery-gallery-top', {
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

      const gallerySlider = new Swiper('.gallery-office-slider', {
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
          <div className="swiper-container gallery-gallery-top">
            <div className="swiper-wrapper">
              <div className="swiper-slide" data-background="/assets/images/works01.jpg"></div>
              <div className="swiper-slide" data-background="/assets/images/works02.jpg"></div>
              <div className="swiper-slide" data-background="/assets/images/works03.jpg"></div>
            </div>
          </div>
          <div className="swiper-container gallery-gallery-thumbs">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <span>PROJECTS</span> <a href="/gallery">VIEW GALLERY</a>
              </div>
              <div className="swiper-slide">
                <span>PORTFOLIO</span> <a href="/gallery">VIEW GALLERY</a>
              </div>
              <div className="swiper-slide">
                <span>SHOWCASE</span> <a href="/gallery">VIEW GALLERY</a>
              </div>
            </div>
          </div>
        </header>
      </Navbar>

      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow" data-splitting>
              <h3 className="section-title">PROJECT GALLERY<br />
                FIRE PROTECTION SHOWCASE</h3>
              <a href="mailto:projects@crossfire.com">projects@crossfire.com</a>
            </div>
            <div className="col-lg-7 wow" data-splitting>
              <p>Explore our portfolio of successful fire protection installations
                across various industries and building types.</p>
              <h6>Crossfire Projects</h6>
              <small>Completed Installations</small> <b>500+</b>
              <h4>PROJECTS<br />
                SUCCESSFULLY COMPLETED</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-image">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="gallery-office-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <figure className="reveal-effect masker wow">
                      <img src="/assets/images/works01.jpg" alt="Image" />
                      <figcaption>
                        <h6>OFFICE TOWER PROJECTS</h6>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className='reveal-effect masker wow'>
                      <img src="/assets/images/works02.jpg" alt="Image" />
                      <figcaption>
                        <h6>INDUSTRIAL FACILITIES</h6>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className='reveal-effect masker wow'>
                      <img src="/assets/images/works03.jpg" alt="Image" />
                      <figcaption>
                        <h6>HEALTHCARE INSTALLATIONS</h6>
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
                PROJECT TYPES<br />
                WE SPECIALIZE IN
              </h3>
            </div>
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon01.png" alt="Image" />
                </figure>
                <h6>COMMERCIAL BUILDINGS</h6>
                <ul>
                  <li>Office Towers</li>
                  <li>Shopping Centers</li>
                  <li>Hotels & Restaurants</li>
                  <li>Retail Facilities</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block selected">
                <figure>
                  <img src="/assets/images/icon02.png" alt="Image" />
                </figure>
                <h6>INDUSTRIAL FACILITIES</h6>
                <ul>
                  <li>Manufacturing Plants</li>
                  <li>Warehouses</li>
                  <li>Data Centers</li>
                  <li>Chemical Storage</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon03.png" alt="Image" />
                </figure>
                <h6>INSTITUTIONAL PROJECTS</h6>
                <ul>
                  <li>Hospitals & Clinics</li>
                  <li>Schools & Universities</li>
                  <li>Government Buildings</li>
                  <li>Residential High-Rises</li>
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
              <a href="/assets/images/works01.jpg" data-fancybox="gallery">
                <img src="/assets/images/works01.jpg" alt="Office Tower Complex" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>Office Tower Complex</h3>
              <small>FIRE SUPPRESSION, SPRINKLER SYSTEMS</small>
            </div>
          </li>

          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works02.jpg" data-fancybox="gallery">
                <img src="/assets/images/works02.jpg" alt="Industrial Warehouse" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>Industrial Warehouse</h3>
              <small>FIRE DETECTION, ALARM SYSTEMS</small>
            </div>
          </li>

          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works03.jpg" data-fancybox="gallery">
                <img src="/assets/images/works03.jpg" alt="Hospital Fire Safety" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>Hospital Fire Safety</h3>
              <small>COMPREHENSIVE FIRE PROTECTION</small>
            </div>
          </li>

          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works04.jpg" data-fancybox="gallery">
                <img src="/assets/images/works04.jpg" alt="School Safety Systems" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>School Safety Systems</h3>
              <small>EMERGENCY PROTOCOLS, FIRE DRILLS</small>
            </div>
          </li>

          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works05.jpg" data-fancybox="gallery">
                <img src="/assets/images/works05.jpg" alt="High-Rise Residential" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>High-Rise Residential</h3>
              <small>SPRINKLER DESIGN, CODE COMPLIANCE</small>
            </div>
          </li>

          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works06.jpg" data-fancybox="gallery">
                <img src="/assets/images/works06.jpg" alt="Manufacturing Plant" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>Manufacturing Plant</h3>
              <small>INDUSTRIAL FIRE PROTECTION</small>
            </div>
          </li>

          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works07.jpg" data-fancybox="gallery">
                <img src="/assets/images/works07.jpg" alt="Data Center Protection" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>Data Center Protection</h3>
              <small>CLEAN AGENT SUPPRESSION</small>
            </div>
          </li>

          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works08.jpg" data-fancybox="gallery">
                <img src="/assets/images/works08.jpg" alt="Shopping Mall Complex" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>Shopping Mall Complex</h3>
              <small>LARGE SPACE PROTECTION</small>
            </div>
          </li>

          <li>
            <figure className="reveal-effect masker wow">
              <a href="/assets/images/works09.jpg" data-fancybox="gallery">
                <img src="/assets/images/works09.jpg" alt="University Campus" />
              </a>
            </figure>
            <div className="caption wow" data-splitting>
              <h3>University Campus</h3>
              <small>EDUCATIONAL FACILITY PROTECTION</small>
            </div>
          </li>
        </ul>
      </section>

      <Footer/>
    </>
  );
}
