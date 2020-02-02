import React from 'react';

//styles
import { HomePageStyles } from './styles';

const HomePage = () => {
  return (
    <HomePageStyles>
      <div className='Directory-Menu'>
        <div className='Menu-Item'>
          <div className='Content'>
            <h1 className='Title'>HATS</h1>
            <span className='SubTitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='Menu-Item'>
          <div className='Content'>
            <h1 className='Title'>JACKETS</h1>
            <span className='SubTitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='Menu-Item'>
          <div className='Content'>
            <h1 className='Title'>SNEAKER</h1>
            <span className='SubTitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='Menu-Item'>
          <div className='Content'>
            <h1 className='Title'>MEN</h1>
            <span className='SubTitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='Menu-Item'>
          <div className='Content'>
            <h1 className='Title'>WOMEN</h1>
            <span className='SubTitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </HomePageStyles>
  );
};

export default HomePage;
