import { request } from 'graphql-request';
import { GRAPGHQL_QUERY } from '../graphql/queries';
import config from '../config';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export const loadPosts = async (variables: LoadPostsVariables = {}) => {
  const defaultVariables: LoadPostsVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 10,
  };

  const data = await request(config.graphqlURL, GRAPGHQL_QUERY, {
    ...defaultVariables,
    ...variables,
  });

  return data;
};
