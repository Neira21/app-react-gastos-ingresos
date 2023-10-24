import './App.css'
import History from './components/History'

import { GlobalProvider } from './context/GlobalContext'
import TransactionForm from './components/transactions/TransactionForm'
import BalanceChart from './components/BalanceChart'

function App() {
  
  return (
    <GlobalProvider>
      <h1>Control de Ingresos y Gastos</h1>
      <div className='transactions'>
        <TransactionForm />
        <History />
      </div>
      <div className='chart'>
        <BalanceChart />
      </div>
      
    </GlobalProvider>
  )
}

export default App
