import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import AccountList from "./accountList"
import TransactionList from "./transactionList"
import TransactionDetail from "./transactionDetail"
export const Routes = () => (
  <Router>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Switch>
        <Route exact path="/" component={AccountList} />
        <Route exact path="/:accountNumber" component={TransactionList} />
        <Route path="/:accountNumber/:transactionId" component={TransactionDetail} />
      </Switch>
    {/* </Suspense> */}
  </Router>
)
