import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
    
      <h1>Good Food Us<br />Good Mood
      </h1>
      <p>I would think that conserving our natural resources<br /> 
        should be a conservative position: Not to waste food, and <br />
        not to throw away a lot of the food that we buy.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
        >
          Daftar Sekarang 
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
        >
          About Us
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;