import React, { useState } from 'react';
import { contactAPI } from '../utils/api';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      await contactAPI.send(form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="page contact-page">
      <div className="page-header">
        <span className="section-tag">Get In Touch</span>
        <h1 className="page-title">Contact Me</h1>
        <p className="page-subtitle">Have a project in mind? Let's talk about it.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Let's build something great</h2>
          <p>
            I'm always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
          </p>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:harshkumarpandit2004@gmail.com">harshkumarpandit2004@gmail.com</a>
              </div>
            </div>
            <div className="contact-method">
              <div className="method-icon">📱</div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+919279969020">+91 9279969020</a>
              </div>
            </div>
            <div className="contact-method">
              <div className="method-icon">💼</div>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/harsh-kumar-pandit" target="_blank" rel="noreferrer">linkedin.com/in/harsh-kumar-pandit</a>
              </div>
            </div>
            <div className="contact-method">
              <div className="method-icon">🐙</div>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/harsh-kumar-pandit" target="_blank" rel="noreferrer">github.com/harsh-kumar-pandit</a>
              </div>
            </div>
          </div>
          <div className="response-time">
            <span className="pulse-dot" />
            Usually responds within 24 hours
          </div>
        </div>

        <div className="contact-form-wrapper">
          {status === 'success' ? (
            <div className="success-state">
              <div className="success-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
              <button className="btn btn-outline" onClick={() => setStatus(null)}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="form-input form-textarea"
                />
              </div>
              {error && <div className="form-error">{error}</div>}
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
