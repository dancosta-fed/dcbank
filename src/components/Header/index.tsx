import logoImg from "../../assets/profiles.svg"
import { Container, Content, ProfileImg } from "./styles"

interface HeaderProps {
  // below it means it's taking a function which won't return anything
  onOpenNewTransactionModal: () => void 
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {


  return (
    <>
      <Container>
        <Content>
          <button type="button" onClick={onOpenNewTransactionModal}>
            New Transaction
          </button>

          <ProfileImg>
            <img src={logoImg} alt="dcbank" />
          </ProfileImg>
        </Content>
      </Container>
    </>
  );
}
