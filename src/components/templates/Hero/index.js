import React from 'react';
import Navigation from '../../organisms/Navigation';
import './style.css';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';

const Hero = () => {
  return(
    <div className="hero-wrapper">
      <Navigation />
      <div className="hero-content">
        <Typography className="h1">
          We Make Lead Gen Easier
        </Typography>
        <Typography className="body1">
        Build, launch, and optimize custom landing pages for any campaign — <br /> without developers or tech bottlenecks.
        </Typography>
      </div>
      <div className="hero-cta">
        <Button label="Start Realbit for free" className="storybook-button storybook-button--primary" />
        <Button label="See how Realbit works" className="storybook-button storybook-button--secondary" />
      </div>
      <img src='./hero-dashboard.png' style={{width: '80%'}}/>
    </div>
  )
}

export default Hero;