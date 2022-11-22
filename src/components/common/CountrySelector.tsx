import { Button, Flex, Heading, Skeleton, Stack, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { getCountries } from '../../services/apiClient'
import { useStore } from '../../store'

export default function CountrySelector() {
  const { isCountrySelected, toggleCountry } = useStore()
  const { data: countries, isLoading } = useQuery(['countries'], getCountries)

  return (
    <Stack
      w="600px"
      pos="absolute"
      bottom="8"
      left="0"
      right="0"
      bg="whiteAlpha.900"
      shadow="alert"
      mx="auto"
      p="6"
      borderRadius="lg"
    >
      <Heading size="sm">Included countries</Heading>
      <Skeleton isLoaded={!isLoading} borderRadius="full">
        <Flex gap="3" flexWrap="wrap" minH="8">
          {countries?.map((country) => (
            <Button
              key={country.countryCode}
              variant="outline"
              borderRadius="full"
              size="sm"
              colorScheme={isCountrySelected(country) ? 'purple' : 'gray'}
              onClick={() => toggleCountry(country)}
            >
              <Text>{country.name}</Text>
            </Button>
          ))}
        </Flex>
      </Skeleton>
    </Stack>
  )
}
