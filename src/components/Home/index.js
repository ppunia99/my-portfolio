import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
// import { Pt, Space, Create, Group, Form } from 'pts'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['P', 'r', 'i', 't', 'h']
  const jobArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e']

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])

  // (function () {
  //   // Pts quick start mode.
  //   var run = Pt.quickStart('#pt', '#123')

  //   run((time, ftime) => {
  //     // get a line from pointer to center, and use it for direction and magnitude calculations
  //     let ln = Space.pointer.$subtract(Space.center.$add(0.1))
  //     let dir = ln.$unit()
  //     let mag = ln.magnitude()
  //     let mag2 = Space.size.magnitude()

  //     // create a grid of lines
  //     let lines = Create.gridPts(Space.innerBound, 20, 10).map((p) => {
  //       let dist = p.$subtract(Space.center).magnitude() / mag2
  //       return new Group(p, p.$add(dir.$multiply(dist * (20 + mag / 5))))
  //     })

  //     Form.strokeOnly('#fe3').line([Space.center, Space.pointer])
  //     Form.strokeOnly('#fff').lines(lines)
  //   })
  // })()

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
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
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
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
