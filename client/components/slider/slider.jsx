

import React from 'react';


const Slider = (props) => {
  let arr = ["Surprise your kids", "Get them new toys everyday", "New toys on a budget"];
  let action1 = () => props.openModal({modal: 'signup'});


  return (
    <div className="slider-wrapper">
      <section className="slider-main">

        <div className="slider-container">
          <div className="textbox">
            <ul className="listclass">
              <h4>Why toy-for-toy?</h4>
              <li>Get a new toy everyday</li>
              <li>Toys for every budget</li>
              <li>Rent your unused toys and make money</li>
            </ul>
          <p className="joinbutton" onClick={action1}>Join now</p>
          </div>
        </div>
      </section>
    </div>

  );
};
export default Slider;
