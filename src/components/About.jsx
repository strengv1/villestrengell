import cvPicture from './../assets/me.jpeg'
import minesweeperPicture from './../assets/minesweeper.png'
import { Link } from 'react-router-dom'

const IntroText = () => (
  <div className="row justify-content-center">
    <div className="col-md-6 text-center">
      <img className="about-picture" src={cvPicture} />
    </div>

    <div className="col-md-6">
      <p className="common-paragraph">
        I&apos;m a soon-to-be university graduate, with a passion for front-end programming.
      </p>
      <p className="common-paragraph">
        For three years I worked part-time as a software developer alongside my studies. During the employment I was a part of a team that tackled a complete overhaul of a web portal&apos;s front-end.
        During this project I found my calling to be a front-end dev.
        Immediately I started taking courses in web software development, and started to get familiar with the basics of web design in my free time.
      </p>
    </div>
  </div>
)

const MinesweeperSection = () => (
  <div className="row justify-content-center">
    <div className="col-md-4">
      <p className="common-paragraph">
        My first own React project was Minesweeper! Check it out <Link to='/minesweeper' >Here</Link>
      </p>
    </div>

    <div className="col-md-6 text-center" >
      <img className="about-picture" style={{width: "50%"}} src={minesweeperPicture} />
    </div>
  </div>
)
const Line = () => (
  <div className="line"/>
)
const About = () => {
  
  return (
    <div className="about container">
      <div className="row justify-content-center">
        <div className="col-8">
          <h1 className="common-title">A Glimpse into My Journey</h1>
        </div>
      </div>
      
      <IntroText />
      <Line />
      <MinesweeperSection />
    </div>
  )
}
  


export default About