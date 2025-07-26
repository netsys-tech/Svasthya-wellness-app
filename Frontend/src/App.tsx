import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ExercisePage from './pages/ExercisePage';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

// Public Route Component (redirect if authenticated)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            } />
            <Route path="/login" element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />
            <Route path="/signup" element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            } />

            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
            <Route path="/exercise" element={
              <ProtectedRoute>
                <ExercisePage />
              </ProtectedRoute>
            } />

            {/* Placeholder routes for other pages */}
            <Route path="/prescription" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Prescription Page - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/assessment" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Assessment Page - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/mental-health" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Mental Health Tools - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/nutrition" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Nutrition Guide - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/community" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Community - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/appointments" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Appointments - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/wearables" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Wearables Integration - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/subscription" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Subscription - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Profile - Coming Soon</h1></div>
              </ProtectedRoute>
            } />

            {/* Doctor Routes */}
            <Route path="/doctor/dashboard" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Doctor Dashboard - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/doctor/patients" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Patient List - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/doctor/prescriptions" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Doctor Prescriptions - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/doctor/assessments" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Doctor Assessments - Coming Soon</h1></div>
              </ProtectedRoute>
            } />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Admin Dashboard - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/admin/users" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">User Management - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/admin/prescriptions" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Admin Prescriptions - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/admin/assessments" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Admin Assessments - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/admin/access" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Access Control - Coming Soon</h1></div>
              </ProtectedRoute>
            } />
            <Route path="/admin/settings" element={
              <ProtectedRoute>
                <div className="p-6"><h1 className="text-2xl font-bold">Admin Settings - Coming Soon</h1></div>
              </ProtectedRoute>
            } />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;