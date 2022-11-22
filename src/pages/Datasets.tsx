import { useMemo } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import BaseLayout from '../layouts/BaseLayout'
import DatasetCard from '../components/datasets/DatasetCard'
import DatasetSkeleton from '../components/datasets/DatasetSkeleton'
import CountrySelector from '../components/common/CountrySelector'
import SelectedCountriesInfo from '../components/common/SelectedCountriesInfo'
import { getCountries, getDatasets } from '../services/apiClient'
import { useStore } from '../store'

export default function Datasets() {
  const { data, isLoading } = useQuery(['datasets'], getDatasets)
  const countriesQuery = useQuery(['countries'], getCountries)
  const selectedCountries = useStore((state) => state.selectedCountries)

  const datasets = useMemo(
    () =>
      data?.filter((dataset) =>
        selectedCountries?.find((country) =>
          country.storedData.find(
            (item) => item.datasetId === dataset.id && item.recordCount > 0
          )
        )
      ),
    [data, selectedCountries]
  )

  return (
    <BaseLayout>
      <Heading textAlign="center">Datasets</Heading>
      <SelectedCountriesInfo count={datasets?.length} />
      <Flex mt="2" gap="8" flexWrap="wrap">
        {(isLoading || countriesQuery.isLoading) && <DatasetSkeleton />}
        {datasets?.map((dataset) => (
          <DatasetCard key={dataset.id} dataset={dataset} />
        ))}
      </Flex>
      <CountrySelector />
    </BaseLayout>
  )
}
