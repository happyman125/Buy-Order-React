import Axios from 'axios'
import { CountryType, DatasetType, OrderType } from '../types'

const axios = Axios.create({
  baseURL: 'https://63745b4a48dfab73a4de2b14.mockapi.io/maritime',
})

export async function getDatasets(): Promise<DatasetType[]> {
  const response = await axios.get<DatasetType[]>(`/datasets`)
  if (response.status !== 200) throw response
  return response.data
}

export async function getCountries(): Promise<CountryType[]> {
  const response = await axios.get<CountryType[]>(`/countries`)
  if (response.status !== 200) throw response
  return response.data
}

export async function getBuyOrders(): Promise<OrderType[]> {
  const response = await axios.get<OrderType[]>(`/buy-orders`)
  if (response.status !== 200) throw response
  return response.data
}

export async function getBuyOrder(id: string): Promise<OrderType> {
  const response = await axios.get<OrderType>(`/buy-orders/${id}`)
  if (response.status !== 200) throw response
  return response.data
}

export async function updateBuyOrder({
  id,
  body,
}: {
  id: string
  body: Partial<OrderType>
}): Promise<Partial<OrderType>> {
  const response = await axios.put(`/buy-orders/${id}`, body)
  if (response.status !== 200) throw response
  return response.data
}

export async function createBuyOrder(body: Partial<OrderType>): Promise<Partial<OrderType>> {
  const response = await axios.post(`/buy-orders`, body)
  if (response.status !== 201) throw response
  return response.data
}

export async function deleteBuyOrder(id: string): Promise<OrderType> {
  const response = await axios.delete(`/buy-orders/${id}`)
  if (response.status !== 200) throw response
  return response.data
}
