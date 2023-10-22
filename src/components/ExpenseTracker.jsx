import { useContext } from 'react'
import { Context } from '../context/GlobalContext'

import './ExpenseTracker.css'

const ExpenseTracker = () => {

  const { total } = useContext(Context)

  return (
    <div className="ExpenseTrakerContainer">
      <div className="ExpenseTitle">
        Expense Tracker {total}
      </div>
      <div className="ExpenseBody">
        <div className='ExpenseRow'>
          <span>Span</span>
          <span>1000.00</span>
        </div>
        <div className='ExpenseRow'>
          <span>Expense</span> 
          <span>500.00</span>
        </div>
        <div className='ExpenseRow'>
          <span>Your Balance</span>
          <span>$5000.00</span>
        </div>
      </div>
      <form className="ExpenseTrakerForm">
        <input type="text" />
        <input type="text" />
        <button className='button' type="submit">Add Transaction</button>
      </form>
    </div>
  )
}

export default ExpenseTracker