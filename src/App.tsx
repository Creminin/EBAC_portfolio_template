import Projetos from './containers/Projetos'
import SideBar from './containers/SideBar'
import Sobre from './containers/Sobre'
import { Container, EstiloGlobal } from './styles'

import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [darkThmeIsTrue, setDarkThmeIsTrue] = useState(false)

  function SwitchTheme() {
    setDarkThmeIsTrue(!darkThmeIsTrue)
  }

  return (
    <ThemeProvider theme={darkThmeIsTrue ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <SideBar SwitchTheme={SwitchTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
