import bg1 from './../assets/simon-berger.jpg'
import bg2 from './../assets/pok-rie.jpg'
import bg3 from './../assets/peter-fazekas.jpg'
import bg4 from './../assets/david-selbert.jpg'
import bg5 from './../assets/nathan-cowley.jpg'
import bg6 from './../assets/pixabay.jpg'
import bg7 from './../assets/veeterzy.jpg'
import bg8 from './../assets/roberto-shumski.jpg'

const Title = () => (
  <div className="row justify-content-center">
    <div className="col-10 col-md-8">
      <h1 className="hero-title">
        Hey! I&apos;m <span>Ville</span>  <span>Strengell</span>
      </h1>
    </div>
  </div>
)

const SubTitle = () => (
  <div className="row justify-content-center">
    <div className="col-10">
      <p className="hero-paragraph">

        Web Developer, student and a friend
      </p>
    </div>
  </div>
)

const Buttons = ({ refToContact }) => {

  const scrollToContact = () => {
    refToContact.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="row justify-content-center align-items-center">
    {/* Call to Action */}
      <div className="col-12 col-sm-6 col-md-4 hero-btn-wrapper d-flex  justify-content-center">
        <button className="button cta" onClick={scrollToContact}> Contact me!</button>
      </div>
    {/* Secondary call to Action */}
      <div className="col-12 col-sm-6 col-md-4 hero-btn-wrapper d-flex align-items-center justify-content-center">
        <a
          href="https://www.github.com/strengv1"
          target="_blank"
          rel="noreferrer"
          className="button secondary-cta">
          Explore My Work
        </a>
      </div>
    </div>
  )
}
const Hero = ({ refToContact }) => {
  const images = [
    { src: bg1, user: 'Simon Berger' },
    { src: bg2, user: 'Pok RIe' },
    { src: bg3, user: 'Peter Fazekas' },
    { src: bg4, user: 'David-Selbert' },
    { src: bg5, user: 'Nathan Cowley' },
    { src: bg6, user: 'Pixabay' },
    { src: bg7, user: 'Veeterzy' },
    { src: bg8, user: 'Roberto Shumski' }
  ]
  const randomImage = images[ Math.floor(Math.random() * ((images.length)))]
  
  return (
    <>                                       {/*src='https://picsum.photos/1920/1080'*/}
      <img className="hero-bg" loading="lazy" src={randomImage.src} />
      <div className="hero-bg-mask" />
      
      <span style={{position: "absolute", top: "5px", right:"5px", color: "white"}}>
        Random image from Pexels by {randomImage.user}
      </span>
      <div className="hero container">
        <Title />
        <SubTitle />
        <Buttons refToContact={ refToContact }/>
      </div>
    </>
  )
}
export default Hero