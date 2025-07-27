"use client"

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ServicesComponent() {
  return (
    <>
      <Navbar>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="section-title">Our Services</h1>
                <h3>Comprehensive Fire Protection Solutions</h3>
              </div>
            </div>
          </div>
        </section>
      </Navbar>
      
      <section className="icon-content-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon01.png" alt="Fire Safety Consulting" />
                </figure>
                <h6>FIRE SAFETY CONSULTING</h6>
                <ul>
                  <li>Fire Risk Assessment</li>
                  <li>Code Compliance Review</li>
                  <li>Safety Planning & Strategy</li>
                  <li>Emergency Response Protocols</li>
                  <li>Regulatory Compliance</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon02.png" alt="Fire Suppression Systems" />
                </figure>
                <h6>FIRE SUPPRESSION SYSTEMS</h6>
                <ul>
                  <li>Sprinkler System Design</li>
                  <li>Fire Alarm Systems</li>
                  <li>Smoke Detection Systems</li>
                  <li>Emergency Lighting</li>
                  <li>Fire Extinguisher Systems</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon03.png" alt="Fire Protection Engineering" />
                </figure>
                <h6>FIRE PROTECTION ENGINEERING</h6>
                <ul>
                  <li>System Design & Engineering</li>
                  <li>Performance-Based Design</li>
                  <li>Code Analysis & Interpretation</li>
                  <li>Fire Modeling & Analysis</li>
                  <li>System Testing & Commissioning</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon01.png" alt="Maintenance Services" />
                </figure>
                <h6>MAINTENANCE & INSPECTION</h6>
                <ul>
                  <li>Routine System Maintenance</li>
                  <li>Annual Fire Safety Inspections</li>
                  <li>System Testing & Certification</li>
                  <li>Repair & Upgrade Services</li>
                  <li>Compliance Documentation</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon02.png" alt="Emergency Planning" />
                </figure>
                <h6>EMERGENCY PLANNING</h6>
                <ul>
                  <li>Evacuation Plan Development</li>
                  <li>Fire Safety Training</li>
                  <li>Emergency Drill Coordination</li>
                  <li>Crisis Management Planning</li>
                  <li>Staff Training Programs</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon03.png" alt="Special Systems" />
                </figure>
                <h6>SPECIAL FIRE PROTECTION</h6>
                <ul>
                  <li>Clean Agent Systems</li>
                  <li>Foam Suppression Systems</li>
                  <li>Kitchen Hood Systems</li>
                  <li>Industrial Fire Protection</li>
                  <li>Data Center Protection</li>
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
