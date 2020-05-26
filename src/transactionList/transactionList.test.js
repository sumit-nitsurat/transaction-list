import "@testing-library/jest-dom"

import React from "react"
import { render } from "@testing-library/react"
import TransactionList from "./index"
import { Store } from "../store"
import { useGetTransactions } from "../hooks/useGetTransactions"

jest.mock("../hooks/useGetTransactions")

const fakeResponse = [
  {
    id: 1,
    account_id: 1,
    description:
      "Dolore quis ad et mollit nisi excepteur ex anim fugiat quis ipsum exercitation proident cupidatat. Quis anim incididunt excepteur cupidatat aliquip nulla reprehenderit velit. Dolor pariatur velit consectetur dolore aliquip reprehenderit non aliqua consectetur. Sunt aliquip consequat et in eu aute.\r\n",
    from: "Savings Account - 342423455344",
    transaction_date: "2019-06-08T03:37:28 -08:00",
    transaction_processed: true,
    amount: "$1,373.41",
  },
  {
    id: 2,
    account_id: 1,
    description:
      "Nulla fugiat in enim aute ut deserunt aute in consequat pariatur aliquip laboris incididunt. Sunt ullamco labore sunt adipisicing. Aliquip proident elit aute qui sunt anim. Qui adipisicing ex officia aliquip incididunt est duis veniam.\r\n",
    from: "Savings Account - 342423455344",
    transaction_date: "2019-08-08T04:40:51 -08:00",
    transaction_processed: true,
    amount: "$339.36",
  },
]

test("render transaction list", () => {
  useGetTransactions.mockReturnValue({ transactions: fakeResponse })
  const { container } = render(
    <Store.Provider value={{ state: {}, dispatch: jest.fn() }}>
      <TransactionList match={{ params: { accountNumber: 1 } }} />
    </Store.Provider>
  )
  expect(useGetTransactions).toHaveBeenCalled()
  expect(container).toHaveTextContent("Transaction 1")
  expect(container).toHaveTextContent("Transaction 2")
})
