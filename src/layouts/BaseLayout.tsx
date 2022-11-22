import { Box, Container } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Header from '../components/common/Header'

type Props = {
  children: ReactNode
}

export default function BaseLayout({ children }: Props) {
  return (
    <Box h="100vh" bg="background">
      <Header />
      <Box overflow="auto" h="calc(100vh - 80px)">
        <Container maxW="1280px" pt="20" pb="40">
          {children}
        </Container>
      </Box>
    </Box>
  )
}
