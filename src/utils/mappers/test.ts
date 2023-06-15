import { mapData } from '.';

import mock from './mock';

const args = mock;

describe('<PostsTemplate />', () => {
  it('should match snapshot', () => {
    mapData(args);
  });
});
