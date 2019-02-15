import { useEffect } from 'react'

export default function useAsyncEffect(f, o) {
  useEffect(() => {
    f()
  }, o)
}
