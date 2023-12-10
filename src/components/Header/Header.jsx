import './Header.css'
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { Link } from 'react-router-dom'


export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="">
      <div className="logo">BrunoTrajano</div>
      <nav>
        <menu className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/sobre-mim">Sobre mim</Link>
          </li>

          <li>
            <Link to="/projetos">Projetos</Link>
          </li>

          <li>
            <Link to="/contatos">Contato</Link>
          </li>
        </menu>
      </nav>

      <div id="toggle" onClick={toggleTheme}>
        <i className="indicator"></i>
      </div>
    </header >
  )
}
