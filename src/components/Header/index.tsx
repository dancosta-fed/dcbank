import logoImg from '../../assets/profiles.svg'
import { Container, Content, ProfileImg } from './styles'


export function Header() {
  return(
    <>
      <Container>
        <Content>
          <button type="button">
            New Transaction
          </button>
          <ProfileImg>
            <img src={logoImg} alt="dcbank" />
          </ProfileImg>
        </Content>
      </Container>
    </>
  )
}