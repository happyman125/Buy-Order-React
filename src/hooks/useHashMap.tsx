import { useMemo } from 'react'

export default function useHashMap<T extends Record<string, any> = any>(
  data: T[] = [],
  key: keyof T
) {
  return useMemo(() => {
    const map = new Map<any, T>()
    if (!data?.length) return map
    for (const item of data) {
      map.set(item[key], item)
    }
    return map
  }, [data])
}
