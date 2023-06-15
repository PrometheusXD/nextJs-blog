import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Base, BaseProps } from '.';
import mock from './mock';

const props: BaseProps = mock;

describe('<Base />', () => {
  it('should render base elements', () => {
    const { container } = renderTheme(<Base {...props} />);

    expect(
      screen.getByRole('img', {
        name: 'Otávio Miranda - Uma descrição para o seu blog.',
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Open or close menu')).toBeInTheDocument();
    expect(screen.getByText('O texto da footer')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
