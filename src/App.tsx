import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <SiteProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </SiteProvider>
  );
}
