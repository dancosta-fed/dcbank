import { useState, FormEvent } from "react";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionProps) {

  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState("deposit")

  async function createNewTransactionHandler(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })
    
    setTitle('') 
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="close button" />
      </button>
      <Container onSubmit={createNewTransactionHandler}>
        <h2>Register New Transaction</h2>

        <input 
          placeholder="Title" 
          value={title}
          onChange={event => setTitle(event.target.value)}
          required
        />

        <input 
          type="number" 
          placeholder="Amount" 
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}  
          required        
        />

        <TransactionTypeContainer>

          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit")
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="income icon" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw")
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="outcome icon" />
            <span>Outcome</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input 
          placeholder="Category" 
          value={category}
          onChange={event => setCategory(event.target.value)} 
          required       
        />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
