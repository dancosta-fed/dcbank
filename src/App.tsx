import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import Modal from "react-modal"
import { useState } from "react"
import { NewTransactionModal } from './components/NewTransactionModal'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] =
  useState(false);

  function openNewTransactionModalHandler() {
    SetIsNewTransactionModalOpen(true)
  }

  function closeNewTransactionModalHandler() {
    SetIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={openNewTransactionModalHandler} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeNewTransactionModalHandler}
      />
      <GlobalStyle />
    </>
  );
}
