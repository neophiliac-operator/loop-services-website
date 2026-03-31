import { Link } from 'react-router-dom'
import { 
  ArrowRight, Headphones, FileText, Truck, Users, 
  BarChart3, Globe, MapPin, Monitor, Clock, CheckCircle
} from 'lucide-react'
import './Services.css'

const offerings = [
  {
    icon: <Truck size={32} />,
    title: 'Dispatch & Load Management',
    desc: 'End-to-end dispatch support including load booking, driver coordination, route optimization, and real-time status updates. Our teams integrate directly with your TMS.',
    features: ['Load booking & assignment', 'Driver communication', 'Route optimization support', 'Real-time status tracking']
  },
  {
    icon: <Headphones size={32} />,
    title: 'Customer Experience & Support',
    desc: 'Dedicated CX teams trained in freight and logistics terminology. We handle inquiries, complaints, proactive updates, and relationship management.',
    features: ['Inbound/outbound support', 'Shipment status communication', 'Issue resolution & escalation', 'Customer retention programs']
  },
  {
    icon: <FileText size={32} />,
    title: 'Billing & Invoicing',
    desc: 'Accurate, timely billing operations that reduce errors and speed up collections. We handle invoice generation, reconciliation, and AR follow-up.',
    features: ['Invoice generation & delivery', 'Payment reconciliation', 'Discrepancy resolution', 'AR management & follow-up']
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'Data Entry & Track-and-Trace',
    desc: 'High-volume data processing with 99%+ accuracy. Shipment tracking, POD management, and system updates across multiple platforms.',
    features: ['Shipment data entry', 'Multi-carrier tracking', 'POD processing', 'System updates & maintenance']
  },
  {
    icon: <Users size={32} />,
    title: 'Back Office Operations',
    desc: 'Administrative support that keeps your business running smoothly — document management, compliance filing, and operational reporting.',
    features: ['Document management', 'Compliance & filing', 'Operational reporting', 'Process documentation']
  },
  {
    icon: <Monitor size={32} />,
    title: 'Logistics Coordination',
    desc: 'Full-cycle logistics coordinators who manage the flow from pickup to delivery, handling exceptions and keeping all parties informed.',
    features: ['Pickup & delivery coordination', 'Exception management', 'Carrier communication', 'Performance reporting']
  }
]

const models = [
  {
    icon: <Globe size={32} />,
    title: 'Offshore (India)',
    desc: 'Maximum cost savings with deep talent pools. Ideal for back-office operations, data entry, billing, and overnight coverage.',
    savings: '60-70%',
    best: 'High-volume processing, 24/7 coverage'
  },
  {
    icon: <MapPin size={32} />,
    title: 'Nearshore (Latin America)',
    desc: 'Same time zone advantages with significant cost savings. Great for customer-facing roles requiring real-time collaboration.',
    savings: '35-50%',
    best: 'Customer support, coordination roles'
  },
  {
    icon: <Users size={32} />,
    title: 'Rural American',
    desc: 'U.S.-based talent from rural communities at lower costs than major metros. Native English, cultural alignment, no time zone issues.',
    savings: '20-35%',
    best: 'Team leads, complex customer interaction'
  },
  {
    icon: <Clock size={32} />,
    title: 'Hybrid Model',
    desc: 'The best of all worlds — combine shore models for optimal coverage, cost, and quality. U.S. leadership with global execution.',
    savings: 'Customized',
    best: 'Full operations, round-the-clock coverage'
  }
]

export default function Services() {
  return (
    <div className="services-page">
      {/* HEADER */}
      <section className="page-header">
        <div className="container">
          <span className="section-label">Our Services</span>
          <h1 className="page-title">Logistics Support, Done Right</h1>
          <p className="page-subtitle">
            We don't do generic call centers. We build specialized teams that understand 
            your industry, your systems, and your customers.
          </p>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="section">
        <div className="container">
          <div className="offerings-grid">
            {offerings.map((item, i) => (
              <div key={i} className="offering-card">
                <div className="offering-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ul className="offering-features">
                  {item.features.map((f, j) => (
                    <li key={j}><CheckCircle size={14} /> {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFORCE MODELS */}
      <section className="section models-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Workforce Models</span>
            <h2 className="section-title">The Right Team, In the Right Place</h2>
            <p className="section-subtitle" style={{margin: '0 auto'}}>
              One size doesn't fit all. We help you choose the staffing model — or combination 
              of models — that optimizes for your priorities.
            </p>
          </div>
          <div className="models-grid">
            {models.map((model, i) => (
              <div key={i} className="model-card">
                <div className="model-icon">{model.icon}</div>
                <h3>{model.title}</h3>
                <p>{model.desc}</p>
                <div className="model-meta">
                  <div>
                    <span className="model-meta-label">Cost Savings</span>
                    <span className="model-meta-value">{model.savings}</span>
                  </div>
                  <div>
                    <span className="model-meta-label">Best For</span>
                    <span className="model-meta-value">{model.best}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Let's Design Your Team</h2>
          <p>Tell us about your operations and we'll build a custom workforce plan.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-white btn-lg">
              Get a Custom Plan <ArrowRight size={18} />
            </Link>
            <Link to="/roi-calculator" className="btn btn-outline btn-lg" style={{borderColor: 'white', color: 'white'}}>
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
