import React from 'react';
import { arrayOf, shape, string} from 'prop-types';
import './style.css';

import { Button } from '../../atoms/Button';

const Navigation = ({ variant, items}) => (
  <div
    className={['navigation', `navigation--${variant}`].join(' ')}
    variant={variant}>
    <img src= './logo-light.svg' />
      { items.map(item => (
        <a className={['list', `list--${variant}`].join(' ')} href={item.url}>{item.title}</a>
      )) }
    <div className="navigation-buttons">
      <Button label="Preview the builder" primary={true} />
      <div style={{marginLeft: '2.4rem'}}>
        <Button label="Start free trial" primary={false} />
      </div>
    </div>
  </div>
);

Navigation.propTypes = {
  variant: string.isRequired,
  items: arrayOf(
    shape({
      title: string.isRequired,
      url: string.isRequired,
    })
  ),
};

Navigation.defaultProps = {
  variant: "dark",
  items: []
};

export default Navigation;