import { useEffect, useState, useContext } from "react"
import { Store } from "../store"

export const useGetTransactions = ({ accountId }) => {
  const { dispatch } = useContext(Store)
  const [transactions, setTransactions] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchTransactions = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/db/transactions-${accountId}.json`)
      const transactions = await response.json()
      setTransactions(transactions)
      dispatch({ type: "SET_TRANSACTIONS", transactions: transactions })
      setLoading(false)
    } catch (e) {
      setLoading(false)
      setError(e.message)
    }
  }
  useEffect(() => {
    fetchTransactions()
  }, [accountId])

  return { transactions, isLoading, error }
}
