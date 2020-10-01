import React from 'react';
import { Typography } from '../components/atoms/Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    size : {control: 'size'},
  },
};

const Template = (args) => <Typography {...args} />

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
  weight: '600',
  color: '#11131F',
  text: 'Heading 1',
}

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
  weight: '600',
  color: '#11131F',
  text: 'Heading 2',
}

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'h3',
  weight: '600',
  color: '#11131F',
  text: 'Heading 3',
}

export const Body1 = Template.bind({});
Body1.args = {
  variant: 'body1',
  weight: '400',
  color: 'rgba(0, 0, 0, 0.8)',
  text: 'Body 1'
}

export const Body2 = Template.bind({});
Body2.args = {
  variant: 'body2',
  weight: '400',
  color: '#11131F',
  text: 'Body 2'
}