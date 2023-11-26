import '../SkillsCard/SkillsCard.css'

export function SkillsCard({ name, iconName, description }) {
  return (
    <li className="skills__card">
      <div className="tec_name">{name}</div>
      <div className="tec_picture">
        <i className={iconName}></i>
      </div>
      <div className="tec_description">
        {description}
      </div>
    </li>
  )
}