import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';

import props from './mock';

describe('<Header />', () => {
  it('should render an image, a heading and text', () => {
    const { container } = renderTheme(
      <Header {...props} showText={undefined} />,
    );

    expect(
      screen.getByRole('heading', { name: 'Otávio Miranda' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /Otávio Miranda/i }),
    ).toHaveAttribute('src', props.logo);
    expect(screen.getByText(props.blogDescription)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render an image', () => {
    renderTheme(<Header {...props} showText={false} />);

    expect(
      screen.queryByRole('heading', { name: 'Otávio Miranda' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /Otávio Miranda/i }),
    ).toHaveAttribute('src', props.logo);
    expect(screen.queryByText(props.blogDescription)).not.toBeInTheDocument();
  });
});
