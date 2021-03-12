import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import HeaderComponents, { HeaderProps } from './HeaderComponents';

const Default: Meta = {
  component: HeaderComponents,
  title: "components/HeaderComponent",
  argTypes: {
  }
};

export default Default;

const Template: Story<HeaderProps> = (args) => {
  return <HeaderComponents {...args} />;
};

export const HeaderComponentsDefault = Template.bind({});
HeaderComponentsDefault.args = {};