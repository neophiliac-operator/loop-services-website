import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import salaryData from '../data/salaryData';

const fmt = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const pct = (n) => Math.round(n) + '%';

const s = {
  hero: {
    background: 'linear-gradient(135deg, #374898 0%, #2d3d80 100%)',
    padding: '100px 0 60px',
    textAlign: 'center',
    color: '#fff',
  },
  heroLabel: {
    display: 'inline-block', fontSize: '0.8rem', fontWeight: 600,
    textTransform: 'uppercase', letterSpacing: '2px', color: '#EF7E2E', marginBottom: 12,
  },
  heroTitle: { fontSize: '2.5rem', fontWeight: 800, marginBottom: 16 },
  heroSub: { fontSize: '1.1rem', color: '#adb5bd', maxWidth: 640, margin: '0 auto', lineHeight: 1.7 },
  wrapper: { maxWidth: 1100, margin: '0 auto', padding: '48px 24px 80px' },
  // Selector section
  selectors: {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 40,
  },
  selectorCard: {
    background: '#fff', borderRadius: 12, padding: 28, boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  selectorLabel: { fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#868e96', marginBottom: 12 },
  catGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 },
  catBtn: (active) => ({
    padding: '14px 16px', borderRadius: 8, border: active ? '2px solid #EF7E2E' : '2px solid #dee2e6',
    background: active ? '#FFF5ED' : '#fff', cursor: 'pointer', textAlign: 'left',
    transition: 'all 0.2s ease', fontSize: '0.9rem', fontWeight: 600,
    color: active ? '#EF7E2E' : '#343a40',
  }),
  roleBtn: (active) => ({
    padding: '12px 16px', borderRadius: 8, border: active ? '2px solid #EF7E2E' : '2px solid #dee2e6',
    background: active ? '#FFF5ED' : '#fff', cursor: 'pointer', textAlign: 'left',
    transition: 'all 0.2s ease', marginBottom: 8, width: '100%',
  }),
  roleTitle: (active) => ({ fontSize: '0.9rem', fontWeight: 600, color: active ? '#EF7E2E' : '#343a40', marginBottom: 2 }),
  roleDesc: { fontSize: '0.78rem', color: '#868e96', lineHeight: 1.4 },
  // Slider
  sliderSection: {
    background: '#fff', borderRadius: 12, padding: 28, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: 40,
  },
  sliderRow: { display: 'flex', alignItems: 'center', gap: 24 },
  slider: {
    flex: 1, height: 8, appearance: 'none', WebkitAppearance: 'none', background: '#dee2e6',
    borderRadius: 4, outline: 'none', cursor: 'pointer',
  },
  sliderValue: {
    fontSize: '2rem', fontWeight: 800, color: '#EF7E2E', minWidth: 60, textAlign: 'center',
  },
  // Results
  results: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 },
  resultCard: (color) => ({
    background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderTop: `4px solid ${color}`,
  }),
  resultLabel: { fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#868e96', marginBottom: 8 },
  resultAmount: (color) => ({ fontSize: '2.2rem', fontWeight: 800, color, marginBottom: 4 }),
  resultSub: { fontSize: '0.9rem', color: '#868e96' },
  // Chart
  chartSection: {
    background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: 32,
  },
  chartTitle: { fontSize: '1.2rem', fontWeight: 700, color: '#374898', marginBottom: 24 },
  barRow: { display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 },
  barLabel: { width: 160, fontSize: '0.85rem', fontWeight: 600, color: '#343a40', textAlign: 'right', flexShrink: 0 },
  barTrack: { flex: 1, background: '#f1f3f5', borderRadius: 8, height: 40, position: 'relative', overflow: 'hidden' },
  bar: (widthPct, color) => ({
    height: '100%', width: `${widthPct}%`, background: color, borderRadius: 8,
    display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 12,
    transition: 'width 0.6s ease', minWidth: widthPct > 0 ? 80 : 0,
  }),
  barValue: { fontSize: '0.85rem', fontWeight: 700, color: '#fff' },
  // Summary
  summary: {
    background: 'linear-gradient(135deg, #374898 0%, #2d3d80 100%)',
    borderRadius: 12, padding: 40, color: '#fff', textAlign: 'center', marginBottom: 32,
  },
  summaryText: { fontSize: '1.2rem', lineHeight: 1.7, maxWidth: 700, margin: '0 auto 24px' },
  summaryHighlight: { color: '#EF7E2E', fontWeight: 700 },
  // Savings grid
  savingsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 32 },
  savingsCard: {
    background: '#fff', borderRadius: 12, padding: 24, textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  savingsValue: { fontSize: '1.8rem', fontWeight: 800, color: '#2ecc71', marginBottom: 4 },
  savingsLabel: { fontSize: '0.85rem', color: '#868e96', fontWeight: 500 },
  // Sources
  sources: {
    background: '#f8f9fa', borderRadius: 12, padding: 28, marginTop: 40,
  },
  sourcesTitle: { fontSize: '0.9rem', fontWeight: 700, color: '#374898', marginBottom: 12 },
  sourceItem: { fontSize: '0.8rem', color: '#868e96', marginBottom: 6, paddingLeft: 16, position: 'relative' },
  methodology: {
    background: '#FFF5ED', borderRadius: 8, padding: 16, marginBottom: 16, fontSize: '0.85rem', color: '#495057', lineHeight: 1.6,
  },
};

const sliderCSS = `
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none; width: 24px; height: 24px; border-radius: 50%;
    background: #EF7E2E; cursor: pointer; border: 3px solid #fff; box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  }
  input[type=range]::-moz-range-thumb {
    width: 24px; height: 24px; border-radius: 50%;
    background: #EF7E2E; cursor: pointer; border: 3px solid #fff; box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  }
  @media (max-width: 768px) {
    .roi-selectors, .roi-results, .roi-savings-grid { grid-template-columns: 1fr !important; }
  }
`;

function ROICalculator() {
  const [categoryId, setCategoryId] = useState('technology');
  const [roleId, setRoleId] = useState('full_stack_developer');
  const [count, setCount] = useState(5);

  const category = salaryData.categories.find((c) => c.id === categoryId);
  const role = category?.roles.find((r) => r.id === roleId);

  // When category changes, auto-select first role
  const handleCategoryChange = (id) => {
    setCategoryId(id);
    const cat = salaryData.categories.find((c) => c.id === id);
    if (cat && cat.roles.length > 0) setRoleId(cat.roles[0].id);
  };

  const calc = useMemo(() => {
    if (!role) return null;
    const usTotalAnnual = role.us.totalCost * count;
    const indiaTotalAnnual = role.india.totalCost * count;
    const annualSavings = usTotalAnnual - indiaTotalAnnual;
    const monthlySavings = Math.round(annualSavings / 12);
    const savingsPct = (annualSavings / usTotalAnnual) * 100;
    return { usTotalAnnual, indiaTotalAnnual, annualSavings, monthlySavings, savingsPct };
  }, [role, count]);

  const maxCost = calc ? calc.usTotalAnnual : 1;

  return (
    <div>
      <style>{sliderCSS}</style>

      {/* Hero */}
      <section style={s.hero}>
        <div className="container">
          <span style={s.heroLabel}>Interactive Tool</span>
          <h1 style={s.heroTitle}>ROI Calculator</h1>
          <p style={s.heroSub}>
            See exactly how much you can save by hiring through Loop Services.
            Real salary data, transparent methodology, no guesswork.
          </p>
        </div>
      </section>

      <section style={{ background: '#f8f9fa' }}>
        <div style={s.wrapper}>

          {/* Category & Role Selectors */}
          <div style={s.selectors} className="roi-selectors">
            {/* Categories */}
            <div style={s.selectorCard}>
              <div style={s.selectorLabel}>1. Choose a Category</div>
              <div style={s.catGrid}>
                {salaryData.categories.map((cat) => (
                  <button
                    key={cat.id}
                    style={s.catBtn(categoryId === cat.id)}
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    <span style={{ marginRight: 8 }}>{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Roles */}
            <div style={s.selectorCard}>
              <div style={s.selectorLabel}>2. Select a Role</div>
              <select
                value={roleId}
                onChange={(e) => setRoleId(e.target.value)}
                style={{
                  width: '100%', padding: '14px 16px', borderRadius: 8,
                  border: '2px solid #dee2e6', fontSize: '0.95rem', fontWeight: 600,
                  color: '#343a40', background: '#fff', cursor: 'pointer',
                  appearance: 'auto', marginBottom: 12,
                }}
              >
                {category?.roles.map((r) => (
                  <option key={r.id} value={r.id}>{r.title}</option>
                ))}
              </select>
              {role && (
                <div style={{
                  background: '#f8f9fa', borderRadius: 8, padding: '14px 16px',
                  fontSize: '0.85rem', color: '#495057', lineHeight: 1.5,
                }}>
                  <div style={{ fontWeight: 700, color: '#374898', marginBottom: 4 }}>{role.title}</div>
                  <div>{role.description}</div>
                  <div style={{ marginTop: 8, fontSize: '0.78rem', color: '#868e96' }}>
                    US Base: {fmt(role.us.baseSalary)} · India Base: {fmt(role.india.baseSalary)}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Employee Count Slider */}
          <div style={s.sliderSection}>
            <div style={s.selectorLabel}>3. Number of Employees</div>
            <div style={s.sliderRow}>
              <span style={{ fontSize: '0.85rem', color: '#868e96' }}>1</span>
              <input
                type="range"
                min={1}
                max={50}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                style={s.slider}
              />
              <span style={{ fontSize: '0.85rem', color: '#868e96' }}>50</span>
              <div style={s.sliderValue}>{count}</div>
            </div>
          </div>

          {calc && role && (
            <>
              {/* Cost Comparison Cards */}
              <div style={s.results} className="roi-results">
                <div style={s.resultCard('#e74c3c')}>
                  <div style={s.resultLabel}>🇺🇸 US Total Cost (Annual)</div>
                  <div style={s.resultAmount('#e74c3c')}>{fmt(calc.usTotalAnnual)}</div>
                  <div style={s.resultSub}>
                    {fmt(role.us.totalCost)}/employee × {count} employees
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#adb5bd', marginTop: 4 }}>
                    Includes salary + benefits + overhead (32%)
                  </div>
                </div>
                <div style={s.resultCard('#2ecc71')}>
                  <div style={s.resultLabel}>🇮🇳 India via Loop (Annual)</div>
                  <div style={s.resultAmount('#2ecc71')}>{fmt(calc.indiaTotalAnnual)}</div>
                  <div style={s.resultSub}>
                    {fmt(role.india.totalCost)}/employee × {count} employees
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#adb5bd', marginTop: 4 }}>
                    All-in: salary + Loop management + infrastructure
                  </div>
                </div>
              </div>

              {/* Savings Cards */}
              <div style={s.savingsGrid} className="roi-savings-grid">
                <div style={s.savingsCard}>
                  <div style={s.savingsValue}>{fmt(calc.annualSavings)}</div>
                  <div style={s.savingsLabel}>Annual Savings</div>
                </div>
                <div style={s.savingsCard}>
                  <div style={s.savingsValue}>{fmt(calc.monthlySavings)}</div>
                  <div style={s.savingsLabel}>Monthly Savings</div>
                </div>
                <div style={s.savingsCard}>
                  <div style={{ ...s.savingsValue, color: '#EF7E2E' }}>{pct(calc.savingsPct)}</div>
                  <div style={s.savingsLabel}>Cost Reduction</div>
                </div>
              </div>

              {/* Bar Chart */}
              <div style={s.chartSection}>
                <h3 style={s.chartTitle}>Side-by-Side Cost Comparison</h3>
                <div style={s.barRow}>
                  <div style={s.barLabel}>🇺🇸 US In-House</div>
                  <div style={s.barTrack}>
                    <div style={s.bar(100, '#e74c3c')}>
                      <span style={s.barValue}>{fmt(calc.usTotalAnnual)}</span>
                    </div>
                  </div>
                </div>
                <div style={s.barRow}>
                  <div style={s.barLabel}>🇮🇳 India via Loop</div>
                  <div style={s.barTrack}>
                    <div style={s.bar((calc.indiaTotalAnnual / maxCost) * 100, '#2ecc71')}>
                      <span style={s.barValue}>{fmt(calc.indiaTotalAnnual)}</span>
                    </div>
                  </div>
                </div>
                <div style={s.barRow}>
                  <div style={s.barLabel}>💰 Your Savings</div>
                  <div style={s.barTrack}>
                    <div style={s.bar((calc.annualSavings / maxCost) * 100, '#EF7E2E')}>
                      <span style={s.barValue}>{fmt(calc.annualSavings)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Card */}
              <div style={s.summary}>
                <p style={s.summaryText}>
                  By hiring <span style={s.summaryHighlight}>{count} {role.title}{count > 1 ? 's' : ''}</span> through Loop Services,
                  you save <span style={s.summaryHighlight}>{fmt(calc.annualSavings)} annually</span> — a{' '}
                  <span style={s.summaryHighlight}>{pct(calc.savingsPct)}</span> cost reduction compared to US in-house hiring.
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/contact" className="btn btn-primary btn-lg">
                    Get a Custom Quote
                  </Link>
                  <Link to="/services" className="btn btn-outline btn-lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                    View All Services
                  </Link>
                </div>
              </div>

              {/* Methodology & Sources */}
              <div style={s.sources}>
                <div style={s.methodology}>
                  <strong>📊 Methodology:</strong> {salaryData.meta.methodology}
                  {' '}Exchange rate: ₹{salaryData.meta.exchangeRate} = $1 USD. Data last updated: {salaryData.meta.dataLastUpdated}.
                </div>
                <div style={s.sourcesTitle}>📚 Data Sources</div>
                {salaryData.meta.sources.map((source, i) => (
                  <div key={i} style={s.sourceItem}>• {source}</div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default ROICalculator;
