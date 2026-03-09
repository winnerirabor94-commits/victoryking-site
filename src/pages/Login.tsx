import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState<'student' | 'lecturer'>('student');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    
    login(name, role);
    if (role === 'student') {
      navigate('/payment');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="auth-container card">
      <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--primary)' }}>UNIDEL Portal Login</h2>
      {role === 'student' && (
        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>
          * First-time students must complete a one-time ₦1,000 access fee payment after logging in.
        </p>
      )}
      
      <div className="tab-container">
        <div 
          className={`tab ${role === 'student' ? 'active' : ''}`}
          onClick={() => setRole('student')}
        >
          Student
        </div>
        <div 
          className={`tab ${role === 'lecturer' ? 'active' : ''}`}
          onClick={() => setRole('lecturer')}
        >
          Lecturer
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Full Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="input-group">
          <label>ID Number</label>
          <input 
            type="password" 
            placeholder={role === 'student' ? 'Matric Number' : 'Staff ID'}
            required
          />
        </div>

        <button type="submit" className="btn" style={{ width: '100%' }}>
          {role === 'student' ? 'Login & Continue to Payment' : 'Login'}
        </button>
      </form>
      
      <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>
        Are you an administrator? <a href="/admin-login">Admin Login</a>
      </p>
    </div>
  );
};

export default Login;
