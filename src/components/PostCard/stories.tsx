import { Meta, StoryFn } from '@storybook/react';
import { PostCard, PostCardProps } from '.';
import mock from './mock';

export default {
  title: 'PostCard',
  component: PostCard,
  args: mock,
  argTypes: {
    cover: { type: 'symbol' },
  },
} as Meta<PostCardProps>;

export const Template: StoryFn<PostCardProps> = (args) => {
  return (
    <div style={{ maxWidth: '35rem' }}>
      <PostCard {...args} />
    </div>
  );
};
