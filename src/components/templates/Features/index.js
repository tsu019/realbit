import React from 'react';
import './style.css';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';

const Features = () => {
  return(
    <div className="section-wrapper" style={{backgroundColor: '#FFF'}}>
      <div className="container">
        <div className="w-full text-center mx-auto pt-40 md:w-2/5">
          <Typography variant="h1">
            Build websites that drive conversions
          </Typography>
        </div>
        <div className="md:flex mt-32 md:space-x-12">
          <div className="w-full md:w-1/3 px-8 md:px-0 pb-12 md:pb-0">
            <img src='./feature-1.png' />
            <div className="px-8 py-8 space-y-4" style={{backgroundColor:'#11BC89'}}>
              <Typography color="#FFF" variant="body1">
                <strong>Realbit Landing Pages</strong>
              </Typography>
              <Typography color="#FFF" variant="body2">
                Build, launch, and optimize custom landing pages for any campaign — without developers or tech bottlenecks
              </Typography>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-8 md:px-0 pb-12 md:pb-0">
            <img src='./feature-2.png' />
            <div className="px-8 py-8 space-y-4" style={{backgroundColor:'#5A45FF'}}>
              <Typography color="#FFF" variant="body1">
                <strong>Popups & Sticky Bars</strong>
              </Typography>
              <Typography color="#FFF" variant="body2">
                Drive more leads and revenue from any web page by showing targeted popups and sticky bars to specific users
              </Typography>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-8 md:px-0">
            <img src='./feature-3.png' />
            <div className="px-8 py-8 space-y-4" style={{backgroundColor:'#F38F70'}}>
              <Typography color="#FFF" variant="body1">
                <strong>Conversion Intelligence Tool</strong>
              </Typography>
              <Typography color="#FFF" variant="body2">
                Enhance your marketing skills with machine learning tools to ensure the best campaign performance every time
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Features;