import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return(
    <div className="contact">
      <h2>Let&apos;s Connect!</h2>
      <div>Ready to bring your project to life? Reach out and let&apos;s start coding together.</div>
      <p>You can reach me at <span className="email-inline">villes-97@hotmail.com</span>, or use the contact form below to do so directly</p>
      <form className="contact-form">
        <div className="input-container">
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            onChange={({ target }) => setName(target.value)}
          />
        </div>

        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="john.doe@email.org"
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="input-container">
          <textarea className="textarea"
            rows="4" cols="30"
            placeholder="Hey! Would you be interested in..."
            onChange={({ target }) => setMessage(target.value)}
          />
        </div>
        <button className="submit-button" type="submit">Send</button>
      </form>
    </div>
  )
}
  

export default Contact