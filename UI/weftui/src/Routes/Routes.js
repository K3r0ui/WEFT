// routes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import NotFoundPage from '../Pages/NotFoundPage';
import NewHome from '../components/HomeNew';
import UserHome from '../components/UserHome';
import PrivateRoute from '../components/PrivateRoute';

const RoutesConf = () => (
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

    {/* LandingPage available to authenticated users */}
    <Route
      path="/"
      element={<PrivateRoute><LandingPage /></PrivateRoute>}
    />

    {/* Catch-all route */}
    <Route path="/notfound" element={<NotFoundPage />} />

    {/* Redirect unmatched routes to the 404 page */}
    <Route path="*" element={<Navigate to="/notfound" />} />
  </Routes>
);

export default RoutesConf;
