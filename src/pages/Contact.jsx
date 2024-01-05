import React from 'react';

function Contact() {
  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>

      <div className="row">
        <div className="col-md-6">
          <p>
            If you have any questions or concerns, feel free to reach out to us. We are here to help!
          </p>

          <ul>
            <li>Email: contact@estore.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 E-Commerce Street, Cityville, USA</li>
          </ul>
        </div>

        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Type your message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

      
      <div className="mt-5">
        <h3>Connect with Us on Social Media</h3>
        <p>Follow us on LinkedIn and GitHub for updates and more:</p>
        
        <div>
          <a href="https://www.linkedin.com/in/emin-yazar-127523257/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        
        <div>
          <a href="https://github.com/eminyazar" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
