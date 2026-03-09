import React from 'react';
import { Users, Mail, Phone } from 'lucide-react';

const lecturers = [
  { id: 1, name: 'Dr. Emmanuel Okafor', department: 'Computer Science', email: 'e.okafor@unidel.edu.ng', phone: '+234 800 123 4567', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Prof. Sarah Chukwu', department: 'Mathematics', email: 's.chukwu@unidel.edu.ng', phone: '+234 800 987 6543', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Dr. Ahmed Ibrahim', department: 'Physics', email: 'a.ibrahim@unidel.edu.ng', phone: '+234 800 555 1234', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400' },
];

const Lecturers = () => {
  return (
    <div>
      <div className="page-header">
        <h1><Users style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Lecturers Directory</h1>
        <p>Find contact information for your lecturers and professors.</p>
      </div>

      <div className="grid">
        {lecturers.map(lecturer => (
          <div key={lecturer.id} className="card lecturer-card" style={{ padding: '0', overflow: 'hidden' }}>
            <img src={lecturer.image} alt={lecturer.name} style={{ height: '250px' }} />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{lecturer.name}</h3>
              <span className="badge" style={{ marginBottom: '1rem', background: 'var(--primary-light)', color: 'white' }}>
                {lecturer.department}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                <a href={`mailto:${lecturer.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#555' }}>
                  <Mail size={16} /> {lecturer.email}
                </a>
                <a href={`tel:${lecturer.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#555' }}>
                  <Phone size={16} /> {lecturer.phone}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lecturers;
