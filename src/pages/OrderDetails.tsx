import {
  Heading,
  useDisclosure,
} from '@chakra-ui/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import BaseLayout from '../layouts/BaseLayout'
import OrderEditForm from '../components/common/OrderEditForm'
import DeleteBuyOrderDialog from '../components/order-details/DeleteBuyOrderDialog'
import { getBuyOrder, updateBuyOrder } from '../services/apiClient'
import { OrderType } from '../types'
import Card from '../components/common/Card'
import OrderDetailsForm from '../components/order-details/OrderDetails'

type Params = {
  id: string
}

export default function OrderDetails() {
  const { id } = useParams<Params>()
  const [editing, setEditing] = useState(false)
  const deleteDialog = useDisclosure()
  const client = useQueryClient()
  const { data: order, isLoading } = useQuery(['buy-order', id], () =>
    getBuyOrder(id!)
  )

  const mutation = useMutation(updateBuyOrder)

  const onSave = async (data: Partial<OrderType>) => {
    if (!id) return
    await mutation.mutateAsync({
      id,
      body: data,
    })
    client.invalidateQueries(['buy-order', id])
    setEditing(false)
  }

  return (
    <BaseLayout>
      <Heading textAlign="center">
        {!editing ? 'Buy Order Details' : 'Edit Buy Order'}
      </Heading>
      <Card mt="6" w="800px" mx="auto">
        {editing ? (
          <OrderEditForm
            order={order}
            onSubmit={onSave}
            isLoading={mutation.isLoading}
          />
        ) : (
          <OrderDetailsForm 
            isLoading={isLoading}
            order={order}
            onEdit={() => setEditing(!editing)}
            onDelete={deleteDialog.onOpen}
          />
        )}
      </Card>

      <DeleteBuyOrderDialog
        isOpen={deleteDialog.isOpen}
        onClose={deleteDialog.onClose}
      />
    </BaseLayout>
  )
}
