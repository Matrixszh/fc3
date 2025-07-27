"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

function Navbar({ children }) {
  const [isSiteNavActive, setIsSiteNavActive] = useState(false);
  const [isSocialMediaActive, setIsSocialMediaActive] = useState(false);
  const [isAllCasesActive, setIsAllCasesActive] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const siteNavigationRef = useRef(null);
  const socialMediaRef = useRef(null);
  const allCasesRef = useRef(null);
  const hamburgerRef = useRef(null);
  const followUsRef = useRef(null);
  const allCasesLinkRef = useRef(null);



  //   page loader
  useEffect(() => {
    // Check if the document object is available
    if (typeof document !== "undefined") {
      const handleLoad = () => {
        setIsPageLoaded(true);
      };

      if (document.readyState === "complete") {
        setIsPageLoaded(true);
        document.body.style.overflowY = "scroll";

      } else {
        window.addEventListener("load", handleLoad);
      }

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  //   Equllizer
  useEffect(() => {
    const source = "/assets/audio/audio.mp3";
    const audio = new Audio(source);
    audio.loop = true;
    audio.volume = 0.1;
    audio.play();

    const equalizerElement = document.querySelector(".equalizer");
    const equalizerClickHandler = () => {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true); // Update state to indicate audio is playing
        equalizerElement.classList.remove("paused");
      } else {
        audio.pause();
        setIsPlaying(false); // Update state to indicate audio is paused
        equalizerElement.classList.add("paused");
      }
    };

    if (equalizerElement) {
      equalizerElement.addEventListener("click", equalizerClickHandler);
    }

    // EQUALIZER ANIMATION
    const randomBetween = (range) => {
      const min = range[0];
      const max = range[1];
      return min < 0
        ? min + Math.random() * (Math.abs(min) + max)
        : min + Math.random() * max;
    };

    let animationInterval;

    const equalizerAnimation = (speed, barsHeight) => {
      animationInterval = setInterval(() => {
        document.querySelectorAll(".equalizer span").forEach((span, i) => {
          span.style.height = `${randomBetween(barsHeight[i])}px`;
        });
      }, speed);
    };

    const barsHeight = [
      [2, 13],
      [5, 22],
      [17, 8],
      [4, 18],
      [11, 3],
    ];

    equalizerAnimation(180, barsHeight);

    return () => {
      if (equalizerElement) {
        equalizerElement.removeEventListener("click", equalizerClickHandler);
      }
      clearInterval(animationInterval);
      audio.pause();
    };
  }, []);






  const handleTreeMenuClick = (e) => {
    const ul = e.target.parentNode.querySelector("ul");
    if (ul) {
      const isHidden = ul.style.height === "0px";
      ul.style.height = isHidden ? "90px" : "0px";
      ul.style.overflow = "hidden";
      ul.style.transition = "height 0.3s ease"; // Adjust duration and easing as needed
    }
  };

  const handleHamburgerClick = () => {
    setIsSiteNavActive(!isSiteNavActive);
    document.body.classList.toggle("overflow");

    if (document.body.style.overflowY === "hidden") {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }


  };

  const handleFollowUsClick = () => {
    setIsSocialMediaActive(!isSocialMediaActive);
    document.body.classList.toggle("overflow");

    if (document.body.style.overflowY === "hidden") {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };

  const handleAllCasesClick = () => {
    setIsAllCasesActive(!isAllCasesActive);
    document.body.classList.toggle("overflow");

    if (document.body.style.overflowY === "hidden") {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };

  return (
    <>
      <div className={isPageLoaded ? "page-loaded" : ""}>
        {/* Preloader */}
        <div className="preloader ">
          <div className="layer"></div>
          {/* end layer */}
          <div className="inner">
            <figure>
              <img src="/assets/images/preloader.gif" alt="Image" />
            </figure>
            <span>Site Loading</span>
          </div>
          {/* end inner */}
        </div>
        {/* end preloader */}

        {/* Page Transition */}
        <div className="page-transition">
          <div className="layer"></div>
          {/* end layer */}
        </div>
        {/* end page-transition */}

        {/* Site Navigation */}
        <nav
          className={`site-navigation ${isSiteNavActive ? "active" : ""}`}
          ref={siteNavigationRef}
        >
          <div className="layer"></div>
          {/* end layer */}
          <div className="inner">
            <ul data-splitting>
              <li>
                <Link href="/home">HOME</Link>
                <i
                  className="fas fa-caret-down"
                  onClick={handleTreeMenuClick}
                ></i>
                <small>First page</small>
                <ul style={{ height: "0px", overflow: "hidden", transition: "height 0.3s ease", display: 'block' }}>
                  <li>
                    <Link href="/home">HOME SLIDER</Link>
                  </li>
                  <li>
                    <a href="index-video.html">HOME VIDEO</a>
                  </li>
                  <li>
                    <Link href="/home-carousel" scroll={false} >HOME CAROUSEL</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="studio.html">STUDIO</a> <small>All About Us</small>
              </li>
              <li>
                <Link href="/home-carousel">SERVICES</Link>
                <i
                  className="fas fa-caret-down"
                  onClick={handleTreeMenuClick}
                ></i>
                <small>Services we provide</small>
                <ul style={{ height: "auto", overflow: "hidden", transition: "height 0.3s ease", display: 'block' }}>
                  <li>
                    <Link href="/Services/Services3">CREATING EXPERIENCES</Link>
                  </li>
                  <li>
                    <a href="/Services/Services2">PROMOTING YOUR BRAND</a>
                  </li>
                  <li>
                    <Link href="/Services/Services1" >FROM BASE TO CONSISTENT</Link>
                  </li>
                  <li>
                    <Link href="/Services/Services4">THROUGH THE LENS</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog.html">BLOG</a> <small>Recent posts</small>
              </li>
              <li>
                <Link href="/contactUs">CONTACT</Link> <small>Say hello</small>
              </li>
              <li>
                <Link href="/login">LogIn/SignUp</Link> <small>Make account</small>
              </li>
            </ul>
          </div>
          {/* end inner */}
        </nav>
        {/* end site-navigation */}

        {/* Social Media */}
        <div
          className={`social-media ${isSocialMediaActive ? "active" : ""}`}
          ref={socialMediaRef}
        >
          <div className="layer"></div>
          {/* end layer */}
          <div className="inner">
            <h5>Social Share</h5>
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* end social-media */}

        {/* All Cases */}
        <div
          className={`all-cases ${isAllCasesActive ? "active" : ""}`}
          ref={allCasesRef}
        >
          <div className="layer"></div>
          {/* end layer */}
          <div className="inner">
            <ul>
              <li>
                <a href="#">Darkness</a>
              </li>
              <li>
                <a href="#">Goddess</a>
              </li>
              <li>
                <a href="#">Employee</a>
              </li>
              <li>
                <a href="#">Berry</a>
              </li>
              <li>
                <a href="#">Roosters</a>
              </li>
              <li>
                <a href="#">Primero</a>
              </li>
            </ul>
          </div>
          {/* end inner */}
        </div>
        {/* end all-cases */}

        <main className="main-left-side">
          {/* Left Side */}
          <aside className="left-side">
            <div className="logo">
              <a href="/home">
                <img src="/assets/images/logo.png" alt="Image" style={{ width: '150px', height: 'auto' }} />
              </a>
            </div>
            {/* end logo */}
            <div
              className="hamburger"
              id="hamburger"
              ref={hamburgerRef}
              onClick={handleHamburgerClick}
            >
              <div className="hamburger__line hamburger__line--01">
                <div className="hamburger__line-in hamburger__line-in--01"></div>
              </div>
              <div className="hamburger__line hamburger__line--02">
                <div className="hamburger__line-in hamburger__line-in--02"></div>
              </div>
              <div className="hamburger__line hamburger__line--03">
                <div className="hamburger__line-in hamburger__line-in--03"></div>
              </div>
              <div className="hamburger__line hamburger__line--cross01">
                <div className="hamburger__line-in hamburger__line-in--cross01"></div>
              </div>
              <div className="hamburger__line hamburger__line--cross02">
                <div className="hamburger__line-in hamburger__line-in--cross02"></div>
              </div>
            </div>
            {/* end hamburger */}
            <div
              className="follow-us"
              ref={followUsRef}
              onClick={handleFollowUsClick}
            >
              FOLLOW US
            </div>
            {/* end follow-us */}
            <div className="equalizer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* end equalizer */}
          </aside>
          {/* end left-side */}
          <div
            className="all-cases-link"
            ref={allCasesLinkRef}
            onClick={handleAllCasesClick}
          >
            <span>ALL CASES</span>
            <b>+</b>
          </div>
          {/* end all-cases-link */}
          {children}
        </main>
      </div>
    </>
  );
}

export default Navbar;
