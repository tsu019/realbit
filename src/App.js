import React from 'react';

import Hero from '../src/components/templates/Hero';
import Overview from '../src/components/templates/Overview';
import Features from '../src/components/templates/Features';

function App() {
  return (
    <div>
      <header>
        <Hero />
        <Overview />
        <Features />
      </header>
    </div>
  );
}

export default App;
