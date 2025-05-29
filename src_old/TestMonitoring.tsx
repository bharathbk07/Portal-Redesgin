import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { Activity, BarChart3, AlertTriangle, Terminal, Clock, Plus } from "lucide-react";
import Sidebar from "./leftnav";
import WorkspaceSelector from "./WorkspaceSelector";
import UserProfileDropdown from "./UserProfileDropdown";

const responseTimeData = [
  { time: "10:00", value: 320 },
  { time: "10:05", value: 600 },
  { time: "10:10", value: 350 },
  { time: "10:15", value: 250 },
  { time: "10:20", value: 420 },
];

const requestRateData = [
  { time: "10:00", value: 100 },
  { time: "10:05", value: 120 },
  { time: "10:10", value: 90 },
  { time: "10:15", value: 130 },
  { time: "10:20", value: 110 },
];

const errorRateData = [
  { time: "10:00", value: 1.2 },
  { time: "10:05", value: 0.8 },
  { time: "10:10", value: 1.5 },
  { time: "10:15", value: 1.0 },
  { time: "10:20", value: 1.3 },
];

const logs = [
  "10:00 - Load Test Started",
  "10:05 - 100 Requests Sent",
  "10:10 - Response Time Spiked",
  "10:15 - 5 Errors Detected",
  "10:20 - Test Completed",
];

const testStatus = {
  experimentNumber: "EXP-105",
  scenarioName: "Login Load Test",
  triggeredBy: "Alice Smith",
  triggeredTime: "Feb 10, 2025 - 14:30",
  mode: "Ad-hoc",
  estimatedTimeLeft: "1 Hour",
  currentStage: "Performance Test (NeoLoad)",
};

function TestMonitoring() {
  const [liveLogs, setLiveLogs] = useState(logs);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = `10:${Math.floor(Math.random() * 59)} - ${
        ["Request Sent", "Error Detected", "Response Delayed"][Math.floor(Math.random() * 3)]
      }`;
      setLiveLogs((prevLogs) => [newLog, ...prevLogs.slice(0, 5)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex h-screen bg-black text-gray-200">
      {/* Left Sidebar */}
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`flex flex-grow transition-all duration-300 ${isSidebarExpanded ? "ml-64" : "ml-16"}`}>
        <div className="flex flex-col flex-grow p-4">
          {/* Top Navbar */}
          <div className="flex items-center justify-between p-4 bg-black shadow-md border border-gray-700 rounded-lg m-2">
            <WorkspaceSelector />
            <UserProfileDropdown />
          </div>

          {/* Test Monitoring Dashboard */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 p-6">
              <h1 className="text-xl font-bold mb-4">Test Monitoring</h1>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-3 border border-gray-700">
                  <Activity className="w-8 h-8 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Active Requests</p>
                    <p className="text-xl font-bold">1,245</p>
                  </div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-3 border border-gray-700">
                  <BarChart3 className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="text-sm text-gray-400">Avg Response Time</p>
                    <p className="text-xl font-bold">245ms</p>
                  </div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-3 border border-gray-700">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                  <div>
                    <p className="text-sm text-gray-400">Error Rate</p>
                    <p className="text-xl font-bold">2.3%</p>
                  </div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                  <h2 className="text-md font-semibold text-white mb-2">Response Time</h2>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={responseTimeData}>
                      <XAxis dataKey="time" tick={{ fill: "#FFFFFF" }} />
                      <YAxis tick={{ fill: "#FFFFFF" }} />
                      <CartesianGrid stroke="#444" />
                      <Tooltip contentStyle={{ backgroundColor: "#222", color: "#FFF" }} />
                      <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                  <h2 className="text-md font-semibold text-white mb-2">Request Rate</h2>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={requestRateData}>
                      <XAxis dataKey="time" tick={{ fill: "#FFFFFF" }} />
                      <YAxis tick={{ fill: "#FFFFFF" }} />
                      <CartesianGrid stroke="#444" />
                      <Tooltip contentStyle={{ backgroundColor: "#222", color: "#FFF" }} />
                      <Line type="monotone" dataKey="value" stroke="#34D399" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                  <h2 className="text-md font-semibold text-white mb-2">Error Rate</h2>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={errorRateData}>
                      <XAxis dataKey="time" tick={{ fill: "#FFFFFF" }} />
                      <YAxis tick={{ fill: "#FFFFFF" }} />
                      <CartesianGrid stroke="#444" />
                      <Tooltip contentStyle={{ backgroundColor: "#222", color: "#FFF" }} />
                      <Line type="monotone" dataKey="value" stroke="#34D399" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-gray-1100 p-4 rounded-lg border border-gray-700 mt-6">
                <h2 className="text-md font-semibold text-white mb-2 flex items-center">
                  <Terminal className="w-10 h-5 text-gray-400 mr-2" /> Current Logs
                </h2>
                <div className="h-120 overflow-y-auto bg-gray-900 p-3 rounded-md text-sm">
                  {liveLogs.map((log, index) => (
                    <p key={index} className="text-gray-300">{log}</p>
                  ))}
                </div></div>

                <div className="bg-gray-1100 p-4 rounded-lg border border-gray-700 mt-6">
                <h2 className="text-md font-semibold text-white mb-2 flex items-center">
                  <Plus className="w-10 h-5 text-gray-400 mr-2" /> Add New Graph
                </h2>
                <div className="max-h-70 overflow-y-auto bg-gray-800 p-3 rounded-md text-sm">
                <h2 className="text-sm font-semibold text-white">AppDynamics Metrics</h2>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>CPU Usage</li>
                    <li>Memory Usage</li>
                    <li>Disk Usage</li>
                  </ul>

                  <h2 className="text-sm font-semibold text-white mt-3">Performance Metrics</h2>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>95th Percentile</li>
                    <li>Log Logs</li>
                    <li>90th Percentile</li>
                  </ul>
                </div></div>
              
            

              </div>
            </div>

            {/* Right Side - Current Test Status */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 w-80">
              <h2 className="text-lg font-semibold text-white mb-4">Current Test Status</h2>
              <p className="text-sm text-gray-400">Experiment Number:</p>
              <p className="text-md font-bold text-white">{testStatus.experimentNumber}</p>

              <p className="text-sm text-gray-400 mt-2">Scenario Name:</p>
              <p className="text-md font-bold text-white">{testStatus.scenarioName}</p>

              <p className="text-sm text-gray-400 mt-2">Triggered By:</p>
              <p className="text-md font-bold text-white">{testStatus.triggeredBy}</p>

              <p className="text-sm text-gray-400 mt-2">Triggered Time:</p>
              <p className="text-md font-bold text-white">{testStatus.triggeredTime}</p>

              <p className="text-sm text-gray-400 mt-2">Mode:</p>
              <p className="text-md font-bold text-white">{testStatus.mode}</p>

              <p className="text-sm text-gray-400 mt-2">Estimated Time Left:</p>
              <p className="text-md font-bold text-white flex items-center">
                <Clock className="w-4 h-4 mr-1 text-yellow-500" /> {testStatus.estimatedTimeLeft}
              </p>

              <p className="text-sm text-gray-400 mt-2">Current Stage:</p>
              <p className="text-md font-bold text-white">{testStatus.currentStage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestMonitoring;
