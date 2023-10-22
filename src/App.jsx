import './App.css'
import ExpenseTracker from './components/ExpenseTracker'
import History from './components/History'

import { GlobalProvider } from './context/GlobalContext'

function App() {
  
  return (
    <GlobalProvider>
      <h1>Control de Ingresos y Gastos</h1>
      <ExpenseTracker />
      <History />
    </GlobalProvider>
  )
}

export default App
