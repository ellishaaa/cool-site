import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/Purple_video.mp4" autoPlay loop muted />
      <h1>Test site!</h1>
      <p>in progress... (since 2024)</p>

      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get started</Button>

        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch trailer
        <i className='fas fa-play-circle'/></Button>
      </div>
    </div>
  )
}

export default HeroSection
