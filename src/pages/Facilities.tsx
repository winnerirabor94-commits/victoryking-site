import React from 'react';
import { Building } from 'lucide-react';

const facilities = [
  { id: 1, name: 'Main Library', description: 'A state-of-the-art library with over 100,000 books and access to e-journals.', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Science Laboratory Complex', description: 'Fully equipped laboratories for Physics, Chemistry, and Biology practicals.', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Sports Arena', description: 'Includes a football pitch, basketball court, and track facilities.', image: 'https://images.unsplash.com/photo-1589139265243-71ab52d8e47f?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'University Health Center', description: '24/7 medical center providing primary healthcare to students and staff.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400' },
];

const Facilities = () => {
  return (
    <div>
      <div className="page-header">
        <h1><Building style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> University Facilities</h1>
        <p>Explore the state-of-the-art facilities available at UNIDEL.</p>
      </div>

      <div className="grid">
        {facilities.map(fac => (
          <div key={fac.id} className="card facility-card" style={{ padding: '0', overflow: 'hidden' }}>
            <img src={fac.image} alt={fac.name} />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{fac.name}</h3>
              <p style={{ color: '#555', fontSize: '0.95rem' }}>{fac.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
