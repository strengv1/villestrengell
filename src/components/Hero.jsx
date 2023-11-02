// import bg1 from './../assets/simon-berger.jpg'
import bg1lg from './../assets/simon-berger-lg.jpg'
// import bg2 from './../assets/pok-rie.jpg'
import bg2lg from './../assets/pok-rie-lg.jpg'
// import bg3 from './../assets/roberto-shumski.jpg'
import bg3lg from './../assets/roberto-shumski-lg.jpg'
// import bg1 from './../assets/bg-1.png'
// import bg2 from './../assets/bg-2.png'
// import bg3 from './../assets/bg-3.png'
// import bg4 from './../assets/bg-4.png'
// import bg5 from './../assets/bg-5.png'


const Hero = ({ refToContact }) => {
  const images = [
    {
      user: 'Simon Berger', src: bg1lg
    },
    {
      user: 'Pok Rie', src: bg2lg
    },
    {
      user: 'Roberto Shumski', src: bg3lg
    },
    // {
    //   user: 'imagine.art', src: bg4
    // },
    // {
    //   user: 'imagine.art', src: bg5
    // }
  ]
  const randomImage = images[ Math.floor(Math.random() * ((images.length)))]
  
  const scrollToContact = () => {
    refToContact.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <img className="hero-bg" loading="lazy" src={ randomImage.src } ></img>
      <span style={{position: "absolute", top: "5px", right:"5px", color: "white"}}>Image from Pexels by {randomImage.user}</span>
      <div className="hero container">  
        <div className="row justify-content-center">
          <div className="col-10 col-md-8">
            <h1 className="hero-title">
              Hey! I&apos;m <span>Ville</span>  <span>Strengell</span>
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <p className="hero-paragraph">
              Web Developer, student and a friend
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-6 col-md-4 hero-btn-wrapper d-flex  justify-content-center">
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