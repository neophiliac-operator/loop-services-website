import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #374898 0%, #2d3d80 100%)',
    padding: '100px 0 50px',
    color: '#fff',
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    color: '#EF7E2E',
    fontWeight: 600,
    fontSize: '0.9rem',
    marginBottom: 24,
    textDecoration: 'none',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: 20,
    maxWidth: 800,
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
    fontSize: '0.9rem',
    color: '#adb5bd',
  },
  badge: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: 20,
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#fff',
    background: '#EF7E2E',
  },
  article: {
    maxWidth: 780,
    margin: '0 auto',
    padding: '48px 24px 80px',
    lineHeight: 1.8,
    fontSize: '1.05rem',
    color: '#343a40',
  },
  notFound: {
    textAlign: 'center',
    padding: '120px 24px',
  },
  cta: {
    background: '#f8f9fa',
    borderRadius: 12,
    padding: '40px',
    textAlign: 'center',
    marginTop: 48,
  },
  ctaTitle: {
    fontSize: '1.4rem',
    fontWeight: 700,
    color: '#374898',
    marginBottom: 12,
  },
  ctaText: {
    color: '#868e96',
    marginBottom: 20,
    fontSize: '1rem',
  },
};

const articleCSS = `
  .blog-article h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #374898;
    margin: 32px 0 12px;
  }
  .blog-article p {
    margin-bottom: 16px;
  }
  .blog-article ul, .blog-article ol {
    margin: 12px 0 20px 24px;
    list-style: disc;
  }
  .blog-article li {
    margin-bottom: 8px;
    list-style: disc;
  }
  .blog-article strong {
    color: #374898;
  }
`;

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div style={styles.notFound}>
        <h1 style={{ fontSize: '2rem', color: '#374898', marginBottom: 16 }}>Post Not Found</h1>
        <p style={{ color: '#868e96', marginBottom: 24 }}>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="btn btn-primary">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div>
      <style>{articleCSS}</style>
      <section style={styles.hero}>
        <div className="container">
          <Link to="/blog" style={styles.backLink}>← Back to Blog</Link>
          <h1 style={styles.title}>{post.title}</h1>
          <div style={styles.meta}>
            <span style={styles.badge}>{post.category}</span>
            <span>{post.author}</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <article style={styles.article} className="blog-article" dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className="container" style={{ paddingBottom: 80 }}>
        <div style={styles.cta}>
          <h3 style={styles.ctaTitle}>Ready to explore offshore staffing?</h3>
          <p style={styles.ctaText}>See exactly how much you could save with our interactive ROI Calculator.</p>
          <Link to="/roi-calculator" className="btn btn-primary" style={{ marginRight: 12 }}>
            Try ROI Calculator
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
