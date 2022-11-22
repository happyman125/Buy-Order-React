import { Text } from '@chakra-ui/react'
import { useStore } from '../../store'

export default function SelectedCountriesInfo({ count = 0 }: {count?: number}) {
  const { selectedCountries } = useStore()

  const getCountriesList = () => {
    return selectedCountries.reduce((result, country, index) => {
      let joinChars = ''
      if (index !== 0) {
        if (index !== selectedCountries.length - 1) joinChars = ', '
        else joinChars = ' & '
      }
      return `${result}${joinChars}${country.name}`
    }, '')
  }

  if (!selectedCountries.length)
    return <Text mt="10">Select one or more Country</Text>

  return (
    <Text mt="10">
      Showing <strong>{count}</strong> results from{' '}
      <strong>{getCountriesList()}</strong>
    </Text>
  )
}
