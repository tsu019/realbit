import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Input = ({ variant, placeholder, ...props }) => {
  return(
    <div>
      <input
        className={['input',`${variant}`].join(' ')}
        type="text"
        placeholder={ placeholder }
      />
    </div>
  );
};

Input.propTypes = {
  variant: PropTypes.string,
  placeholder: PropTypes.string,
};