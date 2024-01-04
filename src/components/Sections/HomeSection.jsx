export function HomeSection() {
  return (
    <section id="home" className='flex items-center justify-center w-full h-[75%] bg-auto bg-center bg-no-repeat pt-0 bg-homeBg'>
      <div id="profile" className='text-7xl leading-snug text-[--default-white]'>
        <span className="animate-has-shown">Olá, meu nome é</span>
        <h1 className="animate-has-shown text-[--primary-color]">Bruno Trajano</h1>
        <span className="animate-has-shown">sou Desenvolvedor Frontend</span>
      </div>
    </section>
  )
}
