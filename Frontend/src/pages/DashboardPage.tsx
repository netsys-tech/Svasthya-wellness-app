import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Activity, Heart, Calendar, Users, TrendingUp, 
  Award, Clock, Target, AlertCircle, CheckCircle 
} from 'lucide-react';

const DashboardPage = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Weekly Exercises',
      value: '12',
      change: '+15%',
      icon: Activity,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Health Score',
      value: '87%',
      change: '+8%',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Appointments',
      value: '3',
      change: 'This month',
      icon: Calendar,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Community Rank',
      value: '#42',
      change: '+5 positions',
      icon: Users,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'Completed morning yoga session',
      time: '2 hours ago',
      type: 'exercise',
      icon: CheckCircle,
      color: 'text-emerald-500'
    },
    {
      id: 2,
      title: 'New prescription from Dr. Wilson',
      time: '1 day ago',
      type: 'prescription',
      icon: AlertCircle,
      color: 'text-blue-500'
    },
    {
      id: 3,
      title: 'Completed mental health assessment',
      time: '2 days ago',
      type: 'assessment',
      icon: CheckCircle,
      color: 'text-emerald-500'
    },
    {
      id: 4,
      title: 'Joined community discussion',
      time: '3 days ago',
      type: 'community',
      icon: Users,
      color: 'text-purple-500'
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: 'Physical therapy session',
      time: 'Today, 3:00 PM',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Take evening medication',
      time: 'Today, 8:00 PM',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Weekly progress assessment',
      time: 'Tomorrow, 10:00 AM',
      priority: 'low'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Here's your wellness overview for today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <p className="text-sm text-emerald-600 mt-1">{stat.change}</p>
                  </div>
                  <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Weekly Progress</h2>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-emerald-500" />
                <span className="text-sm text-emerald-600 font-medium">+12% vs last week</span>
              </div>
            </div>
            
            {/* Progress Chart Placeholder */}
            <div className="h-64 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Activity className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <p className="text-gray-600">Progress chart will be displayed here</p>
                <p className="text-sm text-gray-500 mt-1">Tracking your daily activities and improvements</p>
              </div>
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Today's Tasks</h2>
              <Target className="h-5 w-5 text-blue-500" />
            </div>
            
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${
                    task.priority === 'high' ? 'bg-red-500' :
                    task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{task.title}</p>
                    <p className="text-xs text-gray-500">{task.time}</p>
                  </div>
                  <Clock className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
            <Award className="h-5 w-5 text-yellow-500" />
          </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <Icon className={`h-5 w-5 ${activity.color}`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activity.type === 'exercise' ? 'bg-emerald-100 text-emerald-700' :
                    activity.type === 'prescription' ? 'bg-blue-100 text-blue-700' :
                    activity.type === 'assessment' ? 'bg-purple-100 text-purple-700' :
                    'bg-pink-100 text-pink-700'
                  }`}>
                    {activity.type}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105">
            <Activity className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Start Exercise</span>
          </button>
          
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all transform hover:scale-105">
            <Calendar className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Book Appointment</span>
          </button>
          
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all transform hover:scale-105">
            <Heart className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Mental Health</span>
          </button>
          
          <button className="bg-gradient-to-r from-purple-500 to-violet-500 text-white p-4 rounded-xl hover:from-purple-600 hover:to-violet-600 transition-all transform hover:scale-105">
            <Users className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Join Community</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;