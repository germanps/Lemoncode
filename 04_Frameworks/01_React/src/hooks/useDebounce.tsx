import { useEffect, useState } from 'react'

export function useDebounce<T>(search: T, delay: number): T {
    
  const [debounceValue, setDebounceValue] = useState<T>(search)

  useEffect(() => {
    const count = setTimeout(() => setDebounceValue(search), delay)
    return () => {
      clearTimeout(count)
    }
  }, [search, delay])

  return debounceValue
}