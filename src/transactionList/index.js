import React from "react"
import PropTypes from "prop-types"
import { NoDataView } from "../common/NoDataView"
import { useHistory } from "react-router-dom"
import { useGetTransactions } from "../hooks/useGetTransactions"

const TransactionList = ({ match }) => {
  let history = useHistory()

  const accountId = match.params.accountNumber
  const { transactions, isLoading, error } = useGetTransactions({ accountId })

  const getTransactiondeatil = (id) => {
    history.push(`/${accountId}/${id}`)
  }

  return (
    <div className="container">
      <NoDataView haveData={transactions.length}>
        <ul className="list-group">
          {transactions.map((txn) => (
            <li
              key={txn.id}
              className="list-group-item"
              onClick={() => getTransactiondeatil(txn.id)}
            >
              Transaction {txn.id}
            </li>
          ))}
        </ul>
      </NoDataView>
    </div>
  )
}

export default TransactionList

TransactionList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      accountNumber: PropTypes.string.isRequired,
    }),
  }),
}
