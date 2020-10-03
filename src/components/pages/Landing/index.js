import React from 'react';

import Hero from '../../templates/Hero';
import Overview from '../../templates/Overview';
import Features from '../../templates/Features';
import Solutions from '../../templates/Solutions';
import Footer from '../../templates/Footer';

const Landing = () => {
  return(
    <div>
      <Hero />
      <Overview />
      <Features />
      <Solutions />
      <Footer />
    </div>
  )
}

export default Landing;