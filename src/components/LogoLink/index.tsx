import Link from 'next/link';
import { Heading } from '../Heading';

import * as Styled from './styles';

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({
  text,
  srcImg = '',
  link,
  newTab = false,
}: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (nextLink) {
    return (
      <Styled.Container>
        <Heading size="small" uppercase>
          <Link href={link} target={target}>
            {!!srcImg && <img src={srcImg} alt={text} />}
            {!srcImg && text}
          </Link>
        </Heading>
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      <Heading size="small" uppercase>
        <a href={link} target={target}>
          {!!srcImg && <img src={srcImg} alt={text} />}
          {!srcImg && text}
        </a>
      </Heading>
    </Styled.Container>
  );
};
