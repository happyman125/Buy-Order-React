export type DatasetType = {
  id: number
  name: string
  label: string
  description: string
  thumbnailUrl: string
  costPerRecord: number
}

export type CountryType = {
  countryCode: string
  name: string
  storedData: { datasetId: number; recordCount: number }[]
}

export type OrderType = {
  id: string
  name: string
  createdAt: string
  datasetIds: number[]
  countries: string[]
  budget: number
}