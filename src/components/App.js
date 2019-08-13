import React from "react";
import Pupper from "../img/pupper.jpg";
import House1 from "../img/house-1.jpeg";
import House2 from "../img/house-2.jpeg";
import House3 from "../img/house-3.jpeg";
import House4 from "../img/house-4.jpeg";
import House5 from "../img/house-5.jpeg";
import House6 from "../img/house-6.jpeg";

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
        <button className='btn '>Find your own way</button>
      </div>
      <section className='homes'>
        <div className='home'>
          <img src={House2} alt='glass villa' className='home__img' />
          <svg className='home__like'>
            <use xlinkHref='/sprite.svg#icon-heart-full' />
          </svg>
          <h5 className='home__name'>Modern Glass Villa</h5>
          <div className='home__location'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-map-pin' />
            </svg>
            <p>Noosa</p>
          </div>
          <div className='home__rooms'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-profile-male' />
            </svg>
            <p>5 rooms</p>
          </div>
          <div className='home__area'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-expand' />
            </svg>
            <p>
              325m<sup>2</sup>
            </p>
          </div>
          <div className='home__price'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-key' />
            </svg>
            <p>$955,000</p>
          </div>
          <button className='btn home__btn'>Call realtor</button>
        </div>
        <div className='home'>
          <img src={House3} alt='family house' className='home__img' />
          <svg className='home__like'>
            <use xlinkHref='/sprite.svg#icon-heart-full' />
          </svg>
          <h5 className='home__name'>Beautiful Family House</h5>
          <div className='home__location'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-map-pin' />
            </svg>
            <p>Newcastle</p>
          </div>
          <div className='home__rooms'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-profile-male' />
            </svg>
            <p>5 rooms</p>
          </div>
          <div className='home__area'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-expand' />
            </svg>
            <p>
              450<sup>2</sup>
            </p>
          </div>
          <div className='home__price'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-key' />
            </svg>
            <p>$1,255,000</p>
          </div>
          <button className='btn home__btn'>Call realtor</button>
        </div>
        <div className='home'>
          <img src={House4} alt='country cabin' className='home__img' />
          <svg className='home__like'>
            <use xlinkHref='/sprite.svg#icon-heart-full' />
          </svg>
          <h5 className='home__name'>Cozy Country Cabin</h5>
          <div className='home__location'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-map-pin' />
            </svg>
            <p>Glasshouse Mountains</p>
          </div>
          <div className='home__rooms'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-profile-male' />
            </svg>
            <p>4 rooms</p>
          </div>
          <div className='home__area'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-expand' />
            </svg>
            <p>
              275<sup>2</sup>
            </p>
          </div>
          <div className='home__price'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-key' />
            </svg>
            <p>$855,000</p>
          </div>
          <button className='btn home__btn'>Call realtor</button>
        </div>
        <div className='home'>
          <img src={House5} alt='rustic villa' className='home__img' />
          <svg className='home__like'>
            <use xlinkHref='/sprite.svg#icon-heart-full' />
          </svg>
          <h5 className='home__name'>Large Rustic Villa</h5>
          <div className='home__location'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-map-pin' />
            </svg>
            <p>Toorak</p>
          </div>
          <div className='home__rooms'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-profile-male' />
            </svg>
            <p>5 rooms</p>
          </div>
          <div className='home__area'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-expand' />
            </svg>
            <p>
              416<sup>2</sup>
            </p>
          </div>
          <div className='home__price'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-key' />
            </svg>
            <p>$2,300,000</p>
          </div>
          <button className='btn home__btn'>Call realtor</button>
        </div>
        <div className='home'>
          <img src={House6} alt='palatial retreat' className='home__img' />
          <svg className='home__like'>
            <use xlinkHref='/sprite.svg#icon-heart-full' />
          </svg>
          <h5 className='home__name'>Palatial Mountain Retreat</h5>
          <div className='home__location'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-map-pin' />
            </svg>
            <p>Thredbo</p>
          </div>
          <div className='home__rooms'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-profile-male' />
            </svg>
            <p>9 rooms</p>
          </div>
          <div className='home__area'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-expand' />
            </svg>
            <p>
              640<sup>2</sup>
            </p>
          </div>
          <div className='home__price'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-key' />
            </svg>
            <p>$2,950,000</p>
          </div>
          <button className='btn home__btn'>Call realtor</button>
        </div>
        <div className='home'>
          <img src={House1} alt='family apartment' className='home__img' />
          <svg className='home__like'>
            <use xlinkHref='/sprite.svg#icon-heart-full' />
          </svg>
          <h5 className='home__name'>Modern Family Apartment</h5>
          <div className='home__location'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-map-pin' />
            </svg>
            <p>Brisbane</p>
          </div>
          <div className='home__rooms'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-profile-male' />
            </svg>
            <p>3 rooms</p>
          </div>
          <div className='home__area'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-expand' />
            </svg>
            <p>
              280<sup>2</sup>
            </p>
          </div>
          <div className='home__price'>
            <svg>
              <use xlinkHref='/sprite.svg#icon-key' />
            </svg>
            <p>$700,000</p>
          </div>
          <button className='btn home__btn'>Call realtor</button>
        </div>
      </section>

      <section className='gallery'>
        <figure className='gallery__item gallery__item--1'>
          <img src={House1} alt='stylish suburban' className='gallery__img' />
        </figure>
      <figure className='gallery__item gallery__item--2'>
        <img src={House2} alt='gallery img 1' className='gallery__img' />
        </figure>
        <figure className='gallery__item gallery__item--3'>
          <img src={House3} alt='gallery img 2' className='gallery__img' />
        </figure>
        <figure className='gallery__item gallery__item--4'>
          <img src={House4} alt='gallery img 3' className='gallery__img' />
        </figure>
        <figure className='gallery__item gallery__item--5'>
          <img src={House5} alt='gallery img 4' className='gallery__img' />
        </figure>
        <figure className='gallery__item gallery__item--6'>
          <img src={House6} alt='gallery img 5' className='gallery__img' />
        </figure>
        <figure className='gallery__item gallery__item--7'>
          <img src={House1} alt='gallery img 6' className='gallery__img' />
        </figure>
        <figure className='gallery__item gallery__item--8'>
          <img src={House2} alt='gallery img 7' className='gallery__img' />
        </figure>
        <figure className='gallery__item gallery__item--9'>
          <img src={House3} alt='gallery img 8' className='gallery__img' />
        </figure>
        <figure className='gallery__item gallery__item--10'>
          <img src={House4} alt='gallery img 9' className='gallery__img' />
        </figure>
        <figure className='gallery__item gallery__item--11'>
          <img src={House5} alt='gallery img 10' className='gallery__img' />
        </figure>
        <figure className='gallery__item gallery__item--12'>
          <img src={House6} alt='gallery img 11' className='gallery__img' />
        </figure>
        <figure className='gallery__item gallery__item--13'>
          <img src={House1} alt='gallery img 12' className='gallery__img' />
        </figure>
        <figure className='gallery__item gallery__item--14'>
          <img src={House2} alt='gallery img 13' className='gallery__img' />
        </figure>
      </section>
      <footer className='footer'>footer</footer>
    </div>
  );
};

export default App;
