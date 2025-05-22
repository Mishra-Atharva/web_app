import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/login/signup';
import Subscription from './pages/general/subscription.jsx';
import Home from './pages/general/Home.jsx';
import DashboardAdmin from './pages/users/admin/dashboard';
import DashboardFreelancer from './pages/users/freelancer/dashboard';
import DashboardClient from './pages/users/client/dashboard';
import PublicRoute from './PublicRoute';
import PrivateRoute from "./PrivateRoute";
import { user_data } from "./pages/users/client/utils/user_data.js";
import { useState, useEffect } from "react";


export default function App() {

  const [user, setUser] = useState(null);

   const saveUserData = (userData) => {
    if (userData) {
      localStorage.setItem("fname", userData.first_name || '');
      localStorage.setItem("lname", userData.last_name || '');
      localStorage.setItem("email", userData.email || '');
      localStorage.setItem("dob", userData.date_of_birth || '');
      localStorage.setItem("phone", userData.phone || '');
      localStorage.setItem("type", userData.user_type || '');
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await user_data();
        if (data) {
          try {
            const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
            setUser(parsedData);
            saveUserData(parsedData);
          } catch (parseError) {
            console.error("Error parsing user data:", parseError);
            setError("Failed to parse user data");
          }
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, []);

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
            
            {<Route path="/subscription" element={
              <Subscription />
            } /> } 
            
            {<Route path="/Home" element={
              <Home />
            } /> }
            

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