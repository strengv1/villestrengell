import { forwardRef, useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = ({formRef, sendEmail}) => (
  <div className="row justify-content-center">
    <div className="col-xs-10 col-sm-8">
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
    </div>
  </div>
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
      })
  }

  return(
    <div className="contact container" ref={ref}>
      <div className="content container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h2 className="common-title">Let&apos;s Connect!</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="common-paragraph" style={{textAlign: "center"}}>
              Ready to bring your project to life? Have a job opportunity for me? Reach out and let&apos;s start coding together.
              <br/><br/>
              You can reach me at <b>villes-97@hotmail.com</b>, or use the contact form below.
            </p>
          </div>
        </div>
        
        <ContactForm formRef={form} sendEmail={sendEmail} />
        
        {/* <SocialIcons /> */}
      </div>

    </div>
  )
}

export default forwardRef(Contact)