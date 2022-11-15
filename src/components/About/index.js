import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover')
  })

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', '', 'J', 'o', 'u', 'r', 'n', 'e', 'y']}
              idx={15}
            />
          </h1>
          <p>
            I'm a recent graduate from Purdue University with a degree in
            Economics. Now you may wonder what an Economics major might be doing
            making a website. Let me tell you. During my senior year I became
            passionate about blockchain, and that passion led me down this path
            of coding. A couple of my friends and I, set up an incubator type of
            arrangement in our apartment (like in the show silicon valley)
          </p>
          <p align="LEFT">
            From there I delved deeper into what it means to be a software
            engineer, and started to make my own projects. Everything I learned,
            I did on my own until I fortunately landed an internship at a
            blockchain startup called MetaLend. It was here my skills went to a
            whole new level. I learned what it means to be a full stack
            engineer.
          </p>
          <p>
            I hope to combine my coding skills with my finance knowledge one
            day. As for now my goal is to continue to develop and start full
            time work. I may not have gone down the normal path, but it has
            allowed me to gain another perspective from an ever growing
            technological world from both an finance/economics standpoint and as
            a self taught coder.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
