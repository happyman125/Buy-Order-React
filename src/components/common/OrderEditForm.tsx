import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Skeleton,
  Text,
} from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form'
import moment from 'moment'

import { OrderType } from '../../types'
import SelectOrderDatasets from './SelectOrderDatasets'
import SelectOrderCountries from './SelectOrderCountries'

type Props = {
  order?: OrderType
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export default function OrderEditForm(props: Props) {
  const { order, onSubmit, isLoading } = props
  const { register, handleSubmit, control } = useForm<Partial<OrderType>>({
    defaultValues: {
      name: order?.name,
      budget: order?.budget,
      countries: order?.countries,
      datasetIds: order?.datasetIds,
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap="10" flexWrap="wrap">
        <Stack w="348px">
          <Heading size="sm" as="u">
            Order Name
          </Heading>
          <Input {...register('name')} w="full" disabled={isLoading} />
        </Stack>

        <Stack w="348px">
          <Heading size="sm" as="u">
            Date Created
          </Heading>
          <Skeleton h="6" isLoaded={!isLoading}>
            <Text>{moment(order?.createdAt).format('L')}</Text>
          </Skeleton>
        </Stack>

        <Stack w="full">
          <Heading size="sm" as="u">
            Order Budget
          </Heading>
          <InputGroup w="50%">
            <InputLeftElement children="$" />
            <Input {...register('budget')} type="number" disabled={isLoading} />
          </InputGroup>
        </Stack>

        <Stack w="full">
          <Heading size="sm" as="u">
            Included datasets
          </Heading>
          <Controller
            control={control}
            name="datasetIds"
            render={({ field: { onChange, value } }) => (
              <SelectOrderDatasets onChange={onChange} value={value} />
            )}
          />
        </Stack>

        <Stack w="full">
          <Heading size="sm" as="u">
            Included countries
          </Heading>
          <Controller
            control={control}
            name="countries"
            render={({ field: { onChange, value } }) => (
              <SelectOrderCountries onChange={onChange} value={value} />
            )}
          />
        </Stack>

        <Flex w="full" justify="center">
          <Button
            w="48"
            colorScheme="purple"
            type="submit"
            isLoading={isLoading}
          >
            Save
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}
