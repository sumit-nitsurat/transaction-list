import "@testing-library/jest-dom"

import React from "react"
import { render } from "@testing-library/react"
import AccountList from "./index"
import { Store } from "../store"
import { useAccountsList } from "../hooks/useAccountsList"

jest.mock("../hooks/useAccountsList")

const fakeResponse = [
  {
    id: 1,
    account_name: "Savings Account",
    account_type: "savings",
    balance: 32334.32,
    currency: "SGD",
    account_number: "342423455344",
    is_active: true,
  },
  {
    id: 2,
    account_name: "Bonus Savings Account",
    account_type: "savings",
    balance: -5.11,
    currency: "AUD",
    account_number: "156478245",
    is_active: true,
  },
]

test("render account list", () => {
  useAccountsList.mockReturnValue({ accounts: fakeResponse })
  const { container } = render(
    <Store.Provider value={{ state: {}, dispatch: jest.fn() }}>
      <AccountList />
    </Store.Provider>
  )
  expect(useAccountsList).toHaveBeenCalled()
  expect(container).toHaveTextContent("Account 1")
  expect(container).toHaveTextContent("Account 2")
})
