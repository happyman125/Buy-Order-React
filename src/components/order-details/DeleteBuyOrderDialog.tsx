import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from 'react'

import { deleteBuyOrder } from '../../services/apiClient'

type Params = {
  id: string
}

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function DeleteBuyOrderDialog({ isOpen, onClose }: Props) {
  const { id } = useParams<Params>()
  const navigate = useNavigate()
  const cancelRef = useRef<any>()
  const client = useQueryClient()
  const mutation = useMutation(deleteBuyOrder)
  const handleDelete = async () => {
    if (!id) return
    await mutation.mutateAsync(id)
    client.invalidateQueries(['buy-orders'])
    onClose()
    navigate('/buy-orders')
  }
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Buy Order
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={handleDelete}
              isLoading={mutation.isLoading}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
