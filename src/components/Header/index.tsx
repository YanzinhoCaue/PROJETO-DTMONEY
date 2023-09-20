import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTranslationModal: ()=> void;
}

export function Header({ onOpenNewTranslationModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={ onOpenNewTranslationModal }>Nova transação</button>
      </Content>
      
    </Container>
  )
}