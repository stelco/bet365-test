import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { cardData } from '../data/CardData';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    buttonColor: { control: 'color' },
    icon: { control: 'boolean' }, // Change control type to boolean
  },
} as Meta;

const Template: StoryFn<any> = (args: any) => {
  console.log(args);
  return <Button {...args} />;
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: cardData[0].buttonText,
  buttonColor: cardData[0].buttonColor,
  icon: true, // Default to true
};
PrimaryButton.argTypes = {
  icon: {
    control: 'boolean',
    mapping: {
      true: cardData[0].icon,
      false: '',
    },
  },
};