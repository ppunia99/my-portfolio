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
import Betting from '../../assets/ProjectImages/bettingDash.jpeg'
import Fittrack from '../../assets/ProjectImages/fittrack.jpeg'
import Twitter from '../../assets/ProjectImages/twitterBot.jpeg'

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover')
  })

  return (
    <>
      <div className="container about-page">
        <div className="myProjects">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', '', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>

        <div className="imageContainer">
          <div className="images">
            <div className="proj1">
              <img src={Betting} alt="Betting Project" className="proj1image" />
              <h3 style={{ color: '#ffd700' }}>Project Title: BetOnIt.</h3>
              <p>
                Conceptualized an interpersonal betting app that locks in bets
                via validation and monetary system
              </p>
              <p>
                Money is transferred between accounts on server side, or if
                validation occurs bet is stored in separate cluster
              </p>
              <p>
                Users can see active bets, completed bets, and the change in
                account balance over time.
              </p>
            </div>
            <div className="proj2">
              <img
                src={Fittrack}
                alt="Fitness Project"
                className="proj2image"
              />
              <h3 style={{ color: '#ffd700' }}>Project Title: Fittrack.</h3>
              <p>
                Designed a dashboard filled with personal fitness data in order
                to track changes over time
              </p>
              <p>
                Formulated a method that calculates average strength change per
                muscle group ands posts information to server
              </p>
              <p>
                Data is retrieved from server using RESTful APIs, and tracks
                change over time and displays in a table
              </p>{' '}
            </div>
            <div className="proj3">
              <img src={Twitter} alt="Twitter Bot" className="proj3image" />
              <h3 style={{ color: '#ffd700' }}>Project Title: Twitter Bot</h3>
              <p>
                Partnered with a developer to create an automated twitter-bot
                that regularly posts updates of NFT sales
              </p>
              <p>
                Determined scheduling of posts by using python epoch time to
                initiate a check and post every hour
              </p>
              <p>
                Constructed a bolding function that takes a regular string and
                converts the output to bold for twitter posts
              </p>{' '}
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Project
