import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { CreditCard, ShieldCheck } from 'lucide-react';

const Payment = () => {
  const { user, processPayment } = useAuth();
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate API call to payment gateway
    setTimeout(() => {
      processPayment();
      navigate('/');
    }, 1500);
  };

  if (!user || user.role !== 'student') {
    return <div className="card">Unauthorized access.</div>;
  }

  if (user.hasPaid) {
    navigate('/');
    return null;
  }

  return (
    <div className="payment-portal card">
      <ShieldCheck size={64} color="var(--primary)" style={{ margin: '0 auto 1rem', display: 'block' }} />
      <h1>Portal Access Fee</h1>
      <p>Dear {user.name}, to gain full access to the UNIDEL student portal, a one-time verification payment is required.</p>
      
      <div className="amount-badge">
        ₦1,000
      </div>

      <div style={{ marginBottom: '2rem', textAlign: 'left', background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>What's included:</h3>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
          <li>Access to Student Chatrooms</li>
          <li>Marketplace selling privileges</li>
          <li>Full Exam Timetable</li>
          <li>Scholarship & Loan Applications</li>
        </ul>
      </div>

      <button onClick={handlePayment} className="btn" style={{ width: '100%', fontSize: '1.2rem' }}>
        <CreditCard style={{ marginRight: '0.5rem' }} /> Pay Securely Now
      </button>
      
      <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>
        Secured by UNIDEL Pay. Your payment is 100% safe and encrypted.
      </p>
    </div>
  );
};

export default Payment;
