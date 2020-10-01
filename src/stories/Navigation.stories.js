import React from 'react';
import { withKnobs, array, select } from '@storybook/addon-knobs';

import Navigation from '../components/organisms/Navigation';

import knobData from './Navigation.knobs.json';
const { variant, items } = knobData;

export const dark = () => (
  <Navigation
    variant={select(
      variant.label,
      variant.options,
      variant.default,
      variant.group
    )}
    items={array(items.label, items.default, items.group)}
  />
);

export default {
  title: 'Organisms/Navigation',
  component: Navigation,
  decorators: [withKnobs],
};