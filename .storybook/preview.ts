import type { Preview } from '@storybook/react'

import { ThemeProvider } from 'styled-components'

import { withThemeFromJSXProvider } from '@storybook/addon-themes'

import { GlobalStyles } from '../src/assets/styles/global-style'

import { theme } from '../src/assets/styles/theme'

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: theme
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles
  })
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
