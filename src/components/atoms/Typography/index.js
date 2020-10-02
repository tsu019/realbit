import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


export const Typography = ({ variant, weight, color, text, ...props }) => {
  return (
    <div className={['typography', variant].join(' ')}
          style={{color: color}}
      {...props}
    >
      {props.children}
      { text }
    </div>
  );
};

Typography.propTypes = {
  variant: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};
