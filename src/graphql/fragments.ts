import { gql } from 'graphql-request';

export const GRAPGHQL_FRAGMENTS = gql`
  fragment image on UploadFile {
    alternativeText
    url
  }

  fragment cover on Post {
    cover {
      data {
        id
        attributes {
          ...image
        }
      }
    }
  }
  fragment tag on Tag {
    displayName
    slug
  }

  fragment tags on Post {
    tags {
      data {
        id
        attributes {
          ...tag
        }
      }
    }
  }

  fragment author on Author {
    displayName
    slug
  }

  fragment authorPost on Post {
    author {
      data {
        id
        attributes {
          ...author
        }
      }
    }
  }

  fragment category on Category {
    displayName
    slug
  }

  fragment categories on Post {
    categories {
      data {
        id
        attributes {
          ...category
        }
      }
    }
  }

  fragment settings on Setting {
    blogName
    blogDescription
    logo {
      data {
        id
        attributes {
          ...image
        }
      }
    }
  }

  fragment post on Post {
    slug
    title
    excerpt
    content
    createdAt
    allowComments
    ...cover
    ...categories
    ...tags
    ...authorPost
  }

`;
