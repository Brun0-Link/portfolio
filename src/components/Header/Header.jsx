import './style.css'
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="">
      <div className="logo">BrunoTrajano</div>
      <nav>
        <menu className="menu">
          <li>
            <a href="/portfolio">Home</a>
          </li>

          <li>
            <a href="/portfolio/sobre-mim">Sobre mim</a>
          </li>

          <li>
            <a href="/portfolio/projetos">Projetos</a>
          </li>

          <li>
            <a href="/portfolio/contatos">Contato</a>
          </li>
        </menu>
      </nav>

      <div id="toggle" onClick={toggleTheme}>
        <i className="indicator"></i>
      </div>
    </header >
  )
}
