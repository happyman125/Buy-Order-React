import { Tag } from '@chakra-ui/react'
import { CountryType } from '../../types'

type Props = {
  country: CountryType
  isSelected?: boolean
  onClick?: () => void
}

export default function CountryTag({
  country,
  isSelected = true,
  onClick,
}: Props) {
  return (
    <Tag
      key={country?.countryCode}
      borderRadius="full"
      colorScheme={isSelected ? 'purple' : 'blackAlpha'}
      variant="outline"
      px="3"
      cursor="pointer"
      onClick={onClick}
    >
      {country?.name}
    </Tag>
  )
}
