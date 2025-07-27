"use client"

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function GalleryComponent() {
  return (
    <>
      <Navbar>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="section-title">Project Gallery</h1>
                <h3>Our Fire Protection Projects</h3>
                <p>Explore our portfolio of successful fire protection installations across various industries.</p>
              </div>
            </div>
          </div>
        </section>
      </Navbar>
      
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
              <p>Complete fire protection system installation for a 40-story office building including sprinkler systems, fire alarms, and emergency lighting.</p>
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
              <p>Advanced fire detection and suppression system designed for high-rack storage warehouse facility.</p>
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
              <p>Life safety systems including smoke control, sprinkler protection, and emergency communication systems.</p>
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
              <p>Educational facility fire protection including evacuation systems and emergency response training.</p>
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
              <p>Residential high-rise fire protection system ensuring NFPA compliance and resident safety.</p>
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
              <p>Specialized fire protection for manufacturing facility including chemical storage areas and production lines.</p>
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
              <p>Clean agent fire suppression system protecting critical IT infrastructure and equipment.</p>
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
              <p>Comprehensive fire protection system for large retail complex with multiple occupancy types.</p>
            </div>
          </li>
        </ul>
      </section>

      <Footer/>
    </>
  );
}
