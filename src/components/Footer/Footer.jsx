import './Footer.css'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="footer">
      <p>Meus links</p>
      <div className="contacts">
        <a href="https://github.com/Brun0-Link" target='_blank' title='Meu Github'>
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/bruno-trajano/" target='_blank' title='Meu Linkedin'>
          <Linkedin />
        </a>
        <a href="mailto:brunoalvestrajano250@gmail.com" target='_blank' title='Meu Email'>
          <Mail />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5521970886368" target='_blank' title='Meu Whatsapp'>
          <Phone />
        </a>
      </div>
    </footer>
  )
}