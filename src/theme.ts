import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  fonts: {
    heading: `'Comfortaa', sans-serif`,
    body: `'Comfortaa', sans-serif`,
  },

  colors: {
    background: '#F7FAFF',
    dark: '#051336',
  },

  shadows: {
    card: '0px 0px 20px 0px rgba(76, 87, 125, 0.08)',
    alert: '0px 0px 20px 0px rgba(76, 87, 125, 0.16)',
  },
})
