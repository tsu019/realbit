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
        <Typography variant="h1">
          We Make Lead Gen Easier
        </Typography>
        <Typography variant="body1">
        Build, launch, and optimize custom landing pages for any campaign — <br /> without developers or tech bottlenecks.
        </Typography>
      </div>
      <div className="hero-cta space-x-12">
        <Button label="Start Realbit for free" primary={true} />
        <Button label="See how Realbit works" primary={false} />
      </div>
      <img className="mx-auto w-4/5" src='./hero-dashboard.png'/>
    </div>
  )
}

export default Hero;