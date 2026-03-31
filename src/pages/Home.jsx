import { Link } from 'react-router-dom'
import { 
  ArrowRight, Headphones, FileText, Truck, Users, 
  Target, BarChart3, Shield, Globe, CheckCircle,
  ClipboardList, Handshake, Rocket
} from 'lucide-react'
import './Home.css'

const services = [
  { icon: <Headphones size={28} />, title: 'Customer Experience', desc: 'Dedicated CX teams that understand freight, logistics, and supply chain — not script readers.' },
  { icon: <Truck size={28} />, title: 'Dispatch & Operations', desc: 'Trained dispatch specialists who manage loads, coordinate drivers, and keep shipments moving.' },
  { icon: <FileText size={28} />, title: 'Billing & Invoicing', desc: 'Accurate, fast billing operations that reduce errors and accelerate your cash flow.' },
  { icon: <BarChart3 size={28} />, title: 'Data Entry & Track-and-Trace', desc: 'High-volume data processing with 99%+ accuracy. Real-time shipment tracking and updates.' },
  { icon: <Users size={28} />, title: 'Workforce Scaling', desc: 'Scale your team up or down based on demand. No long-term contracts, no hiring headaches.' },
  { icon: <Globe size={28} />, title: 'Global Coverage', desc: 'Offshore, nearshore, onshore, and rural American teams — the right model for every role.' },
]

const steps = [
  { icon: <ClipboardList size={24} />, num: '01', title: 'Discovery', desc: 'We learn your operations, pain points, and goals. No generic solutions — everything is tailored.' },
  { icon: <Target size={24} />, num: '02', title: 'Team Design', desc: 'We build a custom team structure with the right mix of offshore, nearshore, and onshore talent.' },
  { icon: <Handshake size={24} />, num: '03', title: 'Hire & Train', desc: 'We recruit, vet, and train your team on your specific processes, systems, and standards.' },
  { icon: <Rocket size={24} />, num: '04', title: 'Launch & Optimize', desc: 'Your team goes live with ongoing performance management, QA, and continuous improvement.' },
]

const stats = [
  { value: '60%+', label: 'Average Cost Savings' },
  { value: '99.2%', label: 'Billing Accuracy' },
  { value: '<30 Days', label: 'Time to Launch' },
  { value: '500+', label: 'Team Members Deployed' },
]

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge">BPO Built for Logistics</span>
            <h1>Build Scalable Support Teams <span className="hero-accent">Without the Overhead</span></h1>
            <p className="hero-subtitle">
              We help logistics, freight, and supply chain companies build high-performing 
              teams — offshore, nearshore, or onshore. U.S.-based leadership. Transparent pricing. 
              Real results.
            </p>
            <div className="hero-actions">
              <Link to="/roi-calculator" className="btn btn-primary btn-lg">
                Calculate Your Savings <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">Annual Savings Estimate</div>
              <div className="hero-card-amount">$324,000</div>
              <div className="hero-card-detail">For a team of 10 dispatch specialists</div>
              <div className="hero-card-bar">
                <div className="hero-card-bar-fill" style={{width: '65%'}}></div>
              </div>
              <div className="hero-card-label">65% cost reduction vs. U.S. hiring</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">End-to-End Logistics Support</h2>
            <p className="section-subtitle" style={{margin: '0 auto'}}>
              From dispatch to billing to customer experience — we build the teams 
              that keep your operations running.
            </p>
          </div>
          <div className="services-grid">
            {services.map((svc, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section how-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">From Discovery to Deployment in Weeks</h2>
            <p className="section-subtitle" style={{margin: '0 auto'}}>
              A proven process that gets your team up and running fast — without cutting corners.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LOOP */}
      <section className="section why-section">
        <div className="container why-grid">
          <div className="why-text">
            <span className="section-label">Why Loop Services</span>
            <h2 className="section-title">We're Not Another Generic BPO</h2>
            <p className="section-subtitle">
              We live and breathe logistics. Our teams speak your language — BOLs, freight classes, 
              detention charges, TMS platforms. That specialization is the difference.
            </p>
            <ul className="why-list">
              <li><CheckCircle size={20} /> <span><strong>Logistics-First:</strong> Every team member is trained on freight and supply chain operations</span></li>
              <li><CheckCircle size={20} /> <span><strong>U.S. Leadership:</strong> American management bridging global teams with your expectations</span></li>
              <li><CheckCircle size={20} /> <span><strong>Transparent Pricing:</strong> Cost-plus model — you see exactly what you pay for</span></li>
              <li><CheckCircle size={20} /> <span><strong>Flexible Models:</strong> Offshore, nearshore, onshore, or hybrid — whatever fits</span></li>
              <li><CheckCircle size={20} /> <span><strong>Fast Launch:</strong> Teams deployed in under 30 days, fully trained on your processes</span></li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{marginTop: '24px'}}>
              Talk to Our Team <ArrowRight size={16} />
            </Link>
          </div>
          <div className="why-visual">
            <div className="why-card">
              <Shield size={32} />
              <h4>Enterprise-Grade Security</h4>
              <p>SOC 2 aligned practices, secure VPN access, and NDA-protected teams.</p>
            </div>
            <div className="why-card">
              <Target size={32} />
              <h4>Performance Guaranteed</h4>
              <p>Clear KPIs, regular reporting, and continuous improvement built into every engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Ready to Build Your Team?</h2>
          <p>Get a custom workforce plan and ROI analysis — no strings attached.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-white btn-lg">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link to="/roi-calculator" className="btn btn-outline btn-lg" style={{borderColor: 'white', color: 'white'}}>
              Try the ROI Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
