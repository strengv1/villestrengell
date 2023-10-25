import bgSmall from './../assets/bg-alt-sm.jpg'
import bgMedium from './../assets/bg-alt-md.jpg'


const Hero = () => {
  
  return (
    <div className="hero">
      <img className="hero-bg" src={bgMedium} alt={bgSmall}></img>
      <h1 className="hero-title">Elevate Your Digital World with a Front-End Programmer</h1>
      <p>Welcome to my digital playground, where innovation meets code.</p>
      <div>
        <button className="button cta-btn">Contact me!</button>
        <button className="button secondary-cta-btn">Explore My Work</button>
      </div>
      
    </div>
  )
}
export default Hero