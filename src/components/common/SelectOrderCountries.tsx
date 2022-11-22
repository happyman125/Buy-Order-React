import { Flex } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import CountryTag from './CountryTag'
import { getCountries } from '../../services/apiClient'

type Props = {
  value?: string[]
  onChange: (value: string[]) => void
}

export default function SelectOrderCountries({ value = [], onChange }: Props) {
  const { data: countries, isLoading } = useQuery(['countries'], getCountries)
  const handleChange = (newValue: string) => {
    if (value.includes(newValue)) {
      onChange(value.filter((v) => v !== newValue))
    } else {
      onChange([...value, newValue])
    }
  }
  if (isLoading) return null
  return (
    <Flex flexWrap="wrap" gap="3" minH="6">
      {countries?.map((country) => (
        <CountryTag
          key={country.countryCode}
          country={country}
          isSelected={value.includes(country.countryCode)}
          onClick={() => handleChange(country.countryCode)}
        />
      ))}
    </Flex>
  )
}
