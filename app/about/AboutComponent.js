"use client"

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutComponent() {
  return (
    <>
      <Navbar>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="section-title">About Crossfire</h1>
                <h3>Your Trusted Fire Safety Partner</h3>
              </div>
            </div>
          </div>
        </section>
      </Navbar>
      
      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow" data-splitting>
              <h3 className="section-title">Fire Protection Engineers & Consultants</h3>
              <p>Crossfire has been providing comprehensive fire safety solutions since 2000. Our team of certified fire protection engineers and consultants specialize in designing, implementing, and maintaining fire safety systems for commercial, industrial, and residential projects.</p>
              <p>We are committed to protecting lives and property through innovative fire protection engineering solutions that meet the highest safety standards and regulatory requirements.</p>
            </div>
            <div className="col-lg-6 wow" data-splitting>
              <h4>Our Expertise</h4>
              <ul>
                <li>Fire Risk Assessment & Analysis</li>
                <li>Fire Suppression System Design</li>
                <li>Code Compliance & Consulting</li>
                <li>Emergency Planning & Training</li>
                <li>Fire Safety Audits & Inspections</li>
                <li>Maintenance & Support Services</li>
              </ul>
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
            <div className="col-lg-4">
              <h5>25+ Years Experience</h5>
              <p>Over two decades of expertise in fire protection engineering and consulting services.</p>
            </div>
            <div className="col-lg-4">
              <h5>Certified Professionals</h5>
              <p>Our team consists of licensed fire protection engineers and certified safety consultants.</p>
            </div>
            <div className="col-lg-4">
              <h5>Comprehensive Solutions</h5>
              <p>From design and installation to maintenance and training, we provide complete fire safety solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
