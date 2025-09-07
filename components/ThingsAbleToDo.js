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
          selected.classList.add('.icon-content-block', '.content-block');
        }
        this.classList.remove('.icon-content-block', '.content-block');
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
                THE THINGS<br />
                WE ARE ABLE TO DO
              </h3>
            </div>
            {/* end col-12 */}
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon01.png" alt="Image" />
                </figure>
                <h6>DIGITAL PRODUCTS</h6>
                <ul>
                  <li>Digital Branding</li>
                  <li>Web & Mobile Sites</li>
                  <li>User Interface Design</li>
                  <li>Responsive Techs</li>
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
                <h6>UI-UX DESIGN</h6>
                <ul>
                  <li>Digital Strategy</li>
                  <li>User Experience Design</li>
                  <li>User Interface Design</li>
                  <li>Mobile Sites</li>
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
                <h6>WEB DEVELOPMENT</h6>
                <ul>
                  <li>Custom Platform</li>
                  <li>Back-End Executions</li>
                  <li>Interface Apps</li>
                  <li>Mobile Systems</li>
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
      <section className="icon-content-block">
        <div className="container">
          <div className="row justify-content-center">
            {/* end col-12 */}
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon01.png" alt="Image" />
                </figure>
                <h6>DIGITAL PRODUCTS</h6>
                <ul>
                  <li>Digital Branding</li>
                  <li>Web & Mobile Sites</li>
                  <li>User Interface Design</li>
                  <li>Responsive Techs</li>
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
                <h6>UI-UX DESIGN</h6>
                <ul>
                  <li>Digital Strategy</li>
                  <li>User Experience Design</li>
                  <li>User Interface Design</li>
                  <li>Mobile Sites</li>
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
                <h6>WEB DEVELOPMENT</h6>
                <ul>
                  <li>Custom Platform</li>
                  <li>Back-End Executions</li>
                  <li>Interface Apps</li>
                  <li>Mobile Systems</li>
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
      <section className="icon-content-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 wow" data-splitting>
              <h3 className="section-title">
                THE THINGS<br />
                TO DO
              </h3>
            </div>
            {/* end col-12 */}
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon01.png" alt="Image" />
                </figure>
                <h6>DIGITAL PRODUCTS</h6>
                <ul>
                  <li>Digital Branding</li>
                  <li>Web & Mobile Sites</li>
                  <li>User Interface Design</li>
                  <li>Responsive Techs</li>
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
                <h6>UI-UX DESIGN</h6>
                <ul>
                  <li>Digital Strategy</li>
                  <li>User Experience Design</li>
                  <li>User Interface Design</li>
                  <li>Mobile Sites</li>
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
                <h6>WEB DEVELOPMENT</h6>
                <ul>
                  <li>Custom Platform</li>
                  <li>Back-End Executions</li>
                  <li>Interface Apps</li>
                  <li>Mobile Systems</li>
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
      <section className="icon-content-block">
        <div className="container">
          <div className="row justify-content-center">
            {/* end col-12 */}
            <div className="col-lg-3 col-md-4 wow" data-splitting>
              <div className="content-block">
                <figure>
                  <img src="/assets/images/icon01.png" alt="Image" />
                </figure>
                <h6>DIGITAL PRODUCTS</h6>
                <ul>
                  <li>Digital Branding</li>
                  <li>Web & Mobile Sites</li>
                  <li>User Interface Design</li>
                  <li>Responsive Techs</li>
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
                <h6>UI-UX DESIGN</h6>
                <ul>
                  <li>Digital Strategy</li>
                  <li>User Experience Design</li>
                  <li>User Interface Design</li>
                  <li>Mobile Sites</li>
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
                <h6>WEB DEVELOPMENT</h6>
                <ul>
                  <li>Custom Platform</li>
                  <li>Back-End Executions</li>
                  <li>Interface Apps</li>
                  <li>Mobile Systems</li>
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
