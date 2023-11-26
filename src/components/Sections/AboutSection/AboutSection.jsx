import '../AboutSection/AboutSection.css'
import { SkillsCard } from "../../SkillsCard/SkillsCard";

const listSkillCards = [
  {
    name: "HTML",
    iconName: "fab fa-html5",
    description: "None description"
  },
  {
    name: "CSS",
    iconName: "fab fa-css3-alt",
    description: "None description"
  },
  {
    name: "JAVASCRIPT",
    iconName: "fab fa-js",
    description: "None description"
  },
  {
    name: "GITHUB",
    iconName: "fab fa-github",
    description: "None description"
  },
  {
    name: "REACT.JS",
    iconName: "fab fa-react",
    description: "None description"
  },
  {
    name: "NODE.JS",
    iconName: "fab fa-node-js",
    description: "None description"
  },
  {
    name: "MONGODB",
    iconName: "fa-brands fa-envira",
    description: "None description"
  },
]

export function AboutSection() {
  return (
    <section className="sobre-mim" id="sobre-mim">
      <h2 className="section__title">Sobre Mim</h2>
      <div className="description">
        <p className="description__text">
          Tecnólogo em Análise e
          Desenvolvimento de Sistemas pela UNIFACIG. Atualmente Desenvolvedor
          Front-End, também aprendendo sobre tecnologias Back-End para
          alcançar Fullstack.
        </p>
      </div>

      <div className="skills">
        <h3 className="skills__title">Skills:</h3>
        <div className="skills__container">
          <ul className="skills__tracker">
            {
              listSkillCards.map(({ name, iconName, description }) => {
                return (
                  <SkillsCard key={name} name={name} iconName={iconName} description={description} />
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}
