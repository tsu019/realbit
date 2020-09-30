import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


export const Heading = ({ size, weight, color, text, ...props }) => {
  return (
    <div className={['heading',`heading--${size}`].join(' ')}
      {...props}
    >
      { text }
    </div>
  );
};

Heading.propTypes = {
  size: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};