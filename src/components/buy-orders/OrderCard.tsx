import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

import Card from '../common/Card'
import { OrderType } from '../../types'

type Props = {
  order: OrderType
}

export default function OrderCard({ order }: Props) {
  const navigate = useNavigate()
  return (
    <Card
      cursor="pointer"
      border="1px"
      borderColor="white"
      _hover={{ borderColor: 'gray.300' }}
      onClick={() => navigate(`/buy-orders/${order.id}`)}
    >
      <Flex>
        <Stack flex={1}>
          <Heading size="sm">Order Name</Heading>
          <Text>{order.name}</Text>
        </Stack>

        <Stack flex={1}>
          <Heading size="sm">Date Created</Heading>
          <Text>{moment(order.createdAt).format('L')}</Text>
        </Stack>

        <Stack flex={1}>
          <Heading size="sm">Budget</Heading>
          <Text>${order.budget}</Text>
        </Stack>
      </Flex>
    </Card>
  )
}
