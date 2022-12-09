import {
  Button,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react'
import moment from 'moment'

import OrderDatasets from '../../components/order-details/OrderDatasets'
import OrderCountries from '../../components/order-details/OrderCountries'
import { OrderType } from '../../types'

type Props = {
  isLoading: boolean
  order?: OrderType
  onEdit: () => void
  onDelete: () => void
}

export default function OrderDetailsForm({isLoading, order, onEdit, onDelete}: Props) {
  return (
    <Flex gap="10" flexWrap="wrap">
      <Stack w="348px">
        <Heading size="sm" as="u">
          Order Name
        </Heading>
        <Skeleton h="6" isLoaded={!isLoading}>
          <Text>{order?.name}</Text>
        </Skeleton>
      </Stack>

      <Stack w="348px">
        <Heading size="sm" as="u">
          Date Created
        </Heading>
        <Skeleton h="6" isLoaded={!isLoading}>
          <Text>{moment(order?.createdAt).format('L')}</Text>
        </Skeleton>
      </Stack>

      <Stack w="348px">
        <Heading size="sm" as="u">
          Order Budget
        </Heading>
        <Skeleton isLoaded={!isLoading}>
          <Text>${order?.budget}</Text>
        </Skeleton>
      </Stack>

      <Stack w="full">
        <Heading size="sm" as="u">
          Included datasets
        </Heading>
        <Skeleton isLoaded={!isLoading}>
          <OrderDatasets order={order} />
        </Skeleton>
      </Stack>

      <Stack w="full">
        <Heading size="sm" as="u">
          Included countries
        </Heading>
        <Skeleton isLoaded={!isLoading}>
          <OrderCountries order={order} />
        </Skeleton>
      </Stack>

      <Flex justify="flex-end" w="full" gap="4">
        <Button colorScheme="purple" onClick={() => onEdit()}>
          Edit Order
        </Button>
        <Button colorScheme="red" onClick={() => onDelete()}>
          Delete Order
        </Button>
      </Flex>
    </Flex>
  )
}
