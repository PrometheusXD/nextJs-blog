import { BlogThemeProvider } from '../src/contexts/BlogThemeContext'
import { GlobalStyles } from '../src/styles/global-styles'
import { theme } from '../src/styles/theme'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.white,
        },
        {
          name: 'dark',
          value: theme.colors.primary,
        },
      ]
    }
  },

  decorators: [
    (Story) => (
      <BlogThemeProvider >
        <Story />
        <GlobalStyles />
      </BlogThemeProvider>
    )
  ]
};

export default preview;
