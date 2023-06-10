import { Meta, StoryFn } from '@storybook/react';
import { CloneMe, CloneMeProps } from '.';

export default {
  title: 'CloneMe',
  component: CloneMe,
} as Meta;

export const Template: StoryFn<CloneMeProps> = (args) => <CloneMe {...args} />;
