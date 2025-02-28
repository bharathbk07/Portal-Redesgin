import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gauge, Github } from 'lucide-react';

interface LoginPageProps {
  setIsAuthenticated: (value: boolean) => void;
}

function LoginPage({ setIsAuthenticated }: LoginPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-700 text-white relative overflow-hidden">
      <div className="relative w-full max-w-4xl bg-white/10 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 p-6 flex flex-col md:flex-row">
        {/* Left Side - Standard Login */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center md:border-r border-white/30">
          <div className="flex items-center justify-center mb-6">
            <Gauge className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-2xl font-bold">PerformanceHub</span>
          </div>
          <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>
          {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-3 bg-white/20 rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-white/70"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-3 bg-white/20 rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-white/70"
          />
          <button
            className="w-full p-3 bg-blue-500 rounded-md hover:bg-blue-600 transition"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <div className="mt-4 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-white/80 hover:text-white underline"
            >
              Back to Home
            </button>
          </div>
        </div>
        
        {/* Right Side - Azure AD & GitHub Login */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-6">Sign in with</h2>
          <button className="w-full p-3 bg-white/20 rounded-md hover:bg-white/30 transition flex items-center justify-center mb-4">
            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
              <path fill="currentColor" d="M1 1h10v10H1V1zm11 0h10v10H12V1zM1 12h10v10H1V12zm11 0h10v10H12V12z"/>
            </svg>
            Sign in with Azure AD
          </button>
          <button className="w-full p-3 bg-white/20 rounded-md hover:bg-white/30 transition flex items-center justify-center">
            <Github className="w-5 h-5 mr-2" />
            Sign in with GitHub
          </button>
        </div>
      </div>
      
      {/* Message Below Login Section */}
      <div className="absolute bottom-6 text-center w-full text-sm text-gray-300 px-4">
        <p>Optimize your application's performance with real-time monitoring, load testing, and AI-driven insights.</p>
      </div>
    </div>
  );
}

export default LoginPage;