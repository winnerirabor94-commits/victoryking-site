import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, BookOpen, User, GraduationCap, Settings } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <GraduationCap /> UNIDEL Hub
      </Link>
      <div className="nav-links">
        <Link to="/">Blog & News</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/scholarships">Loans & Scholarships</Link>
        <Link to="/timetable">Timetable</Link>
        <Link to="/facilities">Facilities</Link>
        <Link to="/lecturers">Lecturers</Link>
        <Link to="/services">Services</Link>
        
        {user?.role === 'student' && <Link to="/student-chat">Student Chat</Link>}
        {user?.role === 'lecturer' && <Link to="/lecturer-chat">Lecturer Chat</Link>}
        {user?.role === 'admin' && (
          <>
            <Link to="/student-chat">Student Chat</Link>
            <Link to="/lecturer-chat">Lecturer Chat</Link>
          </>
        )}
        
        {user ? (
          <button onClick={handleLogout} className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
            <LogOut size={18} /> Logout ({user.name})
          </button>
        ) : (
          <>
            <Link to="/login" className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', marginLeft: '1rem', textDecoration: 'none' }}>Login</Link>
            <Link to="/admin-login" className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', textDecoration: 'none' }}>Admin</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
