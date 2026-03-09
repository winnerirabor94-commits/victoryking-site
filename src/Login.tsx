import { useNavigate, Navigate } from 'react-router-dom';
import { useAppContext } from './AppContext';
import { GraduationCap, Briefcase } from 'lucide-react';

export function Login() {
  const { user, login, users } = useAppContext();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleLogin = (userId: string) => {
    login(userId);
    navigate('/dashboard');
  };

  const students = users.filter(u => u.role === 'student');
  const lecturers = users.filter(u => u.role === 'lecturer');

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Sign in to EduBlog</h1>
        <p className="text-gray-500 mt-2">Choose an account to continue (Mock Login)</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Briefcase className="h-4 w-4" /> Lecturers
          </h2>
          <div className="space-y-2">
            {lecturers.map(u => (
              <button
                key={u.id}
                onClick={() => handleLogin(u.id)}
                className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-left"
              >
                <img src={u.avatar} alt="" className="h-10 w-10 rounded-full" />
                <div>
                  <div className="font-medium text-gray-900">{u.name}</div>
                  <div className="text-xs text-gray-500 capitalize">{u.role}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <GraduationCap className="h-4 w-4" /> Students
          </h2>
          <div className="space-y-2">
            {students.map(u => (
              <button
                key={u.id}
                onClick={() => handleLogin(u.id)}
                className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors text-left"
              >
                <img src={u.avatar} alt="" className="h-10 w-10 rounded-full" />
                <div>
                  <div className="font-medium text-gray-900">{u.name}</div>
                  <div className="text-xs text-gray-500 capitalize">{u.role}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}