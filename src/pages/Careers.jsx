import { useState } from 'react'
import { MapPin, Clock, Building2, ChevronDown, ChevronUp, Upload, CheckCircle, Send } from 'lucide-react'
import jobListings from '../data/jobListings.json'
import './Careers.css'

export default function Careers() {
  const [expanded, setExpanded] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [selectedJob, setSelectedJob] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', coverLetter: '', position: '', resumeName: ''
  })

  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle)
    setForm(prev => ({ ...prev, position: jobTitle }))
    setShowForm(true)
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setForm(prev => ({ ...prev, resumeName: file.name }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const applications = JSON.parse(localStorage.getItem('loop-applications') || '[]')
    applications.push({
      ...form,
      submittedAt: new Date().toISOString()
    })
    localStorage.setItem('loop-applications', JSON.stringify(applications))
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', coverLetter: '', position: '', resumeName: '' })
  }

  return (
    <div className="careers-page">
      <section className="page-header">
        <div className="container">
          <span className="section-label">Careers</span>
          <h1 className="page-title">Join the Loop Team</h1>
          <p className="page-subtitle">
            We're building the future of logistics support. If you're passionate about 
            operational excellence, we want to hear from you.
          </p>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{marginBottom: '32px'}}>Open Positions</h2>
          <div className="jobs-list">
            {jobListings.map(job => (
              <div key={job.id} className={`job-card ${expanded === job.id ? 'expanded' : ''}`}>
                <div className="job-header" onClick={() => setExpanded(expanded === job.id ? null : job.id)}>
                  <div className="job-info">
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span><MapPin size={14} /> {job.location}</span>
                      <span><Clock size={14} /> {job.type}</span>
                      <span><Building2 size={14} /> {job.department}</span>
                    </div>
                  </div>
                  <button className="job-toggle">
                    {expanded === job.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                {expanded === job.id && (
                  <div className="job-details">
                    <p className="job-desc">{job.description}</p>
                    <h4>Requirements</h4>
                    <ul className="job-requirements">
                      {job.requirements.map((req, i) => (
                        <li key={i}><CheckCircle size={14} /> {req}</li>
                      ))}
                    </ul>
                    <button className="btn btn-primary" onClick={() => handleApply(job.title)}>
                      Apply for This Role
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      {showForm && (
        <section className="section form-section" id="application-form">
          <div className="container">
            <div className="form-wrapper">
              {submitted ? (
                <div className="form-success">
                  <CheckCircle size={48} />
                  <h3>Application Submitted!</h3>
                  <p>Thank you for your interest. We'll review your application and get back to you soon.</p>
                  <button className="btn btn-primary" onClick={() => { setSubmitted(false); setShowForm(false) }}>
                    Back to Listings
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="section-title">Apply for: {selectedJob}</h2>
                  <p className="section-subtitle" style={{marginBottom: '32px'}}>
                    Fill out the form below. We'll review your application within 3 business days.
                  </p>
                  <form onSubmit={handleSubmit} className="application-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="+1 (555) 000-0000" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="position">Position Applied For</label>
                        <input type="text" id="position" name="position" value={form.position} onChange={handleChange} readOnly />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="resume">Resume / CV *</label>
                      <div className="file-upload">
                        <input type="file" id="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
                        <div className="file-upload-label">
                          <Upload size={20} />
                          <span>{form.resumeName || 'Click to upload your resume (PDF, DOC, DOCX)'}</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="coverLetter">Cover Letter</label>
                      <textarea id="coverLetter" name="coverLetter" value={form.coverLetter} onChange={handleChange} rows="5" placeholder="Tell us why you'd be great for this role..." />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit Application <Send size={16} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
