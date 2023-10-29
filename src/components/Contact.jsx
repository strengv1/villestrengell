import { useState, forwardRef } from 'react'

const Contact = (props, ref) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const inputClass = "w-75 m-1"
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
        <form className="contact-form">
          <div className="input-container">
            <input
              className={inputClass}
              type="text"
              name="name"
              placeholder="John Doe"
              onChange={({ target }) => setName(target.value)}
            />
          </div>

          <div className="input-container">
            <input
              className={inputClass}
              type="email"
              name="email"
              placeholder="john.doe@email.org"
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="input-container">
            <textarea 
              className={inputClass}
              rows="5"
              placeholder="Hey! Would you be interested in..."
              onChange={({ target }) => setMessage(target.value)}
            />
          </div>
          <button className="submit-button" type="submit">Send</button>
        </form>
      </div> 
    </div>
  )
}
  

export default forwardRef(Contact)