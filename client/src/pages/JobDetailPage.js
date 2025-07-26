// import React from 'react';
// function JobDetailPage() { return <div>Job Details will appear here.</div>; }
// export default JobDetailPage;
import React from 'react';

function JobDetailPage() {
  // Mock job data (replace with fetched data later)
  const job = {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    location: 'Remote',
    postedDate: 'July 20, 2025',
    salary: '$80,000 - $100,000',
    type: 'Full Time',
    experience: '3+ years',
    description: `We are looking for a Senior Frontend Developer to join our dynamic team and help build scalable, user-friendly applications.`,
    responsibilities: [
      'Develop and maintain web applications using React.js',
      'Collaborate with designers and backend developers',
      'Write clean, maintainable code',
      'Optimize applications for maximum speed'
    ],
    requirements: [
      '3+ years of experience with React.js',
      'Strong proficiency in JavaScript, HTML, CSS',
      'Experience with RESTful APIs',
      'Familiarity with Git and version control'
    ],
    benefits: [
      'Flexible working hours',
      'Health insurance',
      'Paid time off',
      'Remote work options'
    ],
    howToApply: 'Send your resume and portfolio to careers@techinnovators.com',
    contact: {
      email: 'careers@techinnovators.com',
      phone: '+1 (555) 123-4567'
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>{job.title}</h1>
      <p><strong>{job.company}</strong> • {job.location}</p>
      <p>Posted on {job.postedDate}</p>
      <p><strong>Salary:</strong> {job.salary} | <strong>Type:</strong> {job.type} | <strong>Experience:</strong> {job.experience}</p>

      <button
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '15px 0'
        }}
        onClick={() => alert('Apply functionality will be implemented later')}
      >
        Apply Now
      </button>

      <section>
        <h2>Description</h2>
        <p>{job.description}</p>
      </section>

      <section>
        <h2>Responsibilities</h2>
        <ul>
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Requirements</h2>
        <ul>
          {job.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Benefits</h2>
        <ul>
          {job.benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>How to Apply</h2>
        <p>{job.howToApply}</p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> {job.contact.email}</p>
        <p><strong>Phone:</strong> {job.contact.phone}</p>
      </section>
    </div>
  );
}

export default JobDetailPage;
