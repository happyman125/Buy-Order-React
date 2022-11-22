import { SimpleGrid } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import DatasetBox from './DatasetBox'
import { getDatasets } from '../../services/apiClient'

type Props = {
  value?: number[]
  onChange: (value: number[]) => void
}

export default function SelectOrderDatasets({ value = [], onChange }: Props) {
  const { data: datasets, isLoading } = useQuery(['datasets'], getDatasets)
  const handleChange = (newValue: number) => {
    if (value.includes(newValue)) {
      onChange(value.filter((v) => v !== newValue))
    } else {
      onChange([...value, newValue])
    }
  }
  if (isLoading) return null
  return (
    <SimpleGrid columns={2} spacing="4" minH="14">
      {datasets?.map((dataset) => (
        <DatasetBox
          key={dataset.id}
          dataset={dataset}
          isSelected={value.includes(dataset.id)}
          onClick={() => handleChange(dataset.id)}
        />
      ))}
    </SimpleGrid>
  )
}
