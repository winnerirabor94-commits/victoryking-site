import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Briefcase, MessageSquare } from 'lucide-react';

const initialServices = [
  { id: 1, provider: 'Chinedu Eze', skill: 'Mathematics Tutor', description: 'I can help you understand calculus and algebra for MTH101 and MTH102.', rate: '₦2,000 / week' },
  { id: 2, provider: 'Grace Okon', skill: 'Essay Proofreading', description: 'I will proofread and format your term papers and assignments.', rate: '₦1,000 / paper' },
  { id: 3, provider: 'David Mark', skill: 'Programming Mentor', description: 'Need help with your Java or Python assignments? I can guide you.', rate: '₦3,000 / assignment' },
];

const Services = () => {
  const { user } = useAuth();
  const [services] = useState(initialServices);

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1><Briefcase style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Student Services & Help</h1>
          <p>Get help from peers or offer your skills to assist other students.</p>
        </div>
        {user?.role === 'student' && (
          <button className="btn">
            Offer a Service
          </button>
        )}
      </div>

      <div className="grid">
        {services.map(service => (
          <div key={service.id} className="card">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{service.skill}</h3>
            <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>By: {service.provider}</p>
            <p style={{ marginBottom: '1rem', color: '#555' }}>{service.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--success)' }}>{service.rate}</span>
              <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                <MessageSquare size={16} style={{ marginRight: '0.25rem' }} /> Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
