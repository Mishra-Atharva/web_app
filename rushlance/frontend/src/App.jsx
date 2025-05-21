import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/general/Home';
import Signup from './pages/login/signup';
// import Subscription from './pages/general/subscription.jsx';
import DashboardAdmin from './pages/users/admin/dashboard';
import DashboardFreelancer from './pages/users/freelancer/dashboard';
import DashboardClient from './pages/users/client/dashboard';
import PublicRoute from './PublicRoute';
import PrivateRoute from "./PrivateRoute";


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
            
            <Route path="/subscription" element={
              <Subscription />
            } />

            <Route path="/dashboard_freelancer" element={
              <PrivateRoute>
                <DashboardFreelancer/>
              </PrivateRoute>
            } />
            
            <Route path="/dashboard_client" element={
              <PrivateRoute>
                <DashboardClient/>
              </PrivateRoute>
            } />

            <Route path="/dashboard_admin" element={
              <PrivateRoute>
                <DashboardAdmin/>
              </PrivateRoute>
            } />

          </Routes>
      </div>
    </Router>
  );
}