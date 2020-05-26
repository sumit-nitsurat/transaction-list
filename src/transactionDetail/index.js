import React, { useContext, useEffect, useState } from "react"
import { Store } from "../store"
import PropTypes from "prop-types"

const TransactionDetail = ({ match }) => {
    const [transaction, setTransaction] = useState(null)
    const { state } = useContext(Store)

    useEffect(() => {
        if (
            state.transactions &&
            state.transactions.length > 0 &&
            match.params.transactionId
        ) {
            const txn = state.transactions.find(
                (txn) => txn.id == match.params.transactionId
            )
            setTransaction(txn)
        }
    }, [state.transactions, match.params.transactionId])

    return (
        <div className="container mt-5">
            {transaction && (
                <div className="card">
                    <div className="card-header">Detail Transaction {transaction.id}</div>
                    <div className="card-body">
                        <div>
                            Amount: {transaction.amount}
                        </div>
                        <div>
                            Description: {transaction.description}
                        </div>
                    </div>
                    <div className="card-footer">{transaction.transaction_date}</div>
                </div>
            )}
        </div>
    )
}

export default TransactionDetail

TransactionDetail.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            transactionId: PropTypes.string.isRequired,
        }),
    }),
}
