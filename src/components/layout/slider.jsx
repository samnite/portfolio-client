import React from 'react';
import background1 from '../../img/background1.jpg';
import background2 from '../../img/background2.jpg';
import background3 from '../../img/background3.jpg';

const Slider = () => {
  return (
    <div className="carousel">
      <a className="carousel-item" href="#one!">
        <img className="materialboxed" width="250" src={background1} />
      </a>
      <a className="carousel-item" href="#one!">
        <img className="materialboxed" width="250" src={background2} />
      </a>
      <a className="carousel-item" href="#one!">
        <img className="materialboxed" width="250" src={background3} />
      </a>
      <a className="carousel-item" href="#one!">
        <img className="materialboxed" width="250" src={background1} />
      </a>
      <a className="carousel-item" href="#one!">
        <img className="materialboxed" width="250" src={background1} />
      </a>
    </div>
  );
};

export default Slider;
