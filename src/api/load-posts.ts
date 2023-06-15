import { request } from 'graphql-request';
import { GRAPGHQL_QUERY } from '../graphql/queries';
import { mapData } from '../utils/mappers';
import config from '../config';
import { SettingsStrapi } from '../shared-types/settings-strapi';
import { PostStrapi } from '../shared-types/post-strapi';

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

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostStrapi[];
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostAndSettings> => {
  const defaultVariables: LoadPostsVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 10,
  };

  const graphqlData = await request(config.graphqlURL, GRAPGHQL_QUERY, {
    ...defaultVariables,
    ...variables,
  });

  const data = mapData(graphqlData);

  return data;
};
