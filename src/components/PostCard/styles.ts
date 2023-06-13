import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: transform .3s ease-in-out;
    }

    &::before {
      border-left: 2.5px solid ${theme.colors.secondary};
      border-right: 2.5px solid ${theme.colors.secondary};
      transform: scaleY(0);
    }

    &::after {
      border-top: 2.5px solid ${theme.colors.secondary};
      border-bottom: 2.5px solid ${theme.colors.secondary};
      transform: scaleX(0);
    }

    &:hover::before {
      transform: scaleY(1);
    }

    &:hover::after {
      transform: scaleX(1);
    }

    &:hover ${HeadingStyles} {
      color: ${theme.colors.secondary};
      transition: all 300ms ease-in-out;
    }

    ${HeadingStyles} {
      margin: 0;
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;

export const Cover = styled.img`
  max-width: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: calc(${theme.spacings.small} - 0.6rem);
  `}
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkText};
  `}
`;
