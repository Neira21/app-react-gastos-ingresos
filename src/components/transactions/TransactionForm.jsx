import { useEffect, useState } from 'react'
import './TransactionForm.css'
import { useGlobalState } from '../../context/GlobalContext'

const TransactionForm = () => {
  
  const data = useGlobalState()
  
  const [description, setDescription] =  useState('')
  const [amount, setAmount] =  useState(0)
  
  const [income, setIncome] =  useState(0)
  const [expense, setExpense] =  useState(0)

  const handleSubmit = (e) => {
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

  const calculateIncome = () => {
    let incomeTotal = 0
    data.transactions.forEach(transaction => {
      if(transaction.amount > 0) {
        incomeTotal += transaction.amount
      }
    })
    setIncome(incomeTotal)
  }

  const calculateExpense = () => {
    let expense = 0
    data.transactions.forEach(transaction => {
      if(transaction.amount < 0) {
        expense += transaction.amount
      }
    })
    setExpense(expense)
  }

  useEffect(()=>{
    calculateIncome()
    calculateExpense()  
  },[amount])


  return (
    <div className="ExpenseTrakerContainer">
      <div className="ExpenseTitle">
        Expense Tracker
      </div>
      <div className="ExpenseBody">
        <div className='ExpenseRow'>
          <span>Income</span>
          <span>{income}</span>
        </div>
        <div className='ExpenseRow'>
          <span>Expense</span> 
          <span>{expense}</span>
        </div>
        <div className='ExpenseRow'>
          <span>Your Balance</span>
          <span>{income + expense}</span>
        </div>
      </div>
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