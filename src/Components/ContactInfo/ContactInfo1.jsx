import { useState } from 'react';
import './premium-contact.css';

const ContactInfo1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product_type: '',
    message: ''
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const submissionData = {
      ...formData,
      access_key: "8b9ec994-7e2a-4620-be25-217b9c1912a7",
      subject: `New Website Inquiry from ${formData.name}`,
      from_name: "Techno Dorbit Website"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(submissionData)
      });
      
      const json = await response.json();
      
      if (response.status === 200) {
        setResult("Message sent successfully! We will get back to you soon.");
        setFormData({ name: '', company: '', email: '', phone: '', product_type: '', message: '' });
      } else {
        setResult(json.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("Error sending message. Please try again later.");
    }
  };

  return (
    <div className="premium-contact-section">
      <div className="premium-contact-glow-1"></div>
      <div className="premium-contact-glow-2"></div>
      
      <div className="container">
        <div className="premium-contact-header" data-aos="fade-up" data-aos-duration="700">
          <span className="premium-contact-badge">Get In Touch</span>
          <h2 className="premium-contact-title">Let's build something <span>extraordinary</span></h2>
          <p className="premium-contact-subtitle">Have a project in mind or need technical guidance? Our experts are ready to turn your vision into reality.</p>
        </div>

        <div className="row align-items-center premium-contact-wrapper">
          <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right" data-aos-duration="800">
            <div className="premium-info-cards">
              <div className="premium-info-card">
                <div className="icon-wrapper">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="info-content">
                  <h5>Office Location</h5>
                  <p>Vadodara, Gujarat, India<br/>Global Hub</p>
                </div>
              </div>

              <div className="premium-info-card">
                <div className="icon-wrapper">
                  <i className="bi bi-envelope-at"></i>
                </div>
                <div className="info-content">
                  <h5>Email Us</h5>
                  <a href="mailto:technodorbit@gmail.com">technodorbit@gmail.com</a>
                </div>
              </div>

              <div className="premium-info-card">
                <div className="icon-wrapper">
                  <i className="bi bi-telephone-inbound"></i>
                </div>
                <div className="info-content">
                  <h5>Call & WhatsApp</h5>
                  <a href="tel:9687567294" style={{ fontWeight: '600' }}>+91 96875 67294</a>
                  <a href="https://wa.me/919687567294" target="_blank" rel="noopener noreferrer" className="whatsapp-direct-link">
                    <i className="bi bi-whatsapp"></i> Chat on WhatsApp
                  </a>
                  <a href="tel:6352376755" className="mt-1" style={{ fontSize: '13px', opacity: 0.8 }}>Backup: +91 63523 76755</a>
                </div>
              </div>
            </div>
            
            <div className="premium-social-connect" data-aos="fade-right" data-aos-duration="900">
              <h5>Connect With Us</h5>
              <div className="social-connect-buttons">
                <a href="https://www.linkedin.com/company/techno-dorbit/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="social-connect-btn linkedin">
                  <i className="bi bi-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.facebook.com/share/1DorrhRozQ/" target="_blank" rel="noopener noreferrer" className="social-connect-btn facebook">
                  <i className="bi bi-facebook"></i>
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/technodorbit?igsh=YngxeWp5cXVsemV1" target="_blank" rel="noopener noreferrer" className="social-connect-btn instagram">
                  <i className="bi bi-instagram"></i>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-duration="800">
            <div id="contact-form" className="premium-contact-form-container">
              <div className="form-glass-panel">
                <h3>Send us a Message</h3>
                <form onSubmit={handleSubmit} className="premium-contact-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
                      <div className="input-focus-line"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" />
                      <div className="input-focus-line"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
                      <div className="input-focus-line"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
                      <div className="input-focus-line"></div>
                    </div>
                    <div className="col-md-12 form-group">
                      <select name="product_type" value={formData.product_type} onChange={handleChange} required>
                        <option value="" disabled>Select Service Type</option>
                        <option value="React Website">React Website</option>
                        <option value="Business Website">Business Website</option>
                        <option value="E-Commerce">E-Commerce Solution</option>
                        <option value="Other">Other Query</option>
                      </select>
                      <div className="input-focus-line"></div>
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea name="message" value={formData.message} onChange={handleChange} cols="30" rows="4" placeholder="How can we help you?" required></textarea>
                      <div className="input-focus-line"></div>
                    </div>
                    <div className="col-md-12 mt-3">
                      <button type="submit" className="premium-submit-btn">
                        <span>Send Message</span>
                        <i className="bi bi-arrow-right"></i>
                      </button>
                      {result && <p className="mt-3 text-center" style={{ color: result.includes("success") ? "#a5ef35" : "#ff5555" }}>{result}</p>}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactInfo1;
