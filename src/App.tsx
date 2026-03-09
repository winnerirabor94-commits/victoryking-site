import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import { Layout } from './Layout';
import { Home } from './Home';
import { Login } from './Login';
import { Dashboard } from './Dashboard';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;