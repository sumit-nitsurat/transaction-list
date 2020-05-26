import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const AccountList =  lazy(() => import("./accountList"))
const TransactionList =  lazy(() => import("./transactionList"))
const TransactionDetail =  lazy(() => import("./transactionDetail"))
export const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={AccountList} />
        <Route exact path="/:accountNumber" component={TransactionList} />
        <Route path="/:accountNumber/:transactionId" component={TransactionDetail} />
      </Switch>
    </Suspense>
  </Router>
)
