import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard, PostCardProps } from '.';

import mock from './mock';

const props: PostCardProps = mock;

describe('<PostCard />', () => {
  it('should render a card with heading, cover and excerpt', () => {
    const { container } = renderTheme(<PostCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.cover.url,
    );
    expect(screen.getByText(props.excerpt)).toBeInTheDocument();

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/post/${props.slug}`,
    );

    expect(container).toMatchSnapshot();
  });
});
