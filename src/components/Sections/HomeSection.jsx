import Foto from '@/assets/images/minha-foto.jpg'
export function HomeSection() {
  return (
    <section id="home" className='flex items-center justify-center gap-12 w-full h-[75%] bg-center bg-480 bg-no-repeat pt-0 bg-homeBg'>
      <aside>
        <img src={Foto} alt="Minha foto" className='w-96 h-96 rounded-full' />
      </aside>
      <div id="profile" className='text-7xl leading-snug text-[--default-white]'>
        <span className="animate-has-shown">Olá, meu nome é</span>
        <h1 className="animate-has-shown text-[--primary-color]">Bruno Trajano</h1>
        <span className="animate-has-shown">sou Desenvolvedor Frontend</span>
      </div>
    </section>
  )
}
