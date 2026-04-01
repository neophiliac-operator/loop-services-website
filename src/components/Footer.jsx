import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
const Linkedin = (props) => <svg xmlns="http://www.w3.org/2000/svg" width={props.size||24} height={props.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
const Twitter = (props) => <svg xmlns="http://www.w3.org/2000/svg" width={props.size||24} height={props.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={`${import.meta.env.BASE_URL}loop-services-logo.svg`} alt="Loop Services" style={{ height: '40px', width: 'auto' }} />
            </Link>
            <p className="footer-desc">
              Building scalable support teams for logistics, freight, and supply chain companies. 
              U.S.-based leadership with global reach.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="mailto:info@loopservices.net" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/services">Services</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <Link to="/roi-calculator">ROI Calculator</Link>
            <Link to="/services">Offshore Teams</Link>
            <Link to="/services">Nearshore Teams</Link>
            <Link to="/services">Rural Workforce</Link>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <div className="footer-contact">
              <Mail size={14} />
              <span>info@loopservices.net</span>
            </div>
            <div className="footer-contact">
              <Phone size={14} />
              <span>(470) 730-4110</span>
            </div>
            <div className="footer-contact">
              <MapPin size={14} />
              <span>United States</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Loop Services. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
