import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';

const categoryColors = {
  'Logistics': '#e74c3c',
  'Business Strategy': '#4361ee',
  'Operations': '#2ecc71',
  'BPO Strategy': '#f39c12',
  'Technology': '#9b59b6',
  'AI & Automation': '#00b4d8',
  'Project Management': '#e76f51',
  'Back Office': '#2a9d8f',
  'Support & Operations': '#7209b7',
  'Workforce Strategy': '#f4a261',
};

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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: 32,
    maxWidth: 1200,
    margin: '0 auto',
    padding: '60px 24px 80px',
  },
  card: {
    background: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  imagePlaceholder: {
    height: 200,
    background: 'linear-gradient(135deg, #1a1a2e 0%, #4361ee 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.3)',
    fontSize: '3rem',
  },
  cardBody: {
    padding: 24,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
    fontSize: '0.85rem',
  },
  badge: (color) => ({
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: 20,
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#fff',
    background: color || '#4361ee',
  }),
  readTime: {
    color: '#868e96',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#1a1a2e',
    marginBottom: 8,
    lineHeight: 1.3,
  },
  cardExcerpt: {
    fontSize: '0.95rem',
    color: '#495057',
    lineHeight: 1.6,
    flex: 1,
    marginBottom: 16,
  },
  cardLink: {
    color: '#4361ee',
    fontWeight: 600,
    fontSize: '0.9rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
  },
  date: {
    color: '#868e96',
    fontSize: '0.85rem',
  },
};

function Blog() {
  return (
    <div>
      <section style={styles.hero}>
        <div className="container">
          <span style={styles.heroLabel}>Insights & Resources</span>
          <h1 style={styles.heroTitle}>Loop Services Blog</h1>
          <p style={styles.heroSub}>
            Expert perspectives on offshore staffing, outsourcing strategy, and building high-performing distributed teams.
          </p>
        </div>
      </section>

      <section style={{ background: '#f8f9fa' }}>
        <div style={styles.grid}>
          {blogPosts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
              >
                <div style={styles.imagePlaceholder}>
                  📝
                </div>
                <div style={styles.cardBody}>
                  <div style={styles.cardMeta}>
                    <span style={styles.badge(categoryColors[post.category])}>
                      {post.category}
                    </span>
                    <span style={styles.readTime}>{post.readTime}</span>
                  </div>
                  <h3 style={styles.cardTitle}>{post.title}</h3>
                  <p style={styles.cardExcerpt}>{post.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={styles.cardLink}>
                      Read More →
                    </span>
                    <span style={styles.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
