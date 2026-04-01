import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cpu, Monitor, BarChart3, Shield, Zap, Globe, Truck, Heart, FileText, DollarSign, Headphones } from 'lucide-react';

const s = {
  hero: {
    background: 'linear-gradient(135deg, #374898 0%, #2d3d80 100%)',
    padding: '120px 0 80px',
    textAlign: 'center',
    color: '#fff',
  },
  heroLabel: {
    display: 'inline-block', fontSize: '0.8rem', fontWeight: 600,
    textTransform: 'uppercase', letterSpacing: '2px', color: '#EF7E2E', marginBottom: 12,
  },
  heroTitle: { fontSize: '2.8rem', fontWeight: 800, marginBottom: 16, lineHeight: 1.2 },
  accent: { color: '#EF7E2E' },
  heroSub: { fontSize: '1.15rem', color: '#adb5bd', maxWidth: 680, margin: '0 auto', lineHeight: 1.7 },
  container: { maxWidth: 1100, margin: '0 auto', padding: '0 24px' },
  section: { padding: '80px 0' },
  sectionAlt: { padding: '80px 0', background: '#f8f9fa' },
  sectionDark: { padding: '80px 0', background: 'linear-gradient(135deg, #374898 0%, #2d3d80 100%)', color: '#fff' },
  sectionLabel: {
    display: 'inline-block', fontSize: '0.8rem', fontWeight: 600,
    textTransform: 'uppercase', letterSpacing: '2px', color: '#EF7E2E', marginBottom: 12,
  },
  sectionTitle: { fontSize: '2rem', fontWeight: 800, marginBottom: 16, color: '#374898' },
  sectionTitleWhite: { fontSize: '2rem', fontWeight: 800, marginBottom: 16, color: '#fff' },
  sectionSub: { fontSize: '1.05rem', color: '#6c757d', maxWidth: 640, lineHeight: 1.7, marginBottom: 40 },
  sectionSubWhite: { fontSize: '1.05rem', color: '#adb5bd', maxWidth: 640, lineHeight: 1.7, marginBottom: 40 },
  center: { textAlign: 'center' },
  centerSub: { textAlign: 'center', margin: '0 auto' },

  // Problem section
  problemGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 40 },
  problemCard: {
    background: '#fff', borderRadius: 12, padding: 28, boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    borderLeft: '4px solid #e74c3c',
  },
  problemTitle: { fontSize: '1.1rem', fontWeight: 700, color: '#374898', marginBottom: 8 },
  problemDesc: { fontSize: '0.95rem', color: '#6c757d', lineHeight: 1.6 },

  // Comparison cards
  compGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, marginTop: 40 },
  compCard: (isWaas) => ({
    borderRadius: 16, padding: 32,
    background: isWaas ? 'linear-gradient(135deg, #EF7E2E 0%, #d96b1f 100%)' : '#fff',
    color: isWaas ? '#fff' : '#374898',
    boxShadow: isWaas ? '0 8px 32px rgba(67,97,238,0.3)' : '0 4px 12px rgba(0,0,0,0.08)',
    border: isWaas ? 'none' : '2px solid #dee2e6',
    position: 'relative',
    overflow: 'hidden',
  }),
  compBadge: (isWaas) => ({
    display: 'inline-block', fontSize: '0.7rem', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '2px',
    color: isWaas ? 'rgba(255,255,255,0.7)' : '#868e96',
    marginBottom: 12,
  }),
  compTitle: { fontSize: '1.4rem', fontWeight: 800, marginBottom: 20 },
  compItem: (isWaas) => ({
    display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14,
    fontSize: '0.95rem', lineHeight: 1.5,
    color: isWaas ? 'rgba(255,255,255,0.9)' : '#495057',
  }),
  compIcon: (isWaas) => ({
    flexShrink: 0, marginTop: 2,
    color: isWaas ? '#fff' : '#868e96',
  }),

  // How it works
  stepsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginTop: 40 },
  stepCard: {
    background: '#fff', borderRadius: 12, padding: 28, textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  stepNum: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 48, height: 48, borderRadius: '50%', background: '#FFF5ED',
    color: '#EF7E2E', fontWeight: 800, fontSize: '1.2rem', marginBottom: 16,
  },
  stepTitle: { fontSize: '1.05rem', fontWeight: 700, color: '#374898', marginBottom: 8 },
  stepDesc: { fontSize: '0.9rem', color: '#6c757d', lineHeight: 1.6 },

  // Metrics
  metricsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginTop: 40 },
  metricCard: {
    textAlign: 'center', padding: 28,
    background: 'rgba(255,255,255,0.08)', borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.12)',
  },
  metricValue: { fontSize: '2.4rem', fontWeight: 800, color: '#EF7E2E', marginBottom: 4 },
  metricLabel: { fontSize: '0.9rem', color: '#adb5bd', fontWeight: 500 },

  // Tool-agnostic
  toolGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16, marginTop: 32 },
  toolTag: {
    background: '#FFF5ED', color: '#EF7E2E', borderRadius: 8, padding: '12px 16px',
    fontWeight: 600, fontSize: '0.9rem', textAlign: 'center',
  },

  // Industries
  industryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginTop: 40 },
  industryCard: (isPrimary) => ({
    background: '#fff', borderRadius: 12, padding: 24, textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    border: isPrimary ? '2px solid #EF7E2E' : '2px solid transparent',
  }),
  industryIcon: { color: '#EF7E2E', marginBottom: 12 },
  industryTitle: { fontSize: '1rem', fontWeight: 700, color: '#374898', marginBottom: 4 },
  industryTag: { fontSize: '0.75rem', color: '#EF7E2E', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 },

  // CTA
  cta: {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #EF7E2E 0%, #d96b1f 100%)',
    textAlign: 'center', color: '#fff',
  },
  ctaTitle: { fontSize: '2rem', fontWeight: 800, marginBottom: 16 },
  ctaSub: { fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 540, margin: '0 auto 32px', lineHeight: 1.7 },
  ctaActions: { display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' },
  btnWhite: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: '1rem',
    background: '#fff', color: '#EF7E2E', textDecoration: 'none',
    border: 'none', cursor: 'pointer',
  },
  btnOutlineWhite: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: '1rem',
    background: 'transparent', color: '#fff', textDecoration: 'none',
    border: '2px solid rgba(255,255,255,0.5)', cursor: 'pointer',
  },
  heroActions: { display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 },
};

const problems = [
  { title: 'Tool Overload', desc: 'Your team toggles between 6-10 different apps — TMS, email, load boards, CRM, spreadsheets. Every task means copy-pasting data between systems.' },
  { title: 'Broken Workflows', desc: 'Traditional BPOs just put cheaper people in front of the same broken workflows. The inefficiency stays — you just pay less for it.' },
  { title: 'Zero Visibility', desc: 'Only 5% of interactions get audited. You have no idea what\'s actually happening across your team, and quality issues slip through undetected.' },
];

const traditionalItems = [
  'Sells seats — you pay for bodies, not results',
  'Uses your tools as-is, no optimization',
  'Only 5% of interactions audited manually',
  '5-7 tasks per person per day',
  'No real-time visibility into performance',
  'Quality issues caught after the damage is done',
];

const waasItems = [
  'Sells outcomes — pay for results, not headcount',
  'Wraps your tools in an AI-powered workspace',
  '100% of interactions AI-scored automatically',
  '15-20 tasks per person per day',
  'Real-time dashboards with full activity capture',
  'AI fraud detection + proactive quality alerts',
];

const howSteps = [
  { num: '1', title: 'We Embed Your Tools', desc: 'Your existing TMS, CRM, email, and load boards get embedded into our unified agent desktop. No migration, no disruption.' },
  { num: '2', title: 'AI Copilot Overlays', desc: 'Real-time suggestions, auto-draft emails, delay predictions, and smart routing. Your team works faster with AI whispering in their ear.' },
  { num: '3', title: '100% Automated QA', desc: 'Every single interaction is scored by AI — not 5%, all of them. Fraud detection, compliance checks, quality scoring in real-time.' },
  { num: '4', title: 'Real-Time Dashboards', desc: 'Customer-facing performance reports, KPI dashboards, and activity analytics. Full visibility into every action, every metric.' },
];

const metrics = [
  { value: '3x', label: 'Productivity Gain' },
  { value: '100%', label: 'QA Coverage' },
  { value: '60-70%', label: 'Cost Reduction' },
  { value: '<30', label: 'Days to Deploy' },
];

const tools = ['Any TMS', 'Any CRM', 'Email Platforms', 'Load Boards', 'ERP Systems', 'Spreadsheets', 'Chat Tools', 'Custom Apps'];

const industries = [
  { icon: <Truck size={28} />, title: 'Freight & Logistics', primary: true, tag: 'Beachhead Market' },
  { icon: <Heart size={28} />, title: 'Healthcare Admin', primary: false },
  { icon: <FileText size={28} />, title: 'Insurance Claims', primary: false },
  { icon: <DollarSign size={28} />, title: 'Financial Operations', primary: false },
  { icon: <Headphones size={28} />, title: 'Customer Support', primary: false },
];

export default function WaaS() {
  return (
    <div>
      {/* HERO */}
      <section style={s.hero}>
        <div style={s.container}>
          <span style={s.heroLabel}>The WaaS Platform</span>
          <h1 style={s.heroTitle}>
            Worker as a Service —{' '}
            <span style={s.accent}>AI-Augmented Teams, Not Just Cheaper Labor</span>
          </h1>
          <p style={s.heroSub}>
            Traditional BPOs sell seats. We sell outcomes. Our WaaS platform wraps AI around your
            existing tools to make every worker 3x more productive — with 100% quality coverage
            and full visibility.
          </p>
          <div style={s.heroActions}>
            <Link to="/roi-calculator" style={s.btnWhite}>
              See Your Savings <ArrowRight size={16} />
            </Link>
            <Link to="/contact" style={s.btnOutlineWhite}>
              Talk to Our Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.center}>
            <span style={s.sectionLabel}>The Problem</span>
            <h2 style={s.sectionTitle}>Outsourcing Is Broken</h2>
            <p style={{...s.sectionSub, ...s.centerSub}}>
              Companies outsource to save money, but they end up paying for the same
              inefficiencies — just with cheaper people.
            </p>
          </div>
          <div style={s.problemGrid}>
            {problems.map((p, i) => (
              <div key={i} style={s.problemCard}>
                <div style={s.problemTitle}>{p.title}</div>
                <div style={s.problemDesc}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRADITIONAL BPO vs WAAS */}
      <section style={s.sectionAlt}>
        <div style={s.container}>
          <div style={s.center}>
            <span style={s.sectionLabel}>The Solution</span>
            <h2 style={s.sectionTitle}>Traditional BPO vs. WaaS</h2>
            <p style={{...s.sectionSub, ...s.centerSub}}>
              WaaS doesn't just give you cheaper workers — it makes every worker dramatically more effective.
            </p>
          </div>
          <div style={s.compGrid}>
            {/* Traditional */}
            <div style={s.compCard(false)}>
              <div style={s.compBadge(false)}>Traditional BPO</div>
              <div style={s.compTitle}>The Old Way</div>
              {traditionalItems.map((item, i) => (
                <div key={i} style={s.compItem(false)}>
                  <span style={s.compIcon(false)}>✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {/* WaaS */}
            <div style={s.compCard(true)}>
              <div style={s.compBadge(true)}>Loop WaaS</div>
              <div style={s.compTitle}>The WaaS Way</div>
              {waasItems.map((item, i) => (
                <div key={i} style={s.compItem(true)}>
                  <CheckCircle size={16} style={s.compIcon(true)} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.center}>
            <span style={s.sectionLabel}>How It Works</span>
            <h2 style={s.sectionTitle}>Four Layers. One Platform.</h2>
            <p style={{...s.sectionSub, ...s.centerSub}}>
              WaaS isn't a new tool — it's an AI layer that wraps around everything you already use.
            </p>
          </div>
          <div style={s.stepsGrid}>
            {howSteps.map((step, i) => (
              <div key={i} style={s.stepCard}>
                <div style={s.stepNum}>{step.num}</div>
                <div style={s.stepTitle}>{step.title}</div>
                <div style={s.stepDesc}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY METRICS */}
      <section style={s.sectionDark}>
        <div style={s.container}>
          <div style={s.center}>
            <span style={s.sectionLabel}>By The Numbers</span>
            <h2 style={s.sectionTitleWhite}>Results That Speak for Themselves</h2>
            <p style={{...s.sectionSubWhite, ...s.centerSub}}>
              WaaS doesn't promise marginal improvements. It transforms how outsourced work gets done.
            </p>
          </div>
          <div style={s.metricsGrid}>
            {metrics.map((m, i) => (
              <div key={i} style={s.metricCard}>
                <div style={s.metricValue}>{m.value}</div>
                <div style={s.metricLabel}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOL-AGNOSTIC */}
      <section style={s.sectionAlt}>
        <div style={s.container}>
          <div style={s.center}>
            <span style={s.sectionLabel}>Platform Compatibility</span>
            <h2 style={s.sectionTitle}>Tool-Agnostic by Design</h2>
            <p style={{...s.sectionSub, ...s.centerSub}}>
              WaaS doesn't replace your tools — it supercharges them. Our unified desktop embeds
              whatever your team already uses. No migration. No disruption.
            </p>
          </div>
          <div style={s.toolGrid}>
            {tools.map((t, i) => (
              <div key={i} style={s.toolTag}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.center}>
            <span style={s.sectionLabel}>Industries</span>
            <h2 style={s.sectionTitle}>WaaS Works Anywhere You Outsource Knowledge Work</h2>
            <p style={{...s.sectionSub, ...s.centerSub}}>
              We're starting with freight and logistics — but the platform applies anywhere
              companies outsource repetitive, tool-heavy knowledge work.
            </p>
          </div>
          <div style={s.industryGrid}>
            {industries.map((ind, i) => (
              <div key={i} style={s.industryCard(ind.primary)}>
                <div style={s.industryIcon}>{ind.icon}</div>
                <div style={s.industryTitle}>{ind.title}</div>
                {ind.tag && <div style={s.industryTag}>{ind.tag}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={s.cta}>
        <div style={s.container}>
          <h2 style={s.ctaTitle}>Ready to See WaaS in Action?</h2>
          <p style={s.ctaSub}>
            Calculate your potential savings or talk to our team about how WaaS
            can transform your outsourced operations.
          </p>
          <div style={s.ctaActions}>
            <Link to="/roi-calculator" style={s.btnWhite}>
              See Your Savings <ArrowRight size={16} />
            </Link>
            <Link to="/contact" style={s.btnOutlineWhite}>
              Talk to Our Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
