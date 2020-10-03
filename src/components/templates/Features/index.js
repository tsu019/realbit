import React from 'react';
import './style.css';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';

const Features = () => {
  return(
    <div className="section-wrapper" style={{backgroundColor: '#FFF'}}>
      <div className="container">
        <div className="text-center mx-auto pt-40 w-2/5">
          <Typography variant="h1">
            Build websites that drive conversions
          </Typography>
        </div>
        <div className="flex mt-32 space-x-12">
          <div className="w-1/3">
            <img src='./feature-1.png' />
            <div style={{backgroundColor:'#11BC7A'}}>
              <Typography color="#FFF" variant="body1">
                Realbit Landing Pages
              </Typography>
            </div>
          </div>
          <img className="w-1/3" src='./feature-2.png' />
          <img className="w-1/3" src='./feature-3.png' />
        </div>
      </div>
    </div>
  )
};

export default Features;