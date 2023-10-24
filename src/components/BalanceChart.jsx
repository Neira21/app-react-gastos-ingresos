import { VictoryLabel, VictoryPie, VictoryLegend } from 'victory'
import { useGlobalState } from '../context/GlobalContext'

const BalanceChart = () => {

  const {transactions} = useGlobalState()

  const expense = transactions
                  .filter(transaction => transaction.amount < 0)
                  .reduce((acc, transaction) => acc + transaction.amount, 0)*-1

  const income = transactions
                  .filter(transaction => transaction.amount > 0)
                  .reduce((acc, transaction) => acc + transaction.amount, 0)

  console.log(expense, income)

  return (
    <>
      <div>BalanceChart</div>
      <VictoryPie
        colorScale={["cyan", "orange"]}
        data={[
          {x: "Income" , y: income},
          {x: "Expense" , y: expense}
        ]}
        animate={{
          duration: 200,
        }}
        labels={({datum}) => `${datum.x}: ${datum.y}`}
        
        labelComponent={<VictoryLabel angle={0}  style={{fill:'black'}} />}
      />
      <VictoryLegend x={100} y={50}
        title="Balance Ingresos y Gastos"
        centerTitle
        orientation="horizontal"
        gutter={20}
        style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
        data={[
          { name: "Expense", symbol: { fill: "orange"} },
          { name: "Income", symbol: { fill: "cyan" } },
        ]}
      />
    </>
  )
}

export default BalanceChart