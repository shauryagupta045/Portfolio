import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "bb647208-b999-4522-b994-28c72283e68f"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      event.target.reset();
    } else {
      console.error("Submission Error:", data);
      setResult(data.message || "An error occurred.");
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container flex-center">
        <h1 className="section-title-01">CONTACT ME</h1>
        <h2 className="section-title-02">GET IN TOUCH</h2>
        <div className="content">
          <div className="contact-left">
            <h2>Let's Discuss Your Projects</h2>
            <ul className="contact-list">
              <li>
                <h3 className="item-title"><i className="fas fa-phone"></i> Phone</h3>
                <span>+91-8923003108</span>
              </li>
              <li>
                <h3 className="item-title"><i className="fas fa-envelope"></i> Email Address</h3>
                <span>
                  <a href="mailto:guptashaurya0728@gmail.com">guptashaurya0728@gmail.com</a>
                </span>
              </li>
              <li>
                <h3 className="item-title"><i className="fas fa-map-marker-alt"></i> Address</h3>
                <span>Anupshahr-203390, Bulandshahr, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>
          <div className="contact-right">
            <p>
              I'm Always Interested In Discussing<br />
              <span>Products, Work, or Potential Collaborations.</span>
            </p>
            <div className="container">
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="first-row">
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="second-row">
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="third-row">
                  <input type="text" name="subject" placeholder="Subject" required />
                </div>
                <div className="fourth-row">
                  <textarea name="message" placeholder="Message" rows="7" required></textarea>
                </div>
                <button className="btn" type="submit">
                  Send Message <i className="fas fa-paper-plane"></i>
                </button>
              </form>
              <span className="form-result">{result}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
