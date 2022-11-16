import './index.scss'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faHome,
  faEnvelope,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const p = 'P'
  const r = 'r'
  const i = 'i'
  const t = 't'
  const h = 'h'
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          {p}
        </Link>
        <Link className="logo" to="/">
          {r}
        </Link>
        <Link className="logo" to="/">
          {i}
        </Link>
        <Link className="logo" to="/">
          {t}
        </Link>
        <Link className="logo" to="/">
          {h}
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="project-link"
            to="/project"
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/prithrajpunia/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="$4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ppunia99"
            >
              <FontAwesomeIcon icon={faGithub} color="$4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
