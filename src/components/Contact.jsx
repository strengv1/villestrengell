import { forwardRef, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { SocialIcon } from 'react-social-icons'

const ContactForm = ({formRef, sendEmail}) => (
  <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
    <div className="input-container">
      <input
        type="email"
        name="user_email"
        required
      />
      <span>Your email</span>
    </div>
    <div className="input-container">
      <textarea
        name="message"
        rows="5"
        required
      />
      <span>Message</span>
    </div>
    <button className="submit-button" type="submit">Send</button>
  </form>
)

const SocialIcons = () => (
  <>
    <div className="col-4" />
      <div className="col-2">
        <SocialIcon network="github" url="www.github.com/strengv1" />
      </div>
      <div className="col-2">
        <SocialIcon network="instagram" url="www.instagram.com/villestrengell" />
      </div>
    <div className="col-4" />
  </>
)

const Contact = (props, ref) => {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
          alert('Email sent succesfully! I will get back to you as soon as possible :)')
          e.target.reset()
      }, () => {
          alert('Something went wrong, please try again.')
      });
  };

  return(
    <div className="contact container" ref={ref}>
      <div className="content container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h2 className="common-title">Let&apos;s Connect!</h2>
          </div>
          <div className="common-paragraph">
            Ready to bring your project to life? Have a job opportunity for me? Reach out and let&apos;s start coding together.
            <p>
              You can reach me at <b>villes-97@hotmail.com</b>, or use the contact form below to do so directly
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xs-10 col-sm-8">
            <ContactForm formRef={form} sendEmail={sendEmail} />
          </div>
        </div>
        
        <div className="row justify-content-evenly pt-5">
          <SocialIcons />
        </div>
      </div>

    </div>
  )
}

export default forwardRef(Contact)