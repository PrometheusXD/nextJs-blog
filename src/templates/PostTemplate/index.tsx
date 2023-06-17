import { Comments } from '../../components/Comments';
import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { Base } from '../Base';

import * as Styled from './styles';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <Base settings={settings}>
      <Post {...post} />

      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>

      <Comments
        title={post.title}
        slug={post.slug}
        id={post.id}
        allowComments={post.allowComments}
      />
    </Base>
  );
};
