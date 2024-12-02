import { Meta, StoryFn } from '@storybook/react';
import Card from './Card';
import { cardData } from '../data/CardData';
import { CardProps } from '../lib/definitions';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    subTitle: { control: 'text' },
    description: { control: 'text' },
    icon: { control: 'text' },
    isButton: { control: 'boolean' },
    buttonText: { control: 'text' },
    buttonColor: { control: 'color' },
    isTransitionPanel: { control: 'boolean' },
    transitionPanelContent: { control: 'text' },
    onClick: { action: 'clicked' }
  },
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args) => {
  console.log(args);
  return <Card cardData={[args]} />;
};

export const Default = Template.bind({});
Default.args = {
  ...cardData[0],
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...cardData[1],
};

export const NoImage = Template.bind({});
NoImage.args = {
  ...cardData[2],
};

export const NoButton = Template.bind({});
NoButton.args = {
  ...cardData[3],
};

export const TextOnlyButton = Template.bind({});
TextOnlyButton.args = {
  ...cardData[4],
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  ...cardData[5],
};