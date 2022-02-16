import { VscGithub } from 'react-icons/vsc'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import s from './TeamModal.module.scss'

function TeamContent({ member }) {
  const { img, name, role, mail, linkedin, github } = member
  return (
    <li className={s.card}>
      <div className={s.content}>
        <div className={s.image_container}>
          <img className={s.photo} src={img} alt={name} />
          <ul className={s.links}>
            <li className={s.item}>
              <a className={s.link} href={`mailto:${mail}`}>
                <FiMail className={s.icon} size="44px" />
              </a>
            </li>
            <li className={s.item}>
              <a
                className={s.link}
                href={linkedin}
                target="_blank"
                rel="noopener"
              >
                <FaLinkedin size="44px" />
              </a>
            </li>
            <li className={s.item}>
              <a
                className={s.link}
                href={github}
                target="_blank"
                rel="noopener"
              >
                <VscGithub size="44px" />
              </a>
            </li>
          </ul>
        </div>
        <p className={s.name}>{name}</p>
        <p className={s.description}>{role}</p>
      </div>
    </li>
  )
}

export default TeamContent
