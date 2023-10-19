import './History.css'

const OperacionExample = [
  {
    id: 1,
    concepto: 'Compra de comida',
    monto: 500
  },
  {
    id: 2,
    concepto: 'Paga de curso',
    monto: -300
  },
  {
    id: 3,
    concepto: 'Paga de curso completo',
    monto: -700
  },
  {
    id: 4,
    concepto: 'Prestamo de dinero',
    monto: 4000
  },
  {
    id: 5,
    concepto: 'Paga de comida',
    monto: -100
  }
]

const History = () => {
  return (
    <div className="HistoryContainer">
      <div className="HistoryTitle">
        Historial de Operaciones
      </div>
      <div className="HistoryOperationsContainer">
       {OperacionExample.map((operation)=> (
          <div className="HistoryOperation" key={operation.id}>
            <div className="HistoryOperationConcept">
              {operation.concepto}
            </div>
            <div className="HistoryOperationAmount">
              ${operation.monto}
            </div>
          </div>
       ))}
      </div>
    </div>
  )
}

export default History