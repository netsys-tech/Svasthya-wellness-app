import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Home, Heart, Camera, FileText, Clipboard, Brain,
  Apple, Users, Calendar, Watch, CreditCard, User,
  Stethoscope, Shield, LogOut, Settings
} from 'lucide-react';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const getMenuItems = () => {
    if (user?.role === 'patient') {
      return [
        { icon: Home, label: 'Dashboard', path: '/dashboard' },
        { icon: Camera, label: 'Exercise', path: '/exercise' },
        { icon: FileText, label: 'Prescription', path: '/prescription' },
        { icon: Clipboard, label: 'Assessment', path: '/assessment' },
        { icon: Brain, label: 'Mental Health', path: '/mental-health' },
        { icon: Apple, label: 'Nutrition', path: '/nutrition' },
        { icon: Users, label: 'Community', path: '/community' },
        { icon: Calendar, label: 'Appointments', path: '/appointments' },
        { icon: Watch, label: 'Wearables', path: '/wearables' },
        { icon: CreditCard, label: 'Subscription', path: '/subscription' },
        { icon: User, label: 'Profile', path: '/profile' },
      ];
    } else if (user?.role === 'doctor') {
      return [
        { icon: Home, label: 'Dashboard', path: '/doctor/dashboard' },
        { icon: Users, label: 'Patients', path: '/doctor/patients' },
        { icon: FileText, label: 'Prescriptions', path: '/doctor/prescriptions' },
        { icon: Clipboard, label: 'Assessments', path: '/doctor/assessments' },
        { icon: Calendar, label: 'Appointments', path: '/appointments' },
        { icon: User, label: 'Profile', path: '/profile' },
      ];
    } else if (user?.role === 'admin') {
      return [
        { icon: Home, label: 'Dashboard', path: '/admin/dashboard' },
        { icon: Users, label: 'Users', path: '/admin/users' },
        { icon: FileText, label: 'Prescriptions', path: '/admin/prescriptions' },
        { icon: Clipboard, label: 'Assessments', path: '/admin/assessments' },
        { icon: Shield, label: 'Access Control', path: '/admin/access' },
        { icon: Settings, label: 'Settings', path: '/admin/settings' },
      ];
    }
    return [];
  };

  const menuItems = getMenuItems();

  return (
    <div className="bg-gradient-to-b from-emerald-800 to-emerald-900 w-64 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-emerald-700">
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-lg">
            <Heart className="h-8 w-8 text-emerald-600" />
          </div>
          <span className="text-2xl font-bold text-white">Svasthya</span>
        </div>
      </div>

      {/* User Info */}
      <div className="p-6 border-b border-emerald-700">
        <div className="flex items-center space-x-3">
          <img
            src={user?.avatar || 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'}
            alt={user?.name}
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div>
            <p className="text-white font-semibold">{user?.name}</p>
            <p className="text-emerald-200 text-sm capitalize">{user?.role}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white text-emerald-800 shadow-lg'
                      : 'text-emerald-100 hover:bg-emerald-700 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-emerald-700">
        <button
          onClick={logout}
          className="flex items-center space-x-3 px-4 py-3 text-emerald-100 hover:bg-emerald-700 hover:text-white rounded-lg transition-all w-full"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;