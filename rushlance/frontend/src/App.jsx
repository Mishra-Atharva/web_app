import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/general/Home';
import Signup from './pages/login/signup';
import Subscription from './pages/general/subscription';
import DashboardAdmin from './pages/admin/dashboard';
import DashboardFreelancer from './pages/freelancer/dashboard';
import DashboardClient from './pages/client/dashboard';


export default function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Signup/>} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/dashboard_freelancer" element={<DashboardFreelancer />} />
            <Route path="/dashboard_client" element={<DashboardClient />} />
            <Route path="/dashboard_admin" element={<DashboardAdmin />} />
          </Routes>
      </div>
    </Router>
  );
}