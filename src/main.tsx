import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './theme'

import '@fontsource/comfortaa'
import '@fontsource/comfortaa/300.css'
import '@fontsource/comfortaa/400.css'
import '@fontsource/comfortaa/500.css'
import '@fontsource/comfortaa/600.css'
import '@fontsource/comfortaa/700.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
)
