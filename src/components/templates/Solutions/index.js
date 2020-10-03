import React from 'react';
import { Typography } from '../../atoms/Typography';

const Solutions = () => {
  return(
    <div className="section-wrapper pt-40 md:pt-64">
      <div className="container px-12 md:px-0">
        <div className="ml-auto flex flex-wrap space-y-20 w-full md:w-1/2">
          <div>
            <Typography color="#FFF" variant="h2 pb-8">
              MLS Integration
            </Typography>
            <Typography color="#FFF" variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
          <div>
            <Typography color="#FFF" variant="h2 pb-8">
              Showcase personal listings
            </Typography>
            <Typography color="#FFF" variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
          <div>
            <Typography color="#FFF" variant="h2 pb-8">
              Build trust with client testimonials
            </Typography>
            <Typography color="#FFF" variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions;