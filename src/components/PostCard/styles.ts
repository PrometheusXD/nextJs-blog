import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    box-shadow: 0 0 5px 0px ${theme.colors.darkerGray};

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
      border-left: 2px solid ${theme.colors.primary};
      border-right: 2px solid ${theme.colors.primary};
      transform: scaleY(0);
    }

    &::after {
      border-top: 2px solid ${theme.colors.primary};
      border-bottom: 2px solid ${theme.colors.primary};
      transform: scaleX(0);
    }

    &:hover::before {
      transform: scaleY(1);
    }

    &:hover::after {
      transform: scaleX(1);
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
