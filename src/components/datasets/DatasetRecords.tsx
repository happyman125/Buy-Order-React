import { Text } from '@chakra-ui/react'
import { useStore } from '../../store'

type Props = {
  datasetId: number
}

export default function DatasetRecords({ datasetId }: Props) {
  const selectedCountries = useStore((state) => state.selectedCountries)
  const availableRecords = selectedCountries
    .filter((country) =>
      country.storedData.find(
        (item) => item.datasetId === datasetId && item.recordCount > 0
      )
    )
    .flatMap((country) =>
      country.storedData.filter((data) => data.datasetId === datasetId)
    )
    .reduce((result, item) => result + item.recordCount, 0)
  return <Text>{availableRecords}</Text>
}
