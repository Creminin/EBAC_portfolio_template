import { P } from './styled'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

export const Paragrafo = ({
  children,
  tipo = 'principal',
  fontSize
}: Props) => (
  <P tipo={tipo} fontSize={fontSize}>
    {children}
  </P>
)
