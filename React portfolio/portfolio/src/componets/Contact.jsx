
import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div>
        <h2>Contact me here</h2>
        
        <form  className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea  placeholder="Your Message" rows="8" required></textarea>
          <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default Contact