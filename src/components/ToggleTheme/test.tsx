import { renderTheme } from '../../styles/render-theme';
import { ToggleTheme } from '.';

describe('<ToggleTheme />', () => {
  it('should render', () => {
    const { container } = renderTheme(<ToggleTheme />);

    expect(container).toMatchSnapshot();
  });
});
