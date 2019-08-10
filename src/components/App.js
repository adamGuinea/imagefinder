import React from "react";

const App = () => {
  return (
    <div className='container'>
      <div className='sidebar'>sidebar</div>
      <header className='header'>header</header>
      <div className='realtors'>top realtors</div>
      <section className='features'>
        <div className='feature'>feature 1</div>
        <div className='feature'>feature 2</div>
        <div className='feature'>feature 3</div>
        <div className='feature'>feature 4</div>
        <div className='feature'>feature 5</div>
        <div className='feature'>feature 6</div>
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
