"use client";
import React, { useEffect, useRef, useState } from "react";
import "/public/assets/css/style.css";
import validate from 'validate.js';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



function NavWithContact() {
  
//   solving hydration error due to ifram

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


//   contact form

    
useEffect(() => {
    // Check for Input Function
    function checkForInput(element) {
      const label = element.nextElementSibling;
      if (element.value.length > 0) {
        label.classList.add('label-up');
      } else {
        label.classList.remove('label-up');
      }
    }

    // The lines below are executed on page load
    document.querySelectorAll('input, textarea').forEach((element) => {
      checkForInput(element);
    });

    // The lines below (inside) are executed on change & keyup
    document.querySelectorAll('input, textarea').forEach((element) => {
      element.addEventListener('change', () => checkForInput(element));
      element.addEventListener('keyup', () => checkForInput(element));
    });
  }, []);

//   validation

const handleSubmit = (event) => {
    let errors;
    event.preventDefault();
    
    const constraints = {
      name: {
        presence: { allowEmpty: false, message: "is required" },
      },
      email: {
        presence: { allowEmpty: false, message: "is required" },
        email: { message: "is not valid" },
      },
      subject: {
        presence: { allowEmpty: false, message: "is required" },
      },
      message: {
        presence: { allowEmpty: false, message: "is required" },
      },
    };

    const form = event.target;
    const formValues = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

     errors = validate(formValues, constraints);

    if (errors) {
      // Handle validation errors
      console.log(errors);
      // Display errors to the user
      for (const [inputName, errorMessages] of Object.entries(errors)) {
        const input = form.querySelector(`[name="${inputName}"]`);
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = errorMessages.join(', ');
        input.parentElement.appendChild(errorElement);
      }
    } else {
      // Form is valid, submit the form
      console.log('Form is valid:', formValues);
    }
  };

  return (
    <>
    <Navbar>
    {/* video container */}
    <header className="page-header">
      <div className="video-bg">
        <video src="/assets/videos/video02.mp4" muted loop autoPlay></video>
      </div>
      {/* end video-bg */}
      <div className="inner">
        <div className="container">
          <h1>CONTACT</h1>
          <p>We provide a free day to experience our benefits of digital world</p>
        </div>
        {/* end container */}
      </div>
      {/* end inner */}
    </header>

    {isClient && <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h3 className="section-title">SAY HELLO <br />TO REACH US</h3>
          </div>
          {/* end col-5 */}
          <div className="col-lg-4 col-md-6">
            <h6>HEAD OFFICE</h6>
            <address>
              Boryssa Himry 124 B Block Pozniaky<br />
              Kiev - UKRAINE
            </address>
          </div>
          {/* end col-4 */}
          <div className="col-lg-3 col-md-6">
            <h6>REACH US</h6>
            <address>
              <p>+38 02 237 24 21</p>
              <a href="mailto:hello@tourog.com.ua">hello@tourog.com.ua</a>
            </address>
          </div>
          {/* end col-3 */}
          <div className="col-lg-5">
            <div className="map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325518.68780316407!2d30.252511957059642!3d50.4016990487754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCwLCAwMjAwMA!5e0!3m2!1suk!2str!4v1555663203384!5m2!1suk!2str"
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
            {/* end map */}
          </div>
          {/* end col-5 */}
          <div className="col-lg-7">
            <div className="contact-form">
              <form id="contact" name="contact" onSubmit={handleSubmit} method="post">
                <div className="form-group">
                  <input type="text" name="name" id="name" autoComplete="off" required />
                  <span>Your name</span>
                </div>
                {/* end form-group */}
                <div className="form-group">
                  <input type="text" name="email" id="email" autoComplete="off" required />
                  <span>Your e-mail</span>
                </div>
                {/* end form-group */}
                <div className="form-group">
                  <input type="text" name="subject" id="subject" autoComplete="off" required />
                  <span>Subject</span>
                </div>
                {/* end form-group */}
                <div className="form-group">
                  <textarea name="message" id="message" autoComplete="off" required></textarea>
                  <span>Your message</span>

                </div>
                {/* end form-group */}
                <div className="form-group">
                  <button id="submit" type="submit" name="submit">
                    <strong>Submit Now<b></b> <i></i></strong>
                  </button>
                </div>
                {/* end form-group */}
              </form>
              {/* end form */}
              <div className="form-group">
                <div id="success" className="alert alert-success" role="alert"> 
                  Your message was sent successfully! We will be in touch as soon as we can. 
                </div>
                {/* end success */}
                <div id="error" className="alert alert-danger" role="alert"> 
                  Something went wrong, try refreshing and submitting the form again. 
                </div>
                {/* end error */}
              </div>
              {/* end form-group */}
            </div>
            {/* end contact-form */}
          </div>
          {/* col-7 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section> }
    </Navbar>
    <Footer/>
    </>
  );
}

export default NavWithContact;
