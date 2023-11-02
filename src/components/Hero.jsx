// import bg1 from './../assets/simon-berger.jpg'
// import bg1lg from './../assets/simon-berger-lg.jpg'
// import bg2 from './../assets/pok-rie.jpg'
// import bg2lg from './../assets/pok-rie-lg.jpg'
// import bg3 from './../assets/roberto-shumski.jpg'
// import bg3lg from './../assets/roberto-shumski-lg.jpg'
// import bg1 from './../assets/bg-1.png'
// import bg2 from './../assets/bg-2.png'
// import bg3 from './../assets/bg-3.png'
// import bg4 from './../assets/bg-4.png'
// import bg5 from './../assets/bg-5.png'

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
      <div className="hero-bg-mask" />
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
  //images[ Math.floor(Math.random() * ((images.length)))]
  return (
    <>                                        {/*src={ randomImage.src }*/}
      <img className="hero-bg" loading="lazy" src='https://picsum.photos/1920/1080' />
      
      <span style={{position: "absolute", top: "5px", right:"5px", color: "white"}}>
        Random image from https://picsum.photos/
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