import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import HTML from '../../assets/images/logo1.png'
import CSS from '../../assets/images/logo2.png'
import JS from '../../assets/images/logo3.png'
import React from '../../assets/images/react.png'
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3,
  faJs,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

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
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <FontAwesomeIcon icon={faPython} className="iconsize" />
              </div>
              <div className="flip-card-back">
                <p>Python Proficiency:</p>
                <div className="circlerating">
                  {' '}
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="white" />
                  <FontAwesomeIcon icon={faCircle} color="white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <FontAwesomeIcon icon={faHtml5} className="iconsize" />
              </div>
              <div className="flip-card-back">
                <p>HTML Proficiency:</p>
                <div className="circlerating">
                  {' '}
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <FontAwesomeIcon icon={faCss3} className="iconsize" />
              </div>
              <div className="flip-card-back">
                <p>CSS Proficiency:</p>
                <div className="circlerating">
                  {' '}
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <FontAwesomeIcon icon={faJs} className="iconsize" />
              </div>
              <div className="flip-card-back">
                <p>Javascript Proficiency:</p>
                <div className="circlerating">
                  {' '}
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <FontAwesomeIcon icon={faReact} className="iconsize" />
              </div>
              <div className="flip-card-back">
                <p>React Proficiency:</p>
                <div className="circlerating">
                  {' '}
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <FontAwesomeIcon icon={faNodeJs} className="iconsize" />
              </div>
              <div className="flip-card-back">
                <p>NodeJs Proficiency:</p>
                <div className="circlerating">
                  {' '}
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="#ffd700" />
                  <FontAwesomeIcon icon={faCircle} color="white" />
                  <FontAwesomeIcon icon={faCircle} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
