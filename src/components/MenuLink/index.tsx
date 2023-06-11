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
      <Styled.Container>
        <Link href={link} target={target}>
          {children}
        </Link>
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      <a href={link} target={target}>
        {children}
      </a>
    </Styled.Container>
  );
};
