import { Box, BoxProps, Flex, Image, Text } from '@chakra-ui/react'
import { DatasetType } from '../../types'

type Props = {
  dataset?: DatasetType
  isSelected?: boolean
  onClick?: () => void
} & BoxProps

export default function DatasetBox({
  dataset,
  isSelected = false,
  onClick,
  ...props
}: Props) {
  return (
    <Flex
      align="center"
      gap="4"
      border="2px"
      borderColor={isSelected ? 'purple.300' : 'gray.200'}
      bg={isSelected ? 'white' : 'gray.50'}
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      onClick={onClick}
      {...props}
    >
      <Image src={dataset?.thumbnailUrl} boxSize="14" />
      <Box>
        <Text>{dataset?.label}</Text>
        <Text fontSize="xs" color="gray.500">
          ${dataset?.costPerRecord} per record
        </Text>
      </Box>
    </Flex>
  )
}
