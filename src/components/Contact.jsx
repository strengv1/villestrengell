import { forwardRef, useRef } from 'react'
import emailjs from '@emailjs/browser';

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
      .then((result) => {
          // console.log(result.text);
          alert('Email sent succesfully! Talk to you soon :)')
          e.target.reset()
      }, (error) => {
          alert('Something went wrong, please try again.')
          // console.log(error.text);
      });
  };

  return(
    <div className="contact container" ref={ref}>
      <div className="content">
        <div className="row justify-content-center">
          <h2 className="common-title" >Let&apos;s Connect!</h2>
          <div className="common-paragraph">
            Ready to bring your project to life? Reach out and let&apos;s start coding together.
            <p>
              You can reach me at <b>villes-97@hotmail.com</b>, or use the contact form below to do so directly
            </p>
          </div>
        </div>

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
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
}

export default forwardRef(Contact)