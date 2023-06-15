import { Base } from '../Base';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { PostGrid } from '../../components/PostGrid';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => {
  return (
    <Base settings={settings}>
      <PostGrid posts={posts} />
    </Base>
  );
};
