import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "@/context/ThemeContext"

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="w-full h-56 p-8 flex justify-between items-center">
      <div id="logo" className="text-[--primary-color] text-5xl font-bold before:content-['<'] before:text-5xl before:text-[--icon-color] before:font-bold after:content-['/>'] after:text-5xl after:text-[--icon-color] after:font-bold">BrunoTrajano</div>
      <nav>
        <menu className="flex justify-between gap-16 text-4xl text-[--primary-color]">
          <li>
            <Link to="/" className="hover:text-[--icon-color]">Home</Link>
          </li>

          <li>
            <Link to="/sobre-mim" className="hover:text-[--icon-color]">Home</Link>
          </li>

          <li>
            <Link to="/projetos" className="hover:text-[--icon-color]">Home</Link>
          </li>

          <li>
            <Link to="/contatos" className="hover:text-[--icon-color]">Home</Link>
          </li>
        </menu>
      </nav>

      <div id="toggle" className='relative w-32 h-16 rounded-full bg-[--default-white] cursor-pointer' onClick={toggleTheme}>
        <i id='indicator' className="absolute top-0 left-0 w-16 h-16 bg-indicatorBg rounded-full scale-90 transition-left duration-500 shadow-indicatorShadow"></i>
      </div>
    </header >
  )
}
