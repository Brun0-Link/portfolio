import '../ContactsSection/ContactsSection.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ContactsSection() {
  return (
    <section className="contatos" id="contato">
      <h2 className="section__title">Contatos</h2>
      <ul className="social-container">
        <li className="social">
          <a href="https://www.linkedin.com/in/bruno-trajano/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>

        <li className="social">
          <a href="https://github.com/Brun0-Link" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </li>

        <li className="social">
          <a href="https://wa.me/5598970886368" target="_blank">
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>

        <li className="social">
          <a href="mailto:brunoalvestrajano250@gmail.com" target="_blank">
            <i className="fa fa-envelope"></i>
          </a>
        </li>

        <li className="social">
          <a href="https://www.instagram.com/link.brun0" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </section>
  )
}
