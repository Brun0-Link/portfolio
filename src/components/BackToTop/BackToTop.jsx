import './BackToTop.css'
import { useEffect, useState } from "react"

import { faUpLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function BackToTop() {
  const [scrolled, setScrolled] = useState(false)

  const showButton = () => {
    setScrolled(window.scrollY > 500)
  }

  useEffect(() => {
    window.addEventListener('scroll', showButton)
  })

  return (
    <div className={`to-top ${scrolled ? "appear-on-scroll" : ""}`}>
      <a href="#">
        <FontAwesomeIcon icon={faUpLong} className="icon-to_top" />
      </a>
    </div>
  )
}
