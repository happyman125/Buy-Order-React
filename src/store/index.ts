import create from 'zustand'
import { CountryType } from '../types'

type Store = {
  selectedCountries: CountryType[]
  isCountrySelected: (country: CountryType) => boolean
  setSelectedCountries: (countries: CountryType[]) => void
  toggleCountry: (country: CountryType) => void
}

export const useStore = create<Store>((set, get) => ({
  selectedCountries: [],
  isCountrySelected: (country) =>
    !!get().selectedCountries.find(
      (item) => item.countryCode === country.countryCode
    ),
  setSelectedCountries: (countries) => set({ selectedCountries: countries }),
  toggleCountry: (country) => {
    return set((state) => ({
      selectedCountries: state.selectedCountries.find(
        (c) => c.countryCode === country.countryCode
      )
        ? state.selectedCountries.filter(
            (c) => c.countryCode !== country.countryCode
          )
        : [...state.selectedCountries, country],
    }))
  },
}))
