import { Flex, Skeleton } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import BaseLayout from '../layouts/BaseLayout'
import OrderCard from '../components/buy-orders/OrderCard'
import CountrySelector from '../components/common/CountrySelector'
import SelectedCountriesInfo from '../components/common/SelectedCountriesInfo'
import OrderListHeader from '../components/buy-orders/OrderListHeader'
import { getBuyOrders, getCountries } from '../services/apiClient'
import { useStore } from '../store'
import { useMemo } from 'react'

export default function BuyOrders() {
  const { data, isLoading } = useQuery(['buy-orders'], getBuyOrders)
  const countriesQuery = useQuery(['countries'], getCountries)
  const selectedCountries = useStore((state) => state.selectedCountries)

  const orders = useMemo(
    () =>
      data?.filter((order) =>
        selectedCountries.find((country) =>
          order.countries.includes(country.countryCode)
        )
      ),
    [data, selectedCountries]
  )

  return (
    <BaseLayout>
      <OrderListHeader />
      <SelectedCountriesInfo count={orders?.length} />
      <Flex mt="2" gap="4" flexDir="column">
        {(isLoading || countriesQuery.isLoading) && <Skeleton h="28" />}
        {orders?.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </Flex>
      <CountrySelector />
    </BaseLayout>
  )
}
