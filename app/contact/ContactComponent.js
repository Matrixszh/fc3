"use client"

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactComponent() {
  return (
    <>
      <Navbar>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="section-title">Contact Us</h1>
                <h3>Get in Touch with Our Fire Safety Experts</h3>
              </div>
            </div>
          </div>
        </section>
      </Navbar>
      
      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow" data-splitting>
              <h3 className="section-title">Ready to Get Started?</h3>
              <p>Contact Crossfire today for comprehensive fire protection engineering and consulting services. Our certified experts are ready to help you design, implement, and maintain fire safety solutions that protect lives and property.</p>
              
              <div className="contact-info">
                <h5>Our Services Include:</h5>
                <ul>
                  <li>Fire Risk Assessment & Analysis</li>
                  <li>Fire Suppression System Design</li>
                  <li>Code Compliance Consulting</li>
                  <li>Emergency Planning & Training</li>
                  <li>System Maintenance & Support</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-6 wow" data-splitting>
              <h4>Contact Information</h4>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h6>Phone</h6>
                  <p><a href="tel:+1-555-FIRE-911">+1 (555) FIRE-911</a></p>
                  <p><a href="tel:+1-555-347-3911">+1 (555) 347-3911</a></p>
                </div>
                
                <div className="contact-item">
                  <h6>Email</h6>
                  <p><a href="mailto:contact@crossfire.com">contact@crossfire.com</a></p>
                  <p><a href="mailto:emergency@crossfire.com">emergency@crossfire.com</a></p>
                </div>
                
                <div className="contact-item">
                  <h6>Address</h6>
                  <p>123 Fire Safety Lane<br />
                  Protection Plaza, Suite 500<br />
                  Safety City, SC 12345</p>
                </div>
                
                <div className="contact-item">
                  <h6>Business Hours</h6>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 3:00 PM<br />
                  Sunday: Emergency Services Only</p>
                </div>
                
                <div className="contact-item">
                  <h6>24/7 Emergency</h6>
                  <p>For fire safety emergencies:<br />
                  <a href="tel:+1-555-EMERGENCY">+1 (555) EMERGENCY</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="section-title">Why Choose Crossfire?</h3>
            </div>
            <div className="col-lg-3">
              <h5>25+ Years Experience</h5>
              <p>Over two decades of expertise in fire protection engineering since 2000.</p>
            </div>
            <div className="col-lg-3">
              <h5>Certified Professionals</h5>
              <p>Licensed fire protection engineers and certified safety consultants.</p>
            </div>
            <div className="col-lg-3">
              <h5>Comprehensive Solutions</h5>
              <p>Complete fire safety solutions from design to maintenance.</p>
            </div>
            <div className="col-lg-3">
              <h5>24/7 Support</h5>
              <p>Emergency response and support services available around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
