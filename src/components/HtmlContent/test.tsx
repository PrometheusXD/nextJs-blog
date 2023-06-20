import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { HtmlContent } from '.';

describe('<HtmlContent />', () => {
  it('should render a text', () => {
    const { container } = renderTheme(<HtmlContent html="Children" />);

    expect(screen.getByText('Children')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 code[class*="language-"],
      .c0 pre[class*="language-"] {
        color: #f8f8f2;
        background: none;
        text-shadow: 0 1px rgba(0,0,0,0.3);
        font-family: Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
      }

      .c0 pre[class*="language-"] {
        padding: 1em;
        margin: .5em 0;
        overflow: auto;
        border-radius: 0.3em;
      }

      .c0:not(pre) > code[class*="language-"],
      .c0 pre[class*="language-"] {
        background: #282a36;
      }

      .c0:not(pre) > code[class*="language-"] {
        padding: .1em;
        border-radius: .3em;
        white-space: normal;
      }

      .c0 .token.comment,
      .c0 .token.prolog,
      .c0 .token.doctype,
      .c0 .token.cdata {
        color: #6272a4;
      }

      .c0 .token.punctuation {
        color: #f8f8f2;
      }

      .c0 .namespace {
        opacity: .7;
      }

      .c0 .token.property,
      .c0 .token.tag,
      .c0 .token.constant,
      .c0 .token.symbol,
      .c0 .token.deleted {
        color: #ff79c6;
      }

      .c0 .token.boolean,
      .c0 .token.number {
        color: #bd93f9;
      }

      .c0 .token.selector,
      .c0 .token.attr-name,
      .c0 .token.string,
      .c0 .token.char,
      .c0 .token.builtin,
      .c0 .token.inserted {
        color: #50fa7b;
      }

      .c0 .token.operator,
      .c0 .token.entity,
      .c0 .token.url,
      .c0 .language-css .token.string,
      .c0 .style .token.string,
      .c0 .token.variable {
        color: #f8f8f2;
      }

      .c0 .token.atrule,
      .c0 .token.attr-value,
      .c0 .token.function,
      .c0 .token.class-name {
        color: #f1fa8c;
      }

      .c0 .token.keyword {
        color: #8be9fd;
      }

      .c0 .token.regex,
      .c0 .token.important {
        color: #ffb86c;
      }

      .c0 .token.important,
      .c0 .token.bold {
        font-weight: bold;
      }

      .c0 .token.italic {
        font-style: italic;
      }

      .c0 .token.entity {
        cursor: help;
      }

      .c1 {
        font-size: calc(1.6rem + 0.2rem);
        line-height: 1.5;
      }

      .c1 p {
        margin: 2.4rem 0;
        font-size: 2.4rem;
      }

      .c1 a,
      .c1 a:visited,
      .c1 a:link {
        color: #f231a5;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c1 a:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
      }

      .c1 img {
        max-width: 100%;
      }

      .c1 .image {
        background: #DDDDDD;
        line-height: 0;
        margin: 2.4rem 0;
      }

      .c1 .image figcaption {
        font-size: 1.6rem;
        padding: 1.6rem;
        text-align: center;
        line-height: 1.3;
      }

      .c1 .image-style-side {
        float: right;
        max-width: 50%;
        margin: 2.4rem;
      }

      .c1 hr {
        border: none;
        border-bottom: 0.1rem solid #DDDDDD;
      }

      .c1 ul,
      .c1 ol {
        margin: 2.4rem 3.2rem;
      }

      .c1 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c1 table {
        width: 100%;
        border-collapse: collapse;
        margin: 2.4rem 0;
      }

      .c1 table td,
      .c1 table th {
        padding: 1.6rem;
        border: 0.1rem solid #DDDDDD;
      }

      .c1 blockquote {
        border-left: 0.5rem solid #f231a5;
        color: #AAAAAA;
        -webkit-filter: brightness(80%);
        filter: brightness(80%);
        padding-left: 2.4rem;
        font-style: italic;
        margin: 2.4rem;
      }

      @media (max-width:768px) {
        .c1 {
          font-size: 1.8rem;
        }

        .c1 .image-style-side {
          float: none;
          max-width: 100%;
          margin: 0;
        }
      }

      <div
        class="c0"
      >
        <div
          class="c1"
        >
          Children
        </div>
      </div>
    `);
  });
});
