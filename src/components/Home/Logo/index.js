import { useEffect, useRef } from 'react'
import lakersLogo from '../../../assets/images/lakersLogo.jpeg'
import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={lakersLogo}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
