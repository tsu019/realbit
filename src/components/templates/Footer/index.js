import React from 'react';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';

const Footer = () => {
  return(
    <div>
      <div className="section-wrapper" style={{backgroundColor: '#FFF'}}>
        <div className="text-center pt-40 px-8 md:px-0">
          <Typography variant="h2">
            Realtor Websites That Converts
          </Typography>
          <Typography variant="body1 pt-8">
            See the effects of a powerful, lead generating website.
          </Typography>
          <div className="pt-16">
            <Button label="See all plans" primary={true} />
          </div>
        </div>
      </div>
      <div className="flex px-16 py-8 align-middle" style={{backgroundColor: '#11131F'}}>
          <img src='./logo-light.svg' style={{width: '2rem'}} />
          <span className="pl-4" style={{color: '#FFF', fontWeight: '700', lineHeight: '2.5'}}>Realbit</span>
        <div className="hidden md:block ml-auto">
          <h5 style={{color: '#FFF', lineHeight: '2.5'}}>
            Advanced web builder for realtors
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Footer;