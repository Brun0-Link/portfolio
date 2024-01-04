import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="pt-8 pb-8 pr-20 pl-20 w-full flex justify-center items-center gap-36 fixed bottom-0 bg-[--default-white] text-zinc-800">
      <p className='font-medium text-3xl'>Meus links</p>
      <div id='contacts' className="flex gap-12">
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