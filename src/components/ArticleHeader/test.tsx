import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import { formatDate } from '../../utils/format-date';

import { ArticleHeader, ArticleHeaderProps } from '.';

import mock from './mock';

const props: ArticleHeaderProps = mock;

describe('<ArticleHeader />', () => {
  it('should render', () => {
    const { container } = renderTheme(<ArticleHeader {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.cover.url,
    );
    expect(screen.getByText(props.excerpt)).toBeInTheDocument();
    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
