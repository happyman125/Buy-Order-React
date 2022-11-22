import { SimpleGrid } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import DatasetBox from '../common/DatasetBox'
import useHashMap from '../../hooks/useHashMap'
import { getDatasets } from '../../services/apiClient'
import { OrderType } from '../../types'

type Props = {
  order?: OrderType
}

export default function OrderDatasets({ order }: Props) {
  const { data: datasets, isLoading } = useQuery(['datasets'], getDatasets)
  const datasetsMap = useHashMap(datasets, 'id')
  if (isLoading) return null
  return (
    <SimpleGrid columns={2} spacing="4" minH="14">
      {order?.datasetIds
        .map((id) => datasetsMap.get(id))
        .map((dataset) => (
          <DatasetBox key={dataset?.id} dataset={dataset} bg="white" />
        ))}
    </SimpleGrid>
  )
}
