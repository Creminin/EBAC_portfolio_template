import { Projeto } from '../../components/Projetos'
import { Titulo } from '../../components/Tittle'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo font_size={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
    </Lista>
  </section>
)

export default Projetos
