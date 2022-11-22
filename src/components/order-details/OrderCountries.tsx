import { Flex } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import CountryTag from '../common/CountryTag'
import useHashMap from '../../hooks/useHashMap'
import { getCountries } from '../../services/apiClient'
import { OrderType } from '../../types'

type Props = {
  order?: OrderType
}

export default function OrderCountries({ order }: Props) {
  const { data: countries, isLoading } = useQuery(['countries'], getCountries)
  const countriesMap = useHashMap(countries, 'countryCode')
  if (isLoading) return null
  return (
    <Flex flexWrap="wrap" gap="3" minH="6">
      {order?.countries
        .map((code) => countriesMap.get(code)!)
        .map((country) => (
          <CountryTag key={country?.countryCode} country={country} />
        ))}
    </Flex>
  )
}
