import { useContext } from 'react'
import { Container } from "./styles"
import { TransactionsContext } from '../../TransactionsContext'
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)
  return(
    <Container>
      {/* Income */}
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income img" />
        </header>
        <strong>$1000</strong>
      </div>

      {/* Outcome */}
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="outcome img" />
        </header>
        <strong>- $350</strong>
      </div>

      {/* Total */}
      <div className="highlight-bg">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>$650</strong>
      </div>


    </Container>
  )
}