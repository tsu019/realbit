import React from 'react';
import { Input } from '../components/atoms/Input';

export default {
  title: 'Atoms/Input',
  component: 'input',
}

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  placeholder: 'Email Address',
};