import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from "../../assets/close.svg";

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionProps) {
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

        <input placeholder="Category" />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
