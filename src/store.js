import React, { useReducer } from "react"
import PropTypes from "prop-types"

export const Store = React.createContext(); //eslint-disable-line
const initialState = {
  transactions: []
}

const stateReducer = (state, action) => {
  switch (action.type) {
    case "SET_TRANSACTIONS":
      return { ...state, transactions: action.transactions }
    default:
      return state
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(stateReducer, initialState)
  const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}

StoreProvider.propTypes = {
  children: PropTypes.element,
}
