/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useReducer, createContext, useContext } from "react";
import AppReducer from "./AppReducer";


const initialState = {
  transactions: [],
}

export const Context = createContext();

//Es lo que cada componente va a importar para poder usar el context

export const useGlobalState = () => {
  const context = useContext(Context)
  return context
}

export const GlobalProvider = ({children}) => {
  //Se puede pasar el state y el setState al context para que se pueda usar en cualquier component
  //Pero se puede hacer de otra manera usando useReducer
  //Con useReducer nos permite poder actualizar el state de una manera mas facil y nos da un mejor control
  //Mediiante el uso de nombres podemos saber que operaciones queremos realizar
  const [state, dispatch] = useReducer( AppReducer, initialState)

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  const deletedTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  return(
    <Context.Provider 
      value={{
        transactions: state.transactions,
        addTransaction,
        deletedTransaction
      }}>
      {children}
    </Context.Provider>
  )
}


