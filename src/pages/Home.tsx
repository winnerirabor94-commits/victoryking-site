import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, Globe } from 'lucide-react';

const events = [
  { id: 1, title: 'Matriculation Ceremony', date: '2026-04-15', description: 'Annual matriculation for all freshers at UNIDEL main campus.' },
  { id: 2, title: 'Inter-Faculty Sports Week', date: '2026-05-10', description: 'A week of sports and activities between different faculties.' },
];

const news = [
  { id: 1, title: 'UNIBEN wins national debate', source: 'University of Benin', date: '2026-03-08', content: 'Students from UNIBEN took first place at the national debate championship.' },
  { id: 2, title: 'New tech hub opened at DELSU', source: 'Delta State University', date: '2026-03-05', content: 'A state-of-the-art tech hub has been launched for engineering students.' },
];

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="page-header">
        <h1>Welcome {user ? `, ${user.name}` : 'to UNIDEL Hub'}</h1>
        <p>Your one-stop platform for UNIDEL academic and social activities.</p>
      </div>

      <div className="grid">
        <div className="card">
          <h2 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar /> Upcoming Events (UNIDEL)
          </h2>
          <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {events.map(event => (
              <li key={event.id} style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem' }}>{event.title}</h3>
                <span className="badge" style={{ marginBottom: '0.5rem' }}>{event.date}</span>
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Globe /> Inter-School News
          </h2>
          <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {news.map(item => (
              <li key={item.id} style={{ borderLeft: '3px solid var(--secondary)', paddingLeft: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem' }}>{item.title}</h3>
                <span style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginBottom: '0.5rem' }}>
                  From: {item.source} | {item.date}
                </span>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
