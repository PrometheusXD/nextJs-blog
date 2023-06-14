import { Meta, StoryFn } from '@storybook/react';
import { PostTags, PostTagsProps } from '.';

import mock from './mock';

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock,
  argTypes: {
    tags: { type: 'symbol' },
  },
  parameters: {
    layout: 'padded',
  },
} as Meta<PostTagsProps>;

export const Template: StoryFn<PostTagsProps> = (args) => {
  return (
    <div>
      <PostTags {...args} />
    </div>
  );
};
