import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'

import Card from '../common/Card'
import DatasetRecords from './DatasetRecords'
import { DatasetType } from '../../types'
import IncludedCountries from './IncludedCountries'

type Props = {
  dataset: DatasetType
}

export default function DatasetCard({ dataset }: Props) {
  return (
    <Card w="394px">
      <Stack spacing="5">
        <Flex gap="5" align="center">
          <Box
            boxSize="16"
            bg="gray.100"
            borderRadius="md"
            overflow="hidden"
            shadow="sm"
          >
            <Image src={dataset.thumbnailUrl} alt={dataset.name} />
          </Box>
          <Text fontSize="2xl" noOfLines={2}>
            {dataset.label}
          </Text>
        </Flex>

        <Stack>
          <Heading size="sm">Description</Heading>
          <Text noOfLines={3} minH="72px">
            {dataset.description}
          </Text>
        </Stack>

        <Flex justify="space-between" align="center">
          <Heading size="sm">Cost Per Record</Heading>
          <Text>${dataset.costPerRecord}</Text>
        </Flex>

        <Flex justify="space-between" align="center">
          <Heading size="sm">Available Records</Heading>
          <DatasetRecords datasetId={dataset.id} />
        </Flex>

        <Stack>
          <Heading size="sm">Included countries</Heading>
          <IncludedCountries datasetId={dataset.id} />
        </Stack>
      </Stack>
    </Card>
  )
}
