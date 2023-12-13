import "./Style.css"

export function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="profile">
        <span className="profile__text">Olá, meu nome é</span>
        <h1 className="profile__name">Bruno Trajano</h1>
        <span className="profile__text">sou Desenvolvedor Frontend</span>
      </div>
    </section>
  )
}
