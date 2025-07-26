import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, FileText, Brain, Apple, Users, Calendar, 
  Watch, Shield, Zap, Heart, CheckCircle, Star 
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Camera,
      title: 'Real-time Exercise Tracking',
      description: 'AI-powered camera tracking for perfect form and instant feedback'
    },
    {
      icon: FileText,
      title: 'Smart Prescriptions',
      description: 'AI-generated exercise prescriptions based on your specific conditions'
    },
    {
      icon: Brain,
      title: 'Mental Health Tools',
      description: 'Happiness meter, journaling, meditation, and counseling sessions'
    },
    {
      icon: Apple,
      title: 'Nutrition Guidance',
      description: 'Personalized nutrition plans powered by machine learning'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others on similar wellness journeys'
    },
    {
      icon: Watch,
      title: 'Wearables Integration',
      description: 'Seamlessly connect with Google Fit and other devices'
    }
  ];

  const plans = [
    {
      name: 'Basic',
      price: '₹499',
      period: '/month',
      features: ['Exercise tracking', 'Basic prescriptions', 'Community access'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Professional',
      price: '₹699',
      period: '/month',
      features: ['All Basic features', 'Mental health tools', 'Nutrition guidance', 'Priority support'],
      color: 'from-pink-500 to-rose-500',
      popular: true
    },
    {
      name: 'Premium',
      price: '₹999',
      period: '/month',
      features: ['All Professional features', 'Doctor consultations', 'Advanced analytics', 'Custom plans'],
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Complete
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Wellness </span>
              Journey
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your health with AI-powered exercise tracking, personalized prescriptions, 
              mental health tools, and comprehensive wellness guidance all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Your Journey
              </Link>
              <Link
                to="/login"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for 
              <span className="text-emerald-600"> Complete Wellness</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform combines cutting-edge technology with proven wellness practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your 
              <span className="text-emerald-600"> Wellness Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Affordable plans designed to support every stage of your wellness journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 relative ${plan.popular ? 'ring-2 ring-pink-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/signup"
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity text-center block`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of users who have already started their wellness journey with us
          </p>
          <Link
            to="/signup"
            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>Start Free Trial</span>
            <Zap className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;