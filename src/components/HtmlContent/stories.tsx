import { Meta, StoryFn } from '@storybook/react';
import { HtmlContent, HtmlContentProps } from '.';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla reiciendis impedit excepturi fuga maiores obcaecati odio optio quibusdam officia. Quia vero eveniet eos nihil tempora quas nam explicabo voluptates.`,
  },
} as Meta;

export const Template: StoryFn<HtmlContentProps> = (args) => {
  return (
    <div>
      <HtmlContent {...args} />
    </div>
  );
};
