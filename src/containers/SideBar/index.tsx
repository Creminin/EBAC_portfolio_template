import Avatar from '../../components/Avatar'
import { Paragrafo } from '../../components/Paragrafo'
import { Titulo } from '../../components/Tittle'

import { Descrição, BotaoTema, SideBarContainer } from './styles'

type Props = {
  SwitchTheme: () => void
}

const SideBar = ({ SwitchTheme }: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />

      <Titulo font_size={20}>Nathan</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Creminin
      </Paragrafo>

      <Descrição fontSize={12} tipo="principal">
        Engenheiro front-end
      </Descrição>
      <BotaoTema onClick={SwitchTheme}>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default SideBar
