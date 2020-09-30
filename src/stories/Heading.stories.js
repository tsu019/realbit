import React from 'react';
import { Heading } from '../components/atoms/Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  argTypes: {
    size : {control: 'size'},
  },
};

const Template = (args) => <Heading {...args} />

export const Heading1 = Template.bind({});
Heading1.args = {
  size: 'primary',
  weight: '600',
  color: '#11131F',
  text: 'Heading 1',
}

export const Heading2 = Template.bind({});
Heading2.args = {
  size: 'secondary',
  weight: '600',
  color: '#11131F',
  text: 'Heading 2',
}
