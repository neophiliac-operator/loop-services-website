import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/roi-calculator', label: 'ROI Calculator' },
  { to: '/careers', label: 'Careers' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-loop">Loop</span>
          <span className="logo-services">Services</span>
        </Link>

        <div className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar-link ${pathname === link.to ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary navbar-cta" onClick={() => setOpen(false)}>
            Get Started <ArrowRight size={16} />
          </Link>
        </div>

        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}
