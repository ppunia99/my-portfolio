import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import lakersLogo from './../../assets/images/lakersLogo.jpeg'
import { Neon } from '../animations/neon'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [questionLetterClass, setQuestionLetterClass] = useState(
    'question-animate',
  )
  const [sorryLetterClass, setSorryLetterClass] = useState('sorry-none')
  const [awkwardLetterClass, setAwkwardLetterClass] = useState('sorry-none')
  const [nameToggle, setNameToggle] = useState(false)

  const questionMarkArray = ['?', '?', '?']
  const sorryArray = ['U', 'm', 'm', '.', '.', '.']
  const awkwardArray = ['O', 'h', '', 'G', 'o', 't', '', 'i', 't', '!']
  const nameArray = ['P', 'r', 'i', 't', 'h']
  const jobArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    setTimeout(() => {
      setQuestionLetterClass('question-animate-none')
    }, 4000)
    setTimeout(() => {
      setSorryLetterClass('sorry-animate')
    }, 5000)
    setTimeout(() => {
      setSorryLetterClass('sorry-animate-none')
    }, 10000)
    setTimeout(() => {
      setAwkwardLetterClass('awkward-animate')
    }, 13000)
    setTimeout(() => {
      setAwkwardLetterClass('awkward-animate-none')
    }, 16000)
    setTimeout(() => {
      setNameToggle(true)
    }, 17000)
  }, [])

  const skipAnimation = () => {
    setNameToggle(true)
  }
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br />
            <br />

            {nameToggle === true && (
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
            )}
            {nameToggle === false && (
              <>
                <AnimatedLetters
                  letterClass={questionLetterClass}
                  strArray={questionMarkArray}
                  idx={15}
                />
                <AnimatedLetters
                  letterClass={sorryLetterClass}
                  strArray={sorryArray}
                  idx={15}
                />

                <AnimatedLetters
                  letterClass={awkwardLetterClass}
                  strArray={awkwardArray}
                  idx={15}
                />
              </>
            )}

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Recent Graduate / Frontend & Backend Development / Lakers Fan</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <br />
          <br />
          {nameToggle === false && (
            <button className="flat-button2" onClick={skipAnimation}>
              Skip Animation
            </button>
          )}
        </div>
        <div className="home-animation-container">
          <Neon />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
