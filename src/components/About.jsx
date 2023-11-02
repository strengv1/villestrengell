import cvPicture from './../assets/me.jpeg'
const About = () => (
  <div className="about container">
    <div className="row justify-content-center">
      <div className="col-8">
        <h1 className="common-title">A Glimpse into My Journey</h1>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-5">
        <p className="common-paragraph">
          I&apos;m a soon-to-be university graduate, with a passion for front-end programming.
          For three years I worked part-time as a software developer alongside my studies. During the employment I was a part of a team that tackled a complete overhaul of a web portal&apos;s front-end.
          During this project I found my calling to be a front-end dev.
          Immediately I started taking courses in web software development, and started to get familiar with the basics of web design in my free time.
        </p>
      </div>
      <div className="col-md-6 text-center">
        <img className="about-picture" src={cvPicture} />
      </div>
    </div>
  </div>
)

export default About