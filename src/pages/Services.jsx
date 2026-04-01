import { Link } from 'react-router-dom'
import { 
  ArrowRight, Headphones, FileText, Truck, Users, 
  BarChart3, Globe, MapPin, Monitor, Clock, CheckCircle,
  Cpu, Code, ClipboardList, TrendingUp
} from 'lucide-react'
import './Services.css'

const offerings = [
  {
    icon: <Cpu size={32} />,
    title: 'WaaS Platform',
    desc: 'Our Worker as a Service platform wraps AI around your existing tools. Unified agent desktop, AI copilot with real-time suggestions, 100% automated QA scoring, and activity capture analytics.',
    features: ['AI copilot overlay', 'Unified agent desktop', '100% automated QA scoring', 'Real-time performance dashboards'],
    link: '/blog/ai-copilots-replacing-traditional-bpo'
  },
  {
    icon: <Code size={32} />,
    title: 'Technology & Development',
    desc: 'Full-stack engineers, DevOps specialists, UI/UX designers, and solution architects — AI-augmented for faster delivery and higher quality output.',
    features: ['Full-stack development', 'DevOps & cloud infrastructure', 'UI/UX design', 'Solution architecture'],
    link: '/blog/hiring-offshore-developers-what-works'
  },
  {
    icon: <FileText size={32} />,
    title: 'Back Office & Clerical',
    desc: 'Medical billing, virtual assistants, bookkeeping, and data entry — all powered by our WaaS platform for 3x throughput and 100% quality coverage.',
    features: ['Medical billing & coding', 'Virtual assistants', 'Bookkeeping & accounting', 'Data entry & processing'],
    link: '/blog/medical-billing-outsourcing-2026-cost-analysis'
  },
  {
    icon: <ClipboardList size={32} />,
    title: 'Project Management',
    desc: 'Scrum masters, BPO consulting, and delivery managers who bring structure and accountability to complex programs.',
    features: ['Scrum masters & agile coaches', 'BPO transition consulting', 'Program management', 'Process optimization'],
    link: '/blog/offshore-team-needs-scrum-master'
  },
  {
    icon: <Headphones size={32} />,
    title: 'Support & Operations',
    desc: 'Help desk, live chat, and customer service teams augmented with AI copilot for faster resolution, smarter routing, and proactive issue detection.',
    features: ['Help desk & IT support', 'Live chat & messaging', 'Customer service', 'Dispatch & operations'],
    link: '/blog/building-247-help-desk-one-third-cost'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Workforce Scaling',
    desc: 'Flexible offshore, nearshore, and onshore staffing models designed to scale your team fast — without the overhead of traditional hiring.',
    features: ['Offshore teams (India)', 'Nearshore teams (LatAm)', 'Rural American staffing', 'Hybrid model design'],
    link: '/blog/offshore-nearshore-onshore-which-model'
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
          <h1 className="page-title">Smart Workforce Solutions, Powered by AI</h1>
          <p className="page-subtitle">
            We don't just provide cheaper labor — our WaaS approach wraps AI around your 
            existing tools to make every worker 3x more productive, with 100% quality coverage.
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
                {item.link && (
                  <Link to={item.link} style={{ color: '#4361ee', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, textDecoration: 'none' }}>
                    Read More <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAAS DIFFERENCE */}
      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">The WaaS Difference</span>
            <h2 className="section-title">Traditional BPO vs. Loop Services</h2>
            <p className="section-subtitle" style={{margin: '0 auto'}}>
              See why companies are switching from seat-based outsourcing to outcome-based WaaS.
            </p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, marginTop: 40}}>
            <div style={{background: '#fff', borderRadius: 16, padding: 32, border: '2px solid #dee2e6'}}>
              <div style={{fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#868e96', marginBottom: 12}}>Traditional BPO</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: 800, marginBottom: 20, color: '#1a1a2e'}}>The Old Way</h3>
              {['Sells seats — pay for bodies, not results', 'Uses your tools as-is, no optimization', '5% of interactions audited manually', '5-7 tasks per person per day', 'No real-time performance visibility'].map((item, i) => (
                <div key={i} style={{display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12, fontSize: '0.95rem', color: '#495057'}}>
                  <span style={{color: '#868e96', flexShrink: 0}}>✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div style={{background: 'linear-gradient(135deg, #4361ee 0%, #3a56d4 100%)', borderRadius: 16, padding: 32, color: '#fff'}}>
              <div style={{fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.7)', marginBottom: 12}}>Loop WaaS</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: 800, marginBottom: 20}}>The WaaS Way</h3>
              {['Sells outcomes — pay for results, not headcount', 'Wraps tools in AI-powered workspace', '100% of interactions AI-scored', '15-20 tasks per person per day', 'Real-time dashboards + full activity capture'].map((item, i) => (
                <div key={i} style={{display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12, fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)'}}>
                  <CheckCircle size={16} style={{flexShrink: 0, marginTop: 2}} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
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
