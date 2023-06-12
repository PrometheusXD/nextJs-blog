import Link from 'next/link';
import * as Styled from './styles';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Link href={link} target={target}>
        <Styled.Container>{children}</Styled.Container>
      </Link>
    );
  }

  return (
    <a href={link} target={target}>
      <Styled.Container>{children}</Styled.Container>
    </a>
  );
};
