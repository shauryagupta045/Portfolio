import React from "react";
import "./Contact.css"

const  Contact =() => {
    return (
      <section className="contact section" id="contact">
        <div className="container flex-center">
          <h1 className="section-title-01">CONTACT ME</h1>
          <h2 className="section-title-02">GET IN TOUCH</h2>
          <div className="content">
            <div className="contact-left">
              <h2>Let's Discuss Your Projects</h2>
              <ul className="contact-list">
                <li><h3 className="item-title"><i className="fas fa-phone"></i> Phone</h3><span>+91-8923003108</span></li>
                <li><h3 className="item-title"><i className="fas fa-envelope"></i> Email Address</h3><span><a href="mailto:guptashaurya0728@gmail.com">guptashaurya0728@gmail.com</a></span></li>
                <li><h3 className="item-title"><i className="fas fa-map-marker-alt"></i> Address</h3><span>Anupshahr-203390, Bulandshahr, Uttar Pradesh, India</span></li>
              </ul>
            </div>
            <div className="contact-right">
              <p>I'm Always Interested In Discussing<br /><span>Products, Work, or Potential Collaborations.</span></p>
              <div className="container">
                <form className="contact-form">
                  <div className="first-row"><input type="text" name="name" placeholder="Name" /></div>
                  <div className="second-row"><input type="email" name="email" placeholder="Email" /></div>
                  <div className="third-row"><input type="text" name="subject" placeholder="Subject" /></div>
                  <div className="fourth-row"><textarea name="message" placeholder="Message" rows="7"></textarea></div>
                  <button className="btn" type="submit">Send Message <i className="fas fa-paper-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;