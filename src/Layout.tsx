import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAppContext } from './AppContext';
import { BookOpen, LogOut, LayoutDashboard, UserCircle } from 'lucide-react';

export function Layout() {
  const { user, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-500">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold text-xl tracking-tight">EduBlog</span>
            </Link>
            
            <nav className="flex items-center gap-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">Feed</Link>
              {user ? (
                <>
                  <Link to="/dashboard" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium">
                    <LayoutDashboard className="h-4 w-4" /> Dashboard
                  </Link>
                  <div className="flex items-center gap-3 ml-4 border-l pl-4">
                    <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full border border-gray-200" />
                    <span className="text-sm font-medium text-gray-700">{user.name}</span>
                    <button onClick={handleLogout} className="text-gray-400 hover:text-red-600 transition-colors" title="Log out">
                      <LogOut className="h-5 w-5" />
                    </button>
                  </div>
                </>
              ) : (
                <Link to="/login" className="flex items-center gap-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors font-medium">
                  <UserCircle className="h-5 w-5" /> Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <Outlet />
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} EduBlog Dashboard. School Portal Prototype.
        </div>
      </footer>
    </div>
  );
}