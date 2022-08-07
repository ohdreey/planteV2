import React from 'react';

const Slider = () => {
  return (
    <div className='slider'>
      <div className='sliderTxt'>
        <h1 className='sliderTitle'>Feel Free Plant a New Tree</h1>
        <p>
          Planting trees is wonderful act of giving back to nature which is
          ultimately, the same as giving to yourself, and the best part is that
          it is free.
        </p>
        <div className='sliderButton'>
          <button onClick='()'>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
