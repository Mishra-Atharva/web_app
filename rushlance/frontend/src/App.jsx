import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/general/Home';
import Signup from './pages/login/signup';
import Subscription from './pages/general/subscription';
import DashboardAdmin from './pages/users/admin/dashboard';
import DashboardFreelancer from './pages/users/freelancer/dashboard';
import DashboardClient from './pages/users/client/dashboard';
import PublicRoute from './PublicRoute';


export default function App() {

  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signup" element={
              <PublicRoute>
                <Signup/>
              </PublicRoute>
            } />
            
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/dashboard_freelancer" element={<DashboardFreelancer />} />
            <Route path="/dashboard_client" element={<DashboardClient />} />
            <Route path="/dashboard_admin" element={<DashboardAdmin />} />
          </Routes>
      </div>
    </Router>
  );
}