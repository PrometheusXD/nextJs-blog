import { renderTheme } from '../../styles/render-theme';
import { ToggleTheme } from '.';
import { theme } from '../../styles/theme';
import { fireEvent, screen } from '@testing-library/react';

describe('<ToggleTheme />', () => {
  beforeEach(() => {
    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'inverted' }),
    );
  });
  afterEach(() => {
    localStorage.removeItem('theme');
  });

  it('should render input without theme', () => {
    localStorage.removeItem('theme');
    renderTheme(<ToggleTheme />);

    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should render input with default theme', () => {
    localStorage.setItem('theme', JSON.stringify({ name: 'default' }));
    renderTheme(<ToggleTheme />);

    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should render input checked with inverted theme', () => {
    renderTheme(<ToggleTheme />);

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should render input and toggle between theme when toggling input', () => {
    const { container } = renderTheme(<ToggleTheme />);

    const label = screen.getByLabelText('Toggle light and dark mode');
    const input = screen.getByRole('checkbox');

    fireEvent.click(label);
    expect(input).not.toBeChecked();

    fireEvent.click(label);
    expect(input).toBeChecked();

    expect(container).toMatchSnapshot();
  });
});
