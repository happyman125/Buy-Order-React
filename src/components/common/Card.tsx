import { Box, BoxProps } from '@chakra-ui/react'

export default function Card({ children, ...props }: BoxProps) {
  return (
    <Box bg="white" p="8" borderRadius="lg" shadow="card" {...props}>
      {children}
    </Box>
  )
}
