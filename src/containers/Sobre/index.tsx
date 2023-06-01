import { Titulo } from '../../components/Tittle'
import { Paragrafo } from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo font_size={16}>Sobre mim</Titulo>

    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda amet
      deleniti, commodi harum accusamus quam quaerat nulla ratione inventore
      dolorum at eligendi illum unde, odit nostrum rerum soluta sit sapiente?
    </Paragrafo>

    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=creminin&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=creminin&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
