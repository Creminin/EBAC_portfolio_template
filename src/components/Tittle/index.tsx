import { Titulo as StyledTitulo } from './styled'

export type Props = {
  children: string
  font_size?: number
}

export const Titulo = (props: Props) => (
  <StyledTitulo font_size={props.font_size}>{props.children}</StyledTitulo>
)
