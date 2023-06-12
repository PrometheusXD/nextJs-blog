import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { formatDate } from '../../utils/format-date';
import { Post, PostProps } from '.';

import mock from './mock';

const props: PostProps = mock;

describe('<Post />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Post {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.cover.url,
    );
    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();
    expect(
      screen.getAllByText(/^Fugit aliquip erroribus eu eam/i)[0],
    ).toHaveStyle({ 'font-size': '2.4rem' });
    expect(
      screen.getByText(/^Blockquote: Et sed legere rationibus/i),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
