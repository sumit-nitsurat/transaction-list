import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { useAccountsList } from "../hooks/useAccountsList"
import { Store } from "../store"

const Login = () => {
  const { accounts, isLoading, error } = useAccountsList()
  const { dispatch } = useContext(Store)
  let history = useHistory()

  const getAccountTransactions = (id) => {
    history.push(`/${id}`)
  }

  return (
    <div className="container">
      <ul className="list-group">
        {accounts.map((account) => (
          <li
            key={account.id}
            className="list-group-item"
            onClick={() => getAccountTransactions(account.id)}
          >
            Account {account.id}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Login
