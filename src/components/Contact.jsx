import { useState, forwardRef } from 'react'

const Contact = (props, ref) => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
 
  const sendEmail = () => {
    alert(`Email sent from ${email} with message ${message}`)
  }

  const inputClass = ""
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
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="input-container">
            <input
              className={inputClass}
              type="email"
              name="email"
              required
              onChange={({ target }) => setEmail(target.value)}
            />
            <span>Your email</span>
          </div>
          <div className="input-container">
            <textarea 
              className={inputClass}
              rows="5"
              required
              onChange={({ target }) => setMessage(target.value)}
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