import * as Styled from './styles';
import { PostTag } from '../../shared-types/tag';
import Link from 'next/link';

export type PostTagsProps = {
  tags?: PostTag[];
};

export const PostTags = ({ tags }: PostTagsProps) => {
  return (
    <Styled.Wrapper>
      tags:
      {tags.map((tag) => (
        <span key={tag.id}>
          <Link href={`/tag/${tag.slug}`}>{tag.displayName}</Link>
        </span>
      ))}
    </Styled.Wrapper>
  );
};
