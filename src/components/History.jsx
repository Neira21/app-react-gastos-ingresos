import './History.css'

import { useGlobalState } from '../context/GlobalContext'
import { AiFillCloseCircle } from 'react-icons/ai';



const History = () => {  
  const data = useGlobalState()

  return (
    <div className="HistoryContainer">
      
      <div className="HistoryTitle">
        Historial de Operaciones
      </div>
      <div className="HistoryOperationsContainer">
       {data.transactions.map((transaction)=> (
          <div className="HistoryOperation" key={transaction.id}>
            <div className="HistoryOperationConcept">
              {transaction.description}
            </div>
            <div className="HistoryOperationAmount">
              ${transaction.amount}
              <button className='button-eliminar' onClick={() => data.deletedTransaction(transaction.id)}>
                <AiFillCloseCircle color='red'/>
              </button>
            </div>
          </div>
       ))}
      </div>
    </div>
  )
}

export default History