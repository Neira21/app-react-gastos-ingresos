import { useState } from 'react'
import './TransactionForm.css'
import { useGlobalState } from '../../context/GlobalContext'
import Balance from '../Balance'

const TransactionForm = () => {
  
  const data = useGlobalState()
  
  const [description, setDescription] =  useState('')
  const [amount, setAmount] =  useState(0)

  const handleSubmit = (e) => {
    //En amount se coloca un signo + para que se convierta en un numero
    e.preventDefault()
    setAmount(0)
    setDescription('')
    data.addTransaction(
      {
        id: crypto.randomUUID(),
        description,
        amount: +amount
      }
    )
  }

  return (
    <div className="ExpenseTrakerContainer">
      <div className="ExpenseTitle">
        Expense Tracker
      </div>
      <Balance />
      <form className="ExpenseTrakerForm" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Enter a description' 
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          />
        <input 
          type="number" 
          placeholder='00.00' 
          step={0.01}
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          />
        <button className='button' type="submit">Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm