import React, { useState, useRef } from 'react';
import { 
  Camera, Play, Pause, StopCircle, RotateCcw, 
  Target, Trophy, Clock, Activity, CheckCircle,
  AlertCircle, TrendingUp, Calendar
} from 'lucide-react';

const ExercisePage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [currentExercise, setCurrentExercise] = useState('Shoulder Stretch');
  const videoRef = useRef<HTMLVideoElement>(null);

  const exercises = [
    { name: 'Shoulder Stretch', duration: '2 min', difficulty: 'Easy', calories: 15 },
    { name: 'Neck Rotation', duration: '1 min', difficulty: 'Easy', calories: 8 },
    { name: 'Back Extension', duration: '3 min', difficulty: 'Medium', calories: 25 },
    { name: 'Hip Flexor', duration: '2 min', difficulty: 'Medium', calories: 18 },
  ];

  const previousSessions = [
    {
      date: '2024-01-15',
      duration: '25 min',
      exercises: 8,
      score: 92,
      feedback: 'Excellent form! Keep it up.'
    },
    {
      date: '2024-01-14',
      duration: '20 min',
      exercises: 6,
      score: 87,
      feedback: 'Good progress on flexibility.'
    },
    {
      date: '2024-01-13',
      duration: '30 min',
      exercises: 10,
      score: 94,
      feedback: 'Perfect session! All targets met.'
    }
  ];

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsRecording(true);
      setIsPaused(false);
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const pauseRecording = () => {
    setIsPaused(!isPaused);
  };

  const stopRecording = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsRecording(false);
    setIsPaused(false);
    setSessionTime(0);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Exercise Tracking</h1>
          <p className="text-gray-600 mt-2">Real-time form analysis and feedback</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Exercise Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Camera Feed */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Camera Feed</h2>
                <div className="flex items-center space-x-2">
                  {isRecording && (
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-red-600 font-medium">Recording</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="relative bg-gray-900 rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                />
                
                {!isRecording && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="text-center text-white">
                      <Camera className="h-16 w-16 mx-auto mb-4 opacity-75" />
                      <p className="text-lg font-medium">Camera Off</p>
                      <p className="text-sm opacity-75">Click start to begin tracking</p>
                    </div>
                  </div>
                )}
                
                {/* AI Feedback Overlay */}
                {isRecording && (
                  <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm">Good form detected</span>
                    </div>
                  </div>
                )}
                
                {/* Exercise Timer */}
                {isRecording && (
                  <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-mono">
                        {Math.floor(sessionTime / 60)}:{(sessionTime % 60).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Controls */}
              <div className="flex items-center justify-center space-x-4 mt-6">
                {!isRecording ? (
                  <button
                    onClick={startRecording}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-medium hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 flex items-center space-x-2"
                  >
                    <Play className="h-5 w-5" />
                    <span>Start Session</span>
                  </button>
                ) : (
                  <>
                    <button
                      onClick={pauseRecording}
                      className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors"
                    >
                      {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={stopRecording}
                      className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <StopCircle className="h-5 w-5" />
                    </button>
                    <button className="bg-gray-500 text-white p-3 rounded-full hover:bg-gray-600 transition-colors">
                      <RotateCcw className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Real-time Feedback */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-time Feedback</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-800 font-medium">Posture Alignment</span>
                  </div>
                  <span className="text-green-600 font-semibold">95%</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                    <span className="text-yellow-800 font-medium">Movement Speed</span>
                  </div>
                  <span className="text-yellow-600 font-semibold">Slow down</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-blue-500" />
                    <span className="text-blue-800 font-medium">Range of Motion</span>
                  </div>
                  <span className="text-blue-600 font-semibold">88%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Current Exercise */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Exercise</h3>
              <div className="text-center">
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{currentExercise}</h4>
                <p className="text-gray-600 mt-1">Physiotherapy</p>
              </div>
            </div>

            {/* Exercise Queue */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Exercises</h3>
              <div className="space-y-3">
                {exercises.map((exercise, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      exercise.name === currentExercise
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setCurrentExercise(exercise.name)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{exercise.name}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{exercise.duration}</span>
                          <span>•</span>
                          <span>{exercise.difficulty}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-emerald-600">{exercise.calories} cal</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Progress</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Exercises Completed</span>
                  <span className="font-semibold text-gray-900">3/8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Time</span>
                  <span className="font-semibold text-gray-900">15 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Calories Burned</span>
                  <span className="font-semibold text-gray-900">48 cal</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average Score</span>
                  <span className="font-semibold text-emerald-600">91%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Sessions */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Previous Sessions</h2>
            <div className="flex items-center space-x-2 text-emerald-600">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-medium">Improving trend</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Duration</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Exercises</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Score</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Feedback</th>
                </tr>
              </thead>
              <tbody>
                {previousSessions.map((session, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">{session.date}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-900">{session.duration}</td>
                    <td className="py-3 px-4 text-gray-900">{session.exercises}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          session.score >= 90 ? 'bg-green-500' :
                          session.score >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                        <span className="font-medium text-gray-900">{session.score}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{session.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;