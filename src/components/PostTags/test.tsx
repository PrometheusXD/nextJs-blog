import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostTags } from '.';

import mock from './mock';

const props = mock;

describe('<PostTags />', () => {
  it('should render two tags', () => {
    const { container } = renderTheme(<PostTags {...props} />);

    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getByText(/tags:/i)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
