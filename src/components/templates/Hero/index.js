import React from 'react';
import Navigation from '../../organisms/Navigation';
import './style.css';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';

const Hero = () => {
  return(
    <div>
      <div className="hero-wrapper">
      <Navigation />
      <div className="hero-content mx-8 md:mx-0">
        <Typography color="#FFF" variant="h1">
          We Make Lead Gen Easier
        </Typography>
        <Typography color="rgba(225, 225, 225, 0.8)" variant="body1 w-full md:w-1/2 mx-auto">
        Build, launch, and optimize custom landing pages for any campaign — without developers or tech bottlenecks.
        </Typography>
      </div>
      <div className="hero-cta space-x-12">
        <Button label="Start Realbit for free" primary={true} />
        <Button label="See how Realbit works" primary={false} />
      </div>
      <img className="mx-auto w-4/5" src='./hero-dashboard.png'/>
      <div className="mt-32 hero-content">
        <Typography color="#FFF" variant="label">
          Trusted by the community
        </Typography>
        <div className="flex justify-center text-center space-x-32 mt-16">
          <img src='./sothebys.svg' />
          <img src='./hg.svg' />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero;