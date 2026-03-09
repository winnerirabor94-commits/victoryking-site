import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Shield } from 'lucide-react';

const AdminLogin = () => {
  const [name, setName] = useState('Admin User');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate admin login
    login(name, 'admin');
    navigate('/');
  };

  return (
    <div className="auth-container card">
      <div style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)' }}>
        <Shield size={48} style={{ margin: '0 auto', display: 'block', marginBottom: '1rem' }} />
        <h2>Admin Portal</h2>
        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
          Instructions: As the admin, enter your credentials. Default setup allows any password for demo purposes.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Admin Username</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="input-group">
          <label>Admin Password</label>
          <input 
            type="password" 
            placeholder="Enter your admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn" style={{ width: '100%', backgroundColor: '#d32f2f' }}>
          Secure Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
