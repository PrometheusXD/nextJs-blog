import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display:block;
    padding-bottom: ${theme.spacings.small};
    font-size: 1.8;
    border-right: 0.5rem solid ${theme.colors.primary};
    transition: all 300ms ease-in-out;

    :hover {
      border-right: 0.5rem solid ${theme.colors.secondary};
    }

    > a {
      color:${theme.colors.white};
      text-decoration: none;
      transition: all 300ms ease-in-out;

      :hover {
        color: ${theme.colors.secondary};
      }
    }

  `}
`;
