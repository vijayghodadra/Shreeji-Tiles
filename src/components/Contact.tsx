"use client";

import styles from "./Contact.module.css";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.header}>
          <h2>Contact & Inquiry</h2>
          <p>
            Ready to transform your space? Get in touch with our experts for personalized consultation and competitive quotes.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Info */}
          <div className={styles.infoCol}>
            <h3 className={styles.sectionTitle}>Visit Our Showroom</h3>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <MapPin size={20} className={styles.icon} />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>Shed No. 10 Anand Estate, Opp. Yamuna Mill, B/H Samruddhi Complex, Dabhoi Pratapnagar Road, Vadodara, Gujarat 390004</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Phone size={20} className={styles.icon} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98987 13167</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Mail size={20} className={styles.icon} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info.shreeji.tiles@gmail.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Clock size={20} className={styles.icon} />
                </div>
                <div>
                  <h4>Store Hours</h4>
                  <p>10 AM - 8 PM (Monday - Saturday)<br/>11 AM - 1 PM on Sundays</p>
                </div>
              </div>
            </div>

            <button className={styles.whatsappBtn}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              WhatsApp Inquiry
            </button>

            <div className={styles.mapContainer}>
              <iframe
                src="https://maps.google.com/maps?q=Shreeji%20Tiles%20Dabhoi%20Road%20Vadodara&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={styles.formCol}>
            <h3 className={styles.sectionTitle}>Send us an Inquiry</h3>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                <div className={styles.inputGroup}>
                  <label>Email Address *</label>
                  <input type="email" placeholder="your.email@example.com" required />
                </div>
              </div>

              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label>Address</label>
                  <input type="text" placeholder="Your Address" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Mobile Number</label>
                  <input type="tel" placeholder="Your Mobile Number" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Project Type</label>
                <select defaultValue="">
                  <option value="" disabled hidden>Select your project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="renovation">Renovation</option>
                  <option value="new_construction">New Construction</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project requirements, preferred styles, budget, or any specific questions..."
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                Submit inquiry
              </button>
            </form>
          </div>
        </div>

        <p className={styles.footerText}>
          We&apos;ll respond to your inquiry within 24 hours. For urgent queries, please call us directly.
        </p>
      </div>
    </section>
  );
};

export default Contact;
