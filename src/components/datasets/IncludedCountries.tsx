import { Flex, Tag } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { getCountries } from '../../services/apiClient'

type Props = {
  datasetId: number
}

export default function IncludedCountries({ datasetId }: Props) {
  const { data } = useQuery(['countries'], getCountries)

  const countries = data?.filter((country) =>
    country.storedData.find(
      (item) => item.datasetId === datasetId && item.recordCount > 0
    )
  )

  return (
    <Flex flexWrap="wrap" gap="2">
      {countries?.map((country) => (
        <Tag
          key={country.countryCode}
          borderRadius="full"
          colorScheme="gray"
          variant="outline"
          px="3"
        >
          {country.name}
        </Tag>
      ))}
    </Flex>
  )
}
