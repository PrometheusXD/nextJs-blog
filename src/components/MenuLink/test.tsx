import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a internal link', () => {
    renderTheme(<MenuLink link="/localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should render open in a new tab', () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        padding-bottom: 1.6rem;
        font-size: 1.8;
        border-right: 0.5rem solid #0A1128;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover {
        border-right: 0.5rem solid #dc143c;
      }

      .c0 > a {
        color: #FFFFFF;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0 > a:hover {
        color: #dc143c;
      }

      <div
        class="c0"
      >
        <a
          href="http://localhost"
          target="_self"
        >
          Children
        </a>
      </div>
    `);
  });
});
