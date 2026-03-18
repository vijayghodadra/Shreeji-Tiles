"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/images/logo.jpeg"
                alt="Shreeji Tiles Logo"
                width={100}
                height={60}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.desc}>
              Your trusted partner for premium tiles, sanitaryware, and bath fittings. Crafting elegant spaces for over 25 years.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#products">Products</Link></li>
              <li><Link href="#gallery">Gallery</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#quote">Get Quote</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className={styles.contactCol}>
            <h4 className={styles.heading}>Contact Info</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={16} className={styles.icon} />
                <span>Shed No. 10 Anand Estate, Opp. Yamuna Mill, B/H Samruddhi Complex, Dabhoi Pratapnagar Road, Vadodara, Gujarat 390004</span>
              </li>
              <li>
                <Phone size={16} className={styles.icon} />
                <span>+91 98987 13167</span>
              </li>
              <li>
                <Mail size={16} className={styles.icon} />
                <span>info.shreeji.tiles@gmail.com</span>
              </li>
              <li>
                <Clock size={16} className={styles.icon} />
                <span>10 AM - 8 PM (Mon-Sat)<br />11 AM - 1 PM on Sundays</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.heading}>Stay Updated</h4>
            <p className={styles.newsletterDesc}>
              Get updates on new arrivals & trends
            </p>
            <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; 2025 TejasKP AI Software. All rights reserved.</p>
          <button onClick={scrollToTop} className={styles.backToTop}>
            <ArrowUp size={16} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
