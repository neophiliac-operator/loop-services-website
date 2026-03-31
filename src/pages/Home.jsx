import { Link } from 'react-router-dom'
import { 
  ArrowRight, Headphones, FileText, Truck, Users, 
  Target, BarChart3, Shield, Globe, CheckCircle,
  ClipboardList, Handshake, Rocket, Cpu, Monitor, Code
} from 'lucide-react'
import './Home.css'

const services = [
  { icon: <Cpu size={28} />, title: 'AI-Augmented Workforce', desc: 'Our WaaS platform wraps AI around your existing tools — unified agent desktop, AI copilot, and 100% automated QA scoring.' },
  { icon: <Code size={28} />, title: 'Technology & Development', desc: 'Full-stack engineers, DevOps, UI/UX designers, and solution architects to build and scale your tech.' },
  { icon: <FileText size={28} />, title: 'Back Office & Clerical', desc: 'Medical billing, virtual assistants, bookkeeping, and data entry — powered by AI for 3x throughput.' },
  { icon: <ClipboardList size={28} />, title: 'Project Management', desc: 'Scrum masters, BPO consulting, and delivery managers who keep complex projects on track.' },
  { icon: <Headphones size={28} />, title: 'Support & Operations', desc: 'Help desk, live chat, and customer service teams augmented with AI copilot for faster resolution.' },
  { icon: <Users size={28} />, title: 'Workforce Scaling', desc: 'Flexible offshore, nearshore, and onshore models. Scale up or down — no long-term contracts.' },
]

const steps = [
  { icon: <ClipboardList size={24} />, num: '01', title: 'Discovery', desc: 'We learn your operations, pain points, and goals. No generic solutions — everything is tailored.' },
  { icon: <Target size={24} />, num: '02', title: 'Team Design', desc: 'We build a custom team structure with the right mix of offshore, nearshore, and onshore talent.' },
  { icon: <Handshake size={24} />, num: '03', title: 'Hire & Train', desc: 'We recruit, vet, and train your team on your specific processes, systems, and standards.' },
  { icon: <Rocket size={24} />, num: '04', title: 'Launch & Optimize', desc: 'Your team goes live with ongoing performance management, QA, and continuous improvement.' },
]

const stats = [
  { value: '3x', label: 'Productivity Gain' },
  { value: '100%', label: 'QA Coverage' },
  { value: '60%+', label: 'Cost Savings' },
  { value: '<30 Days', label: 'Time to Launch' },
]

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge">Worker as a Service</span>
            <h1>AI-Augmented Teams That <span className="hero-accent">Deliver Outcomes, Not Just Seats</span></h1>
            <p className="hero-subtitle">
              We don't just give you cheaper labor — we wrap AI around your existing tools to make 
              every worker 3x more productive. AI copilot. 100% automated QA. Real-time dashboards. 
              That's WaaS.
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
            <h2 className="section-title">AI-Powered Workforce Solutions</h2>
            <p className="section-subtitle" style={{margin: '0 auto'}}>
              From AI-augmented operations to back-office support — we build teams 
              powered by our WaaS platform that deliver outcomes, not just hours.
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
              Most BPOs sell seats. We sell outcomes. Our WaaS platform is the difference — 
              AI-native, tool-agnostic, and built for measurable results.
            </p>
            <ul className="why-list">
              <li><CheckCircle size={20} /> <span><strong>AI-Native:</strong> Every worker is augmented with an AI copilot — real-time suggestions, auto-drafts, and smart routing</span></li>
              <li><CheckCircle size={20} /> <span><strong>Outcomes, Not Seats:</strong> Pay for results with outcome-based pricing — not just bodies in chairs</span></li>
              <li><CheckCircle size={20} /> <span><strong>100% QA Coverage:</strong> Every interaction scored by AI automatically — not 5% manual audits</span></li>
              <li><CheckCircle size={20} /> <span><strong>Tool-Agnostic:</strong> Works with any TMS, CRM, email, load board — no migration required</span></li>
              <li><CheckCircle size={20} /> <span><strong>Fast Launch:</strong> Teams deployed in under 30 days with full AI platform integration</span></li>
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
