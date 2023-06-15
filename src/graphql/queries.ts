import { gql } from 'graphql-request';
import { GRAPGHQL_FRAGMENTS } from './fragments';

export const GRAPGHQL_QUERY = gql`
  ${GRAPGHQL_FRAGMENTS}

  query GET_POSTS(
    $categorySlug: String
    $postSlug: String
    $authorSlug: String
    $postSearch: String
    $tagSlug: String
    $sort: [String] = "createdAt:desc"
    $start: Int = 0
    $limit: Int = 10
  ) {
    setting {
      data {
        id
        attributes {
          ...settings
        }
      }
    }
    posts(
      sort: $sort
      pagination: { start: $start, limit: $limit }
      filters: {
        slug: { eq: $postSlug }
        or: [
          { categories: { slug: { eq: $categorySlug } } }
          { author: { slug: { eq: $authorSlug } } }
          { tags: { slug: { eq: $tagSlug } } }
          { title: { contains: $postSearch } }
          { content: { contains: $postSearch } }
          { excerpt: { contains: $postSearch } }
        ]
      }
    ) {
      data {
        id
        attributes {
          ...post
        }
      }
    }
  }

`;
