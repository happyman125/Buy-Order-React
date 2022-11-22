import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import Datasets from './pages/Datasets'
import BuyOrders from './pages/BuyOrders'
import OrderDetails from './pages/OrderDetails'
import CreateBuyOrder from './pages/CreateBuyOrder'
import { getCountries } from './services/apiClient'
import { useStore } from './store'

export default function App() {
  const { setSelectedCountries } = useStore()
  const { data: countries } = useQuery(['countries'], getCountries)

  useEffect(() => {
    if (countries) setSelectedCountries(countries)
  }, [countries])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Datasets />} />
        <Route path="buy-orders" element={<BuyOrders />} />
        <Route path="buy-orders/:id" element={<OrderDetails />} />
        <Route path="create/buy-orders" element={<CreateBuyOrder />} />
      </Routes>
    </BrowserRouter>
  )
}
