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
  variables?: LoadPostsVariables;
};

export const defaultLoadPostsVariables: LoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 12,
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostAndSettings> => {
  const graphqlData = await request(config.graphqlURL, GRAPGHQL_QUERY, {
    ...defaultLoadPostsVariables,
    ...variables,
  });

  const data = mapData(graphqlData);

  return data;
};
