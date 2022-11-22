import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function OrderListHeader() {
  return (
    <Flex justify="space-between" align="center">
      <Box w="48" />
      <Heading textAlign="center">Your Buy Orders</Heading>
      <Box w="48">
        <Link to="/create/buy-orders">
          <Button colorScheme="purple">Create Buy Orders</Button>
        </Link>
      </Box>
    </Flex>
  )
}
