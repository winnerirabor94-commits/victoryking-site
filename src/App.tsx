import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Payment from './pages/Payment';
import Marketplace from './pages/Marketplace';
import Scholarships from './pages/Scholarships';
import Timetable from './pages/Timetable';
import Facilities from './pages/Facilities';
import Lecturers from './pages/Lecturers';
import Services from './pages/Services';
import StudentChat from './pages/StudentChat';
import LecturerChat from './pages/LecturerChat';

const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: string[] }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (user.role === 'student' && !user.hasPaid) return <Navigate to="/payment" />;
  if (allowedRoles && !allowedRoles.includes(user.role!)) return <Navigate to="/" />;
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/" element={<Home />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/lecturers" element={<Lecturers />} />
            
            {/* Protected Routes */}
            <Route path="/marketplace" element={<ProtectedRoute><Marketplace /></ProtectedRoute>} />
            <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
            <Route path="/student-chat" element={<ProtectedRoute allowedRoles={['student', 'admin']}><StudentChat /></ProtectedRoute>} />
            <Route path="/lecturer-chat" element={<ProtectedRoute allowedRoles={['lecturer', 'admin']}><LecturerChat /></ProtectedRoute>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
