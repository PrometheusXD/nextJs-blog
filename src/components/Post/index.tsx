import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostContainer } from '../PostContainer';
import * as Styled from './styles';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
  content,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader
          id={id}
          title={title}
          excerpt={excerpt}
          cover={cover}
          author={author}
          categories={categories}
          createdAt={createdAt}
        />
      </PostContainer>

      <PostContainer size="content">
        <HtmlContent html={content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
