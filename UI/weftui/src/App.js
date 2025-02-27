import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import NewHome from './components/HomeNew';
import UserHome from './components/UserHome';
import LandingPage from './components/LandingPage';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './components/NotFound';
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  return (
    <Router>
      <Routes>
        {/* Protected Route for Admin */}
        <Route
          path="/admin"
          element={
            <PrivateRoute requiredRole="admin">
              <NewHome />
            </PrivateRoute>
          }
        />

        {/* Protected Route for User */}
        <Route
          path="/user"
          element={
            <PrivateRoute requiredRole="user">
              <UserHome />
            </PrivateRoute>
          }
        />

        {/* Default Protected Route for Authenticated Users */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        {/* LandingPage is now available to any authenticated user */}
        <Route 
          path="/landingpage" 
          element={<PrivateRoute><LandingPage /></PrivateRoute>} 
        />
        
        {/* Catch-all route */}
        <Route path="/notfound" element={<NotFound />} />  

        {/* Redirect any unmatched route to the 404 page */}
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </Router>
  );
}

export default App;
