import request from 'graphql-request';
import { defaultLoadPostsVariables, loadPosts } from './load-posts';
import config from '../config';

jest.mock('graphql-request');
jest.mock('../utils/mappers');
jest.mock('../graphql/queries', () => {
  return {
    GRAPGHQL_QUERY: 'A_QUERY',
  };
});

describe('load-posts', () => {
  it('should call request with default variables', async () => {
    await loadPosts();

    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'A_QUERY',
      defaultLoadPostsVariables,
    );
  });

  it('should call request with default variables', async () => {
    await loadPosts({ authorSlug: 'OK' });

    expect(request).toHaveBeenCalledWith(config.graphqlURL, 'A_QUERY', {
      ...defaultLoadPostsVariables,
      authorSlug: 'OK',
    });
  });
});
