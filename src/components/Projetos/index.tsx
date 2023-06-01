import { Paragrafo } from '../Paragrafo'
import { Titulo } from '../Tittle'
import { Card, LinkButon } from './styles'

export const Projeto = () => {
  return (
    <Card>
      <Titulo>Proejto lsita de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
      <LinkButon>Visualizar</LinkButon>
    </Card>
  )
}
