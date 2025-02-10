
import React from 'react'

const Contact = () => {
  return (
    <div>
        <h2>Contact me here</h2>
        <p>Let's connect! Feel free to reach out for collaborations or questions.</p>
        <form  className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="8" required></textarea>
          <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default Contact