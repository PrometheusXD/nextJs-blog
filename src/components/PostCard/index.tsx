import Link from 'next/link';
import { Heading } from '../Heading';
import { StrapiImage } from '../../shared-types/strapi-image';

import * as Styled from './styles';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
};

export const PostCard = ({ title, excerpt, cover, slug }: PostCardProps) => {
  return (
    <Link href={`/post/${slug}`}>
      <Styled.Wrapper>
        <Styled.Cover src={cover.url} alt={title} />

        <Styled.Content>
          <Heading as="h2" size="small">
            {title}
          </Heading>
          <Styled.Excerpt>{excerpt}</Styled.Excerpt>
        </Styled.Content>
      </Styled.Wrapper>
    </Link>
  );
};
