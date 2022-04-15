import Modal from "react-modal";
import { useState } from "react";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
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
  const [type, setType] = useState("deposit");

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
      <Container>
        <h2>Register New Transaction</h2>

        <input placeholder="Title" />

        <input type="number" placeholder="Amount" />

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

        <input placeholder="Category" />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
