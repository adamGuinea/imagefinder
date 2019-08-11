import React from "react";
import Pupper from "../img/pupper.jpg";
import House1 from "../img/house-1.jpeg";

const App = () => {
  return (
    <div className='container'>
      <div className='sidebar'>sidebar</div>
      <header className='header'>header</header>
      <div className='realtors'>top realtors</div>
      <section className='features'>
        <div className='feature'>
          <svg className='feature__icon'>
            <use xlinkHref='/sprite.svg#icon-global' />
          </svg>
          <h4 className='heading-4 heading-4--dark'>
            World's best luxury homes
          </h4>
          <p className='feature__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='feature'>
          <svg className='feature__icon'>
            <use xlinkHref='/sprite.svg#icon-trophy' />
          </svg>
          <h4 className='heading-4 heading-4--dark'>
            Only the best properties
          </h4>
          <p className='feature__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='feature'>
          <svg className='feature__icon'>
            <use xlinkHref='/sprite.svg#icon-map-pin' />
          </svg>
          <h4 className='heading-4 heading-4--dark'>
            All homes in top locations
          </h4>
          <p className='feature__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='feature'>
          <svg className='feature__icon'>
            <use xlinkHref='/sprite.svg#icon-key' />
          </svg>
          <h4 className='heading-4 heading-4--dark'>New home in one week</h4>
          <p className='feature__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='feature'>
          <svg className='feature__icon'>
            <use xlinkHref='/sprite.svg#icon-presentation' />
          </svg>
          <h4 className='heading-4 heading-4--dark'>Top 1% realtors</h4>
          <p className='feature__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='feature'>
          <svg className='feature__icon'>
            <use xlinkHref='/sprite.svg#icon-lock' />
          </svg>
          <h4 className='heading-4 heading-4--dark'>
            Secure payments with Realty
          </h4>
          <p className='feature__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </section>
      <div className='story__pictures'>
        <img src={Pupper} alt='dog' className='story__img--1' />
        <img src={House1} alt='first house' className='story__img--2' />
      </div>
      <div className='story__content'>
        <h3 className='heading-3 mb-sm'>Happy Customers</h3>
        <h2 className='heading-2 heading-2--dark mb-md'>
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className='story__text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non dolorum
          a soluta, eaque numquam iusto quasi molestiae minus modi ex.
        </p>
        <button className='btn'>Find your own way</button>
      </div>
      <section className='homes'>homes</section>
      <section className='gallery'>gallery</section>
      <footer className='footer'>footer</footer>
    </div>
  );
};

export default App;
