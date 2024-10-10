import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import ScanProduct from './pages/ScanProduct';
import OrganizeMeal from './pages/OrganizeMeal';
import Share from './pages/Share';
import Allergies from './pages/Allergies';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-white flex flex-col">
              <Header />
              <main className="flex-grow p-4">
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/scan" element={<ScanProduct />} />
                  <Route path="/organize-meal" element={<OrganizeMeal />} />
                  <Route path="/share" element={<Share />} />
                  <Route path="/allergies" element={<Allergies />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </main>
              <BottomNavigation />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;