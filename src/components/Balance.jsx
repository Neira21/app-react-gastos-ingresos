import './Balance.css'
import { useGlobalState } from '../context/GlobalContext'

const Balance = () => {

  const data = useGlobalState()

  const amounts = data.transactions.map(transaction => transaction.amount)
  
  const income = amounts
                .filter(item => item > 0)
                .reduce((acc, item) => (acc += item), 0 )

  const expense = amounts
                .filter(item => item < 0)
                .reduce((acc, item) => (acc += item), 0 )

  return (
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
  )
}

export default Balance