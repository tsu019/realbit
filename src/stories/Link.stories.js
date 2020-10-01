import React from 'react';
import { Link } from '../components/atoms/Link';

export default {
  title: 'Atoms/Link',
  component: Link,
};

const Template = (args) => <Link {...args} />

export const Default = Template.bind({});
Default.args = {
  text: 'I am a clickable hyperlink',
};