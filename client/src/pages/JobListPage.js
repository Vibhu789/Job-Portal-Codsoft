// import React from 'react';
// function JobListPage() { return <div>Job Listings will appear here.</div>; }
// export default JobListPage;
import React, { useState } from 'react';

function JobListPage() {
  // Mock job data (replace with API later)
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      location: 'Remote',
      salary: '$80,000 - $100,000',
      type: 'Full Time',
      postedDate: 'July 20, 2025',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'CodeWorks',
      location: 'India',
      salary: '90,000 - 110,000',
      type: 'Full Time',
      postedDate: 'July 18, 2025',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Labs',
      location: 'Remote',
      salary: '$60,000 - $80,000',
      type: 'Contract',
      postedDate: 'July 15, 2025',
    },
    {
      id: 4,
      title: 'Sales',
      company: 'os',
      location: 'hybrid',
      salary: '40,000 - 60,000',
      type: 'Full Time',
      postedDate: 'July 28, 2025',
    },
    {
      id: 5,
      title: 'Animation',
      company: 'Creative Labs',
      location: 'Remote',
      salary: '$40,000 - $80,000',
      type: 'Contract',
      postedDate: 'July 30, 2025',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Available Job Listings</h1>

      <input
        type="text"
        placeholder="Search by title, company, or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />

      {filteredJobs.length === 0 ? (
        <p>No jobs found matching your search.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredJobs.map((job) => (
            <li
              key={job.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              }}
            >
              <h2 style={{ margin: '0 0 5px 0' }}>{job.title}</h2>
              <p style={{ margin: '0 0 5px 0' }}>
                <strong>{job.company}</strong> • {job.location}
              </p>
              <p style={{ margin: '0 0 5px 0' }}>
                <strong>Salary:</strong> {job.salary} | <strong>Type:</strong> {job.type}
              </p>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#555' }}>
                Posted on {job.postedDate}
              </p>
              <button
                style={{
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => alert('View Job Details functionality will be added later')}
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



export default JobListPage;


