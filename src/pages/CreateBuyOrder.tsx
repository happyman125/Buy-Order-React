import { Heading } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import BaseLayout from '../layouts/BaseLayout'
import OrderEditForm from '../components/common/OrderEditForm'
import { createBuyOrder } from '../services/apiClient'
import { OrderType } from '../types'
import Card from '../components/common/Card'

export default function CreateBuyOrder() {
  const navigate = useNavigate()
  const client = useQueryClient()
  const mutation = useMutation(createBuyOrder)

  const onCreate = async (data: Partial<OrderType>) => {
    await mutation.mutateAsync({ ...data, createdAt: new Date().toISOString() })
    client.invalidateQueries(['buy-orders'])
    navigate('/buy-orders')
  }

  return (
    <BaseLayout>
      <Heading textAlign="center">New Buy Order</Heading>
      <Card mt="6" w="800px" mx="auto">
        <OrderEditForm onSubmit={onCreate} isLoading={mutation.isLoading} />
      </Card>
    </BaseLayout>
  )
}
