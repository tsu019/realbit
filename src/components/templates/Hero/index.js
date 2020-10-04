import React from 'react';
import Navigation from '../../organisms/Navigation';
import './style.css';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';

const Hero = () => {
  return(
    <div>
      <div className="section-wrapper">
      <Navigation />
      <div className="pt-12 md:pt-32 mx-8 md:mx-0 text-center">
        <Typography color="#FFF" variant="h1 w-full md:w-1/2 mx-auto">
          Boost Your Conversion Rates with AI-Powered Optimization
        </Typography>
        <Typography color="rgba(225, 225, 225, 0.8)" variant="body1 w-full md:w-1/2 mx-auto pt-12">
        Build, launch, and optimize custom landing pages for any campaign — without developers or tech bottlenecks.
        </Typography>
      </div>
      <div className="hero-cta space-y-8 md:space-x-12">
        <Button label="Start Realbit for free" primary={true} />
        <Button label="See how Realbit works" primary={false} />
      </div>
      <img className="w-full px-8 mx-auto md:w-4/5" src='./hero-dashboard.png'/>
      <div className="mt-24 hero-content">
        <Typography color="#FFF" variant="label">
          Trusted by the community
        </Typography>
        <div className="flex justify-center text-center space-x-8 md:space-x-32 mt-16">
          <img src='./sothebys.svg' style={{height: '4rem'}}/>
          <img src='./hg.svg' style={{height: '4rem'}}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero;