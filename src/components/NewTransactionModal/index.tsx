import Modal from "react-modal"

interface NewTransactionProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionProps ){
  return(
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  >
    <h2>Register New Transaction</h2>
  </Modal>
  )
}