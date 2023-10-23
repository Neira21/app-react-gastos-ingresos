import './App.css'
import History from './components/History'

import { GlobalProvider } from './context/GlobalContext'
import TransactionForm from './components/transactions/TransactionForm'

function App() {
  
  return (
    <GlobalProvider>
      <h1>Control de Ingresos y Gastos</h1>
      <TransactionForm />
      <History />
    </GlobalProvider>
  )
}

export default App
