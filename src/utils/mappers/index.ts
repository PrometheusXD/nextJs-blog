import { StrapiPostAndSettings } from '../../api/load-posts';
import { PostStrapi } from '../../shared-types/post-strapi';

export const mapData = (postData): StrapiPostAndSettings => {
  return {
    setting: {
      id: postData.setting?.data?.id,
      blogName: postData.setting?.data?.attributes.blogName,
      blogDescription: postData.setting?.data?.attributes.blogDescription,
      logo:
        {
          id: postData.setting?.data?.attributes.logo.data?.id || null,
          url:
            postData.setting?.data?.attributes.logo.data?.attributes.url ||
            null,
          alternativeText:
            postData.setting?.data?.attributes.logo.data?.attributes
              .alternativeText || null,
        } || null,
      menuLink:
        postData.setting?.data?.attributes.menuLink?.map((Link) => ({
          id: Link.id,
          link: Link.link,
          text: Link.text,
          newTab: Link.newTab,
        })) || [],
      text: postData.setting?.data?.attributes.text || null,
    },
    posts: mapPosts(postData.posts?.data),
  };
};

export const mapPosts = (posts): PostStrapi[] => {
  return posts
    ? posts.map((post) => ({
        id: post.id,
        slug: post.attributes.slug,
        title: post.attributes.title,
        excerpt: post.attributes.excerpt,
        content: post.attributes.content,
        allowComments: post.attributes.allowComments,
        cover:
          {
            id: post.attributes.cover.data?.id || null,
            url: post.attributes.cover.data?.attributes.url || null,
            alternativeText:
              post.attributes.cover.data?.attributes.alternativeText || null,
          } || null,
        categories:
          post.attributes.categories.data?.map((category) => ({
            id: category.id,
            displayName: category.attributes.displayName,
            slug: category.attributes.slug,
          })) || [],
        tags:
          post.attributes.tags.data?.map((tag) => ({
            id: tag.id,
            displayName: tag.attributes.displayName,
            slug: tag.attributes.slug,
          })) || [],
        author: {
          id: post.attributes.author.data?.id,
          displayName: post.attributes.author.data?.attributes.displayName,
          slug: post.attributes.author.data?.attributes.slug,
        },
        createdAt: post.attributes.createdAt,
      }))
    : [];
};
