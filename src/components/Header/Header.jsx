import './Header.css'
import { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [sticky, setSticky] = useState(false)

  const handleScroll = () => {
    setSticky(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <header className={`${sticky ? 'sticky' : ''}`}>
      <div className="logo">BrunoTrajano</div>
      <nav>
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#sobre-mim">Sobre mim</a>
          </li>

          <li>
            <a href="#projetos">Projetos</a>
          </li>

          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>

      <div id="toggle" onClick={toggleTheme}>
        <i className="indicator"></i>
      </div>
    </header >
  )
}
