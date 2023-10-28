import bg1 from './../assets/simon-berger.jpg'
import bg1lg from './../assets/simon-berger-lg.jpg'
import bg2 from './../assets/pok-rie.jpg'
import bg2lg from './../assets/pok-rie-lg.jpg'
import bg3 from './../assets/roberto-shumski.jpg'
import bg3lg from './../assets/roberto-shumski-lg.jpg'

const Hero = ({ refToContact }) => {
  const images = [
    {
      user: 'Simon Berger', smallSource: bg1, largeSource: bg1lg
    },
    {
      user: 'Pok Rie', smallSource: bg2, largeSource: bg2lg
    },
    {
      user: 'Roberto Shumski', smallSource: bg3, largeSource: bg3lg
    }
  ]
  const randomImage = images[ Math.floor(Math.random() * ((images.length)))]
  
  const scrollToContact = () => {
    refToContact.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <img className="hero-bg" loading="lazy" src={ randomImage.smallSource } ></img>
      <span style={{position: "absolute", top: "5px", right:"5px", color: "white"}}>Image from Pexels by {randomImage.user}</span>
      <div className="hero container">  
        
        <div className="row justify-content-center">
          <div className="col-8">
            <h1 className="hero-title">
              Elevate Your Digital World with a Front-End Programmer
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <p style={{color:"white"}}>
              Welcome to my digital playground, where innovation meets code.
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-6 col-md-4 hero-btn-wrapper d-flex align-items-center justify-content-center">
            <button className="button cta" onClick={scrollToContact}> Contact me!</button>
          </div>
          <div className="col-12 col-sm-6 col-md-4 hero-btn-wrapper d-flex align-items-center justify-content-center">
            <button className="button secondary-cta">Explore My Work</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hero