import { useState } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    padding: '100px 0 60px',
    textAlign: 'center',
    color: '#fff',
  },
  heroLabel: {
    display: 'inline-block',
    fontSize: '0.8rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#4361ee',
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 800,
    marginBottom: 16,
  },
  heroSub: {
    fontSize: '1.1rem',
    color: '#adb5bd',
    maxWidth: 600,
    margin: '0 auto',
    lineHeight: 1.7,
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 380px',
    gap: 48,
    maxWidth: 1100,
    margin: '0 auto',
    padding: '60px 24px 80px',
  },
  form: {
    background: '#fff',
    borderRadius: 12,
    padding: 40,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  formTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#1a1a2e',
    marginBottom: 24,
  },
  fieldGroup: {
    marginBottom: 20,
  },
  label: {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#495057',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1.5px solid #dee2e6',
    borderRadius: 8,
    fontSize: '0.95rem',
    transition: 'border-color 0.3s ease',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    border: '1.5px solid #dee2e6',
    borderRadius: 8,
    fontSize: '0.95rem',
    minHeight: 120,
    resize: 'vertical',
    outline: 'none',
  },
  select: {
    width: '100%',
    padding: '12px 16px',
    border: '1.5px solid #dee2e6',
    borderRadius: 8,
    fontSize: '0.95rem',
    background: '#fff',
    outline: 'none',
    cursor: 'pointer',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  infoCard: {
    background: '#fff',
    borderRadius: 12,
    padding: 32,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  infoTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#1a1a2e',
    marginBottom: 20,
  },
  infoItem: {
    display: 'flex',
    gap: 12,
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  infoIcon: {
    fontSize: '1.2rem',
    marginTop: 2,
    flexShrink: 0,
  },
  infoLabel: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#868e96',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: '0.95rem',
    color: '#343a40',
    lineHeight: 1.5,
  },
  ctaCard: {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    borderRadius: 12,
    padding: 32,
    color: '#fff',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '1.15rem',
    fontWeight: 700,
    marginBottom: 12,
  },
  ctaText: {
    fontSize: '0.9rem',
    color: '#adb5bd',
    marginBottom: 20,
    lineHeight: 1.6,
  },
  successMessage: {
    background: '#d4edda',
    border: '1px solid #c3e6cb',
    color: '#155724',
    padding: '16px 20px',
    borderRadius: 8,
    marginBottom: 20,
    fontSize: '0.95rem',
  },
};

const responsiveCSS = `
  @media (max-width: 860px) {
    .contact-content {
      grid-template-columns: 1fr !important;
    }
  }
`;

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', service: '', message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <style>{responsiveCSS}</style>
      <section style={styles.hero}>
        <div className="container">
          <span style={styles.heroLabel}>Get In Touch</span>
          <h1 style={styles.heroTitle}>Contact Us</h1>
          <p style={styles.heroSub}>
            Ready to transform your workforce? Let's discuss how Loop Services can help you build high-performing offshore teams.
          </p>
        </div>
      </section>

      <section style={{ background: '#f8f9fa' }}>
        <div style={styles.content} className="contact-content">
          {/* Form */}
          <div style={styles.form}>
            <h2 style={styles.formTitle}>Send Us a Message</h2>

            {submitted && (
              <div style={styles.successMessage}>
                ✅ Thank you! Your message has been received. We'll get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={styles.row}>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Full Name *</label>
                  <input
                    style={styles.input}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Email Address *</label>
                  <input
                    style={styles.input}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div style={styles.row}>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Company</label>
                  <input
                    style={styles.input}
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Phone Number</label>
                  <input
                    style={styles.input}
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Service Interest</label>
                <select
                  style={styles.select}
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service...</option>
                  <option value="technology">Technology & Development Teams</option>
                  <option value="logistics">Logistics & Freight Support</option>
                  <option value="support">Support & Operations</option>
                  <option value="management">Project Management</option>
                  <option value="bpo">BPO Consulting</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Message *</label>
                <textarea
                  style={styles.textarea}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your needs — team size, roles, timeline..."
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Schedule a Consultation
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div style={styles.sidebar}>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Contact Information</h3>

              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>📧</span>
                <div>
                  <div style={styles.infoLabel}>Email</div>
                  <div style={styles.infoValue}>info@loopservices.net</div>
                </div>
              </div>

              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>📞</span>
                <div>
                  <div style={styles.infoLabel}>Phone</div>
                  <div style={styles.infoValue}>+1 (555) 123-4567</div>
                </div>
              </div>

              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>📍</span>
                <div>
                  <div style={styles.infoLabel}>Office</div>
                  <div style={styles.infoValue}>Atlanta, Georgia<br />United States</div>
                </div>
              </div>

              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>🕐</span>
                <div>
                  <div style={styles.infoLabel}>Business Hours</div>
                  <div style={styles.infoValue}>Mon - Fri: 9:00 AM - 6:00 PM EST</div>
                </div>
              </div>
            </div>

            <div style={styles.ctaCard}>
              <h3 style={styles.ctaTitle}>Not sure where to start?</h3>
              <p style={styles.ctaText}>
                Try our ROI Calculator to see exactly how much you could save with offshore teams.
              </p>
              <Link to="/roi-calculator" className="btn btn-white" style={{ width: '100%', justifyContent: 'center' }}>
                Try ROI Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
