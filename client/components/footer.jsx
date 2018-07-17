import React from 'react';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <section className="footer-main">

        <div className="footer-container">
          <div className="footer-description">
            <p>Toy-for-toy helps reduce clutter in your home</p>
            <p>Kids like new toys all the time. Why spend a fortune on new toys, when you can share toys with your neighbours and spend a fraction of the price for new toys.</p>
          </div>
        </div>

        <div className="footer-bottom-main">
          <div className="footer-bottom">
            <div className="list-unstyled">
              <div><a href="https://www.linkedin.com/in/archana-kannan-77238397/" className="linklist">Linkedin</a></div>
              <div><a href="https://archhere.github.io/Archana-Kannan---Portfolio/" className="linklist">Portfolio</a></div>
              <div><a href="https://github.com/archhere" className="linklist">Github</a></div>
            </div>
            <div className="copyright">
              <a href="https://www.designevo.com/en/" className="linklist">Logo design from DesignEvo</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Footer;
