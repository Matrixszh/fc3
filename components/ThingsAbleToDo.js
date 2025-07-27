import React, { useEffect } from 'react';
import "/public/assets/css/style.css";


const ThingsAbleToDo = () => {
  useEffect(() => {
    const contentBlocks = document.querySelectorAll('.icon-content-block .content-block');

    contentBlocks.forEach((block) => {
      block.addEventListener('mouseenter', function () {
        const selected = document.querySelector('.selected');
        if (selected) {
          selected.classList.remove('selected');
          selected.classList.add('.icon-content-block','.content-block');
        }
        this.classList.remove('.icon-content-block','.content-block');
        this.classList.add('selected');
      });
    });

    // Clean up event listeners on component unmount
    
  }, []);

  return (
    <>
    <section className="icon-content-block">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 wow" data-splitting>
            <h3 className="section-title">
              FIRE PROTECTION<br />
              SERVICES WE PROVIDE
            </h3>
          </div>
          {/* end col-12 */}
          <div className="col-lg-3 col-md-4 wow" data-splitting>
            <div className="content-block">
              <figure>
                <img src="/assets/images/icon01.png" alt="Image" />
              </figure>
              <h6>FIRE SAFETY CONSULTING</h6>
              <ul>
                <li>Fire Risk Assessment</li>
                <li>Code Compliance</li>
                <li>Safety Planning</li>
                <li>Emergency Protocols</li>
              </ul>
            </div>
            {/* end content-block */}
          </div>
          {/* end col-3 */}
          <div className="col-lg-3 col-md-4 wow" data-splitting>
            <div className="content-block selected">
              <figure>
                <img src="/assets/images/icon02.png" alt="Image" />
              </figure>
              <h6>FIRE SUPPRESSION SYSTEMS</h6>
              <ul>
                <li>Sprinkler Systems</li>
                <li>Fire Alarm Systems</li>
                <li>Smoke Detection</li>
                <li>Emergency Lighting</li>
              </ul>
            </div>
            {/* end content-block */}
          </div>
          {/* end col-3 */}
          <div className="col-lg-3 col-md-4 wow" data-splitting>
            <div className="content-block">
              <figure>
                <img src="/assets/images/icon03.png" alt="Image" />
              </figure>
              <h6>FIRE PROTECTION ENGINEERING</h6>
              <ul>
                <li>System Design</li>
                <li>Code Analysis</li>
                <li>Performance Testing</li>
                <li>Maintenance Plans</li>
              </ul>
            </div>
            {/* end content-block */}
          </div>
          {/* end col-3 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
    {/* end icon-content-block */}
    <section className="works">
      <ul>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="/assets/images/works01.jpg" data-fancybox>
              <img src="/assets/images/works01.jpg" alt="Image" />
            </a>
          </figure>
          <div className="caption wow" data-splitting>
            <h3>Darkness Vehicle</h3>
            <small>DIGITAL, PRINT, DEVELOPMENT</small>
          </div>
          {/* end caption */}
        </li>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="/assets/images/works02.jpg" data-fancybox>
              <img src="/assets/images/works02.jpg" alt="Image" />
            </a>
          </figure>
          <div className="caption wow" data-splitting>
            <h3>Goddes Cover Art</h3>
            <small>PRINT, DIGITAL, DEVELOPMENT</small>
          </div>
          {/* end caption */}
        </li>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="/assets/images/works03.jpg" data-fancybox>
              <img src="/assets/images/works03.jpg" alt="Image" />
            </a>
          </figure>
          <div className="caption wow" data-splitting>
            <h3>Hard Employee</h3>
            <small>WEB, DIGITAL, DEVELOPMENT</small>
          </div>
          {/* end caption */}
        </li>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="/assets/images/works04.jpg" data-fancybox>
              <img src="/assets/images/works04.jpg" alt="Image" />
            </a>
          </figure>
          <div className="caption wow" data-splitting>
            <h3>Sweet Berry Pie</h3>
            <small>DIGITAL, PRINT, DEVELOPMENT</small>
          </div>
          {/* end caption */}
        </li>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="/assets/images/works05.jpg" data-fancybox>
              <img src="/assets/images/works05.jpg" alt="Image" />
            </a>
          </figure>
          <div className="caption wow" data-splitting>
            <h3>King of Roosters</h3>
            <small>PRINT, DIGITAL, DEVELOPMENT</small>
          </div>
          {/* end caption */}
        </li>
        <li>
          <figure className="reveal-effect masker wow">
            <a href="/assets/images/works06.jpg" data-fancybox>
              <img src="/assets/images/works06.jpg" alt="Image" />
            </a>
          </figure>
          <div className="caption wow" data-splitting>
            <h3>Primero Car</h3>
            <small>WEB, DIGITAL, DEVELOPMENT</small>
          </div>
          {/* end caption */}
        </li>
      </ul>
    </section>
    </>
  );
};

export default ThingsAbleToDo;
