import './App.css'
import ExpenseTracker from './components/ExpenseTracker'
import History from './components/History'

function App() {
  
  return (
    <div>
      <h1>Control de Ingresos y Gastos</h1>
      <ExpenseTracker />
      <History />
    </div>
  )
}

export default App
