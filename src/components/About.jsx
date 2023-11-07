import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import cvPicture from './../assets/me.jpg'
import minesweeperPicture from './../assets/minesweeper.png'

const SocialIcons = () => (
  <div className="row justify-content-evenly">
    <div className="col-sm-4" />
    <div className="col-2">
      <SocialIcon target="_blank" network="github" url="http://www.github.com/strengv1" />
    </div>
    <div className="col-2">
      <SocialIcon target="_blank" network="instagram" url="http://www.instagram.com/villestrengell" />
    </div>
    <div className="col-sm-4" />
  </div>
)

const IntroText = () => (
  <div className="row justify-content-center">
  
    <div className="col-9 col-md-6 text-center">
        <img className="about-picture" loading="lazy" src={cvPicture} />
        <SocialIcons />
    </div>

    <div className="col-md-6">
      <p className="common-paragraph p-2 p-md-4">
        I&apos;m a soon-to-be university graduate, with a passion for front-end programming.
      </p>
      <p className="common-paragraph p-2 p-md-4">
        For three years I worked part-time as a software developer alongside my studies. During the employment I was a part of a team that tackled a complete overhaul of a web portal&apos;s front-end.
        During this project I found my calling to be a front-end dev.
        Immediately I started taking courses in web software development, and started to get familiar with the basics of web design in my free time.
      </p>
      <p className="common-paragraph p-2 p-md-4">
        Currently I&apos;m looking to join a workplace that treats its employees as valued individuals and cultivates a strong sense of community. 
      </p>
      <Link to='/cv' className="common-paragraph p-2 p-md-4" style={{color:"var(--color-gold)"}}>
        Check out my CV here!
      </Link>
    </div>
  </div>
)

const MinesweeperSection = () => (
  <div className="row justify-content-center">
    <div className="col-md-5">
      <p className="common-paragraph p-2 p-md-4">
        My first own React project was Minesweeper! Check it out <Link to='/minesweeper'>Here</Link>
      </p>
    </div>

    <div className="col-9 col-md-6 text-center" >
      <Link to='/minesweeper'>
        <img className="about-picture" loading="lazy" style={{width: "50%"}} src={minesweeperPicture} />
      </Link>
      
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