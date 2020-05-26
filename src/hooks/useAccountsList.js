import { useEffect, useState } from "react"

export const useAccountsList = () => {
  const [accounts, setAccounts] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchGames = async () => {
    try {
      setLoading(true)
      const response = await fetch("/db/accounts.json")
      const accounts = await response.json()
      setAccounts(accounts)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      setError(e.message)
    }
  }
  useEffect(() => {
    fetchGames()
  }, [])

  return { accounts, isLoading, error }
}
