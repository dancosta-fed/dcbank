import { useTransactions } from '../../hooks/useTransactions'
import { Container } from "./styles"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

export function Summary() {
  const { transactions } = useTransactions()

 const summary = transactions.reduce((acc, transaction) => {
  if(transaction.type === 'deposit'){
    acc.deposits += transaction.amount
    acc.total += transaction.amount
  } else {
    acc.withdraws += transaction.amount
    acc.total -= transaction.amount
  }

  return acc

  // *acc == accumulator
 }, { 
   deposits: 0,
   withdraws: 0,
   total: 0,
 })

  console.log(transactions)
  return(
    <Container>
      {/* Income */}
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income img" />
        </header>
        <strong>
        {new Intl.NumberFormat('en-UK', {
          style: 'currency',
          currency: 'BRL',
         }).format(summary.deposits)}          
        </strong>
      </div>

      {/* Outcome */}
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="outcome img" />
        </header>
        <strong>
          -
        {new Intl.NumberFormat('en-UK', {
          style: 'currency',
          currency: 'BRL',
         }).format(summary.withdraws)}         
        </strong>
      </div>

      {/* Total */}
      <div className="highlight-bg">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>
        {new Intl.NumberFormat('en-UK', {
          style: 'currency',
          currency: 'BRL',
         }).format(summary.total)}         
        </strong>
      </div>


    </Container>
  )
}