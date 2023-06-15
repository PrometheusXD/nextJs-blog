import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { PostTemplate } from '../../templates/PostTemplate';

import { StrapiPostAndSettings, loadPosts } from '../../api/load-posts';

export default function PostPage({ posts, setting }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>{`${setting.blogName} - ${setting.blogDescription}`}</title>
        <meta name="description" content={posts[0].content} />
      </Head>
      <PostTemplate post={posts[0]} settings={setting} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: StrapiPostAndSettings | null = null;
  let paths = [];

  try {
    data = await loadPosts();
    paths = data.posts.map((post) => ({ params: { slug: post.slug } }));
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (
  ctx,
) => {
  let data = null;

  try {
    data = await loadPosts({ postSlug: ctx.params.slug as string });
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
    },

    revalidate: 24 * 60 * 60,
  };
};
