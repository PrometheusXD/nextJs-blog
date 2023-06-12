import styled, { DefaultTheme, css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

type MenuBehaviorProps = {
  menuVisible: boolean;
};

const wrapperChanger = (theme: DefaultTheme) =>
  css`
    left: -30rem;
    overflow-y: hidden;

    @media ${theme.media.lteMedium} {
    left: -32rem;
    }
`;

export const Wrapper = styled.div<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    overflow-y: auto;

    ${!menuVisible && wrapperChanger(theme)}
  `}
`;

export const Nav = styled.nav`
  margin: auto;
  width: 100%;
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

const buttonChanger = (theme: DefaultTheme) =>
  css`
    left: 1rem;

    @media ${theme.media.lteMedium} {
    left: -0.5rem;
    }
`;

export const OpenClose = styled.a<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    left: 26rem;
    transition: all 300ms ease-in-out;

    &:hover {
    color: ${theme.colors.secondary};
    }

    ${!menuVisible && buttonChanger(theme)}
  `}
`;
