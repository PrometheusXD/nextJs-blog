import { Meta, StoryFn } from '@storybook/react';
import { Footer, FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>`,
  },
} as Meta;

export const Template: StoryFn<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
