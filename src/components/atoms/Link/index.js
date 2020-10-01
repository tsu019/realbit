import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Link = ({ text, ...props}) => {
  return(
    <a 
    href="#"
    className="link">  
      { text }
    </a>
  );
};

Link.propTypes = {
  text: PropTypes.string,
};