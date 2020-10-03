import React from 'react';

import Hero from '../../templates/Hero';
import Overview from '../../templates/Overview';
import Features from '../../templates/Features';
import Solutions from '../../templates/Solutions';

const Landing = () => {
  return(
    <div>
      <Hero />
      <Overview />
      <Features />
      <Solutions />
    </div>
  )
}

export default Landing;