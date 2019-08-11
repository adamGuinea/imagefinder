import React from "react";

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
      <div className='story__pictures'>Pictures</div>
      <div className='story__content'>Content</div>
      <section className='homes'>homes</section>
      <section className='gallery'>gallery</section>
      <footer className='footer'>footer</footer>
    </div>
  );
};

export default App;
