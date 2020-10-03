import React from 'react';
import './style.css';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';

const Overview = () => {
  return(
    <div className="section-wrapper flex pt-40 md:pt-64" style={{backgroundColor: '#11131F'}}>
        <div className="container px-12 md:px-0">
         <div className="left-0 w-full md:w-1/2">
            <Typography color="#FFF" variant="label" className="pb-8">
              Build
            </Typography>
            <Typography color="#FFF" variant="h1">
              Build Websites That <br/ > Drive Conversions
            </Typography>
            <Typography color="#FFF" variant="body1">
              Our technology sets up a sales funnel to your website by making it easier for leads to find your website. Our websites also allow you to talk with your customers directly. Collect your leads’ email and blast them with email marketing.
            </Typography>
            <div className="pt-16">
              <Button label="Start realbit for free" primary={true} />
            </div>  
        </div>
      </div>
    </div>
  )
}

export default Overview;