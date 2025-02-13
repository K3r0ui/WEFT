import React from 'react'
import Home from './components/Home.js'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.js'
import NewHome from './components/HomeNew.js'
import LandingPage from './components/LandingPage.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/new" element={<NewHome />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App