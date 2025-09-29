import React, { useState } from "react";
import "../Style/Footer.css";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        alert("✅ Feedback submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("⚠️ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Inspiration / Quotes Section */}
        <div className="footer-section">
          <h3>Why Choose Us?</h3>
          <p className="footer-quote">🌟 “Plan your work, then work your plan.”</p>
          <p className="footer-quote">🚀 “Small progress each day adds up to big results.”</p>
          <p className="footer-quote">💡 “Productivity is the bridge between goals and accomplishments.”</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram
          </a>
          <br />
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook /> Facebook
          </a>
          <br />
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter /> Twitter
          </a>
          <br />
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* Feedback Form */}
        <div className="footer-section">
          <h3>Feedback</h3>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Feedback"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PortFolie. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
