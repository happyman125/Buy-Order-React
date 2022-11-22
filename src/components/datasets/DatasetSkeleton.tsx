import { Box, Flex, Skeleton, Stack } from '@chakra-ui/react'
import Card from '../common/Card'

export default function DatasetSkeleton() {
  return (
    <Card boxSize="384px">
      <Stack spacing="7">
        <Flex gap="5" align="center">
          <Skeleton boxSize="16" />
          <Skeleton h="8" flex={1} />
        </Flex>

        <Stack>
          <Skeleton h="8" />
          <Box h="16">
            <Skeleton h="5" />
          </Box>
        </Stack>

        <Flex justify="space-between" align="center">
          <Skeleton h="8" w="20" />
          <Skeleton h="5" w="32" />
        </Flex>

        <Flex justify="space-between" align="center">
          <Skeleton h="8" w="20" />
          <Skeleton h="5" w="32" />
        </Flex>
      </Stack>
    </Card>
  )
}
