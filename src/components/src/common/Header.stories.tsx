import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Header, { HeaderProps } from './Header';

const Default: Meta = {
  component: Header,
  title: "components/HeaderComponent",
  argTypes: {
  }
};

export default Default;

const Template: Story<HeaderProps> = (args) => {
  return <Header {...args} />;
};

export const HeaderComponentsDefault = Template.bind({});
HeaderComponentsDefault.args = {};