import React, { useState } from 'react';
import { Gauge, Clock, Timer, AlertOctagon, TrendingUp, ArrowUpRight, ArrowDownRight, User, Calendar, Zap, BarChart3, Users } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

function PerformanceMetric({ label, value, trend, icon: Icon }: { label: string, value: string, trend: 'up' | 'down' | 'neutral', icon: any }) {
  const trendColor = trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-gray-400';
  
  return (
    <div className="bg-[#181818] p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="text-gray-400 text-sm">{label}</div>
        <Icon className="w-4 h-4 text-gray-400" />
      </div>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className={`flex items-center ${trendColor}`}>
          {trend === 'up' && <ArrowUpRight className="w-4 h-4" />}
          {trend === 'down' && <ArrowDownRight className="w-4 h-4" />}
        </div>
      </div>
    </div>
  );
}

const responseTimeData = [
  { name: 'Run 1', responseTime: 320 },
  { name: 'Run 2', responseTime: 600 },
  { name: 'Run 3', responseTime: 350 },
  { name: 'Run 4', responseTime: 250 },
  { name: 'Run 5', responseTime: 420 },
  { name: 'Run 6', responseTime: 100 },
  { name: 'Run 7', responseTime: 480 }
];

const performanceData = [
  { name: 'Web App', loadTime: 2.3, responseTime: 0.8, throughput: 85, score: 92 },
  { name: 'Mobile App', loadTime: 1.8, responseTime: 0.5, throughput: 78, score: 88 },
  { name: 'API Service', loadTime: 0.4, responseTime: 0.2, throughput: 95, score: 96 },
  { name: 'Database', loadTime: 1.2, responseTime: 0.6, throughput: 82, score: 85 },
  { name: 'Microservice', loadTime: 0.9, responseTime: 0.3, throughput: 90, score: 94 },
];

const lineChartData = [
  { name: 'Week 1', 'Web App': 2.8, 'Mobile App': 2.2, 'API Service': 0.8 },
  { name: 'Week 2', 'Web App': 2.6, 'Mobile App': 2.1, 'API Service': 0.7 },
  { name: 'Week 3', 'Web App': 2.5, 'Mobile App': 2.0, 'API Service': 0.6 },
  { name: 'Week 4', 'Web App': 2.3, 'Mobile App': 1.9, 'API Service': 0.5 },
  { name: 'Week 5', 'Web App': 2.1, 'Mobile App': 1.8, 'API Service': 0.5 },
  { name: 'Week 6', 'Web App': 1.9, 'Mobile App': 1.7, 'API Service': 0.4 },
  { name: 'Week 7', 'Web App': 1.7, 'Mobile App': 1.6, 'API Service': 0.4 },
  { name: 'Week 8', 'Web App': 1.5, 'Mobile App': 1.5, 'API Service': 0.3 }
];

const radarChartData = [
  { subject: 'Load Time', A: 85, B: 65, fullMark: 100 },
  { subject: 'Response Time', A: 90, B: 75, fullMark: 100 },
  { subject: 'Throughput', A: 78, B: 70, fullMark: 100 },
  { subject: 'Reliability', A: 92, B: 80, fullMark: 100 },
  { subject: 'Scalability', A: 88, B: 75, fullMark: 100 },
];

function HomePage() {
  return (
    <div className="p-6 bg-black text-gray-200">
      <div className="mt-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Performance Dashboard</h1>
          <div className="bg-red-600/20 text-red-500 px-4 py-2 rounded-full flex items-center space-x-2">
            <Gauge className="w-4 h-4" />
            <span>Performance Score: 46/100</span>
          </div>
        </div>
      
        <div className="grid grid-cols-4 gap-4 mb-6">
          <PerformanceMetric 
            label="Error Rate" 
            value="2.3%" 
            trend="down"
            icon={AlertOctagon}
          />
          <PerformanceMetric 
            label="Avg Response Time" 
            value="245ms" 
            trend="up"
            icon={Timer}
          />
          <PerformanceMetric 
            label="95th Percentile" 
            value="450ms" 
            trend="neutral"
            icon={TrendingUp}
          />
          <PerformanceMetric 
            label="99th Percentile" 
            value="850ms" 
            trend="down"
            icon={TrendingUp}
          />
        </div>

         {/* Performance Overview Cards */}
         <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-[#181818] rounded-lg p-6">
          <div className="flex items-center">
            <Clock className="h-10 w-10 text-indigo-500" />
            <div className="ml-4">
            <h3 className="text-lg font-medium text-white">Avg. Load Time</h3>
            <p className="text-3xl font-bold text-indigo-600">1.32s</p>
            <p className="text-sm text-green-600 flex items-center">
              <span>↓ 12% from last week</span>
            </p>
            </div>
          </div>
          </div>
          
          <div className="bg-[#181818] rounded-lg p-6">
          <div className="flex items-center">
            <Zap className="h-10 w-10 text-indigo-500" />
            <div className="ml-4">
            <h3 className="text-lg font-medium text-white">Avg. Request Time</h3>
            <p className="text-3xl font-bold text-indigo-600">0.48s</p>
            <p className="text-sm text-green-600 flex items-center">
              <span>↓ 8% from last week</span>
            </p>
            </div>
          </div>
          </div>
          
          <div className="bg-[#181818] rounded-lg p-6">
          <div className="flex items-center">
            <BarChart3 className="h-10 w-10 text-indigo-500" />
            <div className="ml-4">
            <h3 className="text-lg font-medium text-white">Throughput</h3>
            <p className="text-3xl font-bold text-indigo-600">86 req/s</p>
            <p className="text-sm text-green-600 flex items-center">
              <span>↑ 5% from last week</span>
            </p>
            </div>
          </div>
          </div>
          
          <div className="bg-[#181818] rounded-lg p-6">
          <div className="flex items-center">
            <Users className="h-10 w-10 text-indigo-500" />
            <div className="ml-4">
            <h3 className="text-lg font-medium text-white">Concurrent Users</h3>
            <p className="text-3xl font-bold text-indigo-600">2,450</p>
            <p className="text-sm text-green-600 flex items-center">
              <span>↑ 15% from last week</span>
            </p>
            </div>
          </div>
          </div>
        </div>
        
        {/* Performance Table */}
        <div className="bg-[#181818] shadow rounded-lg overflow-hidden mb-12">
          <div className="px-6 py-5 border-b border-gray-700">
            <h3 className="text-lg font-medium text-white">Application Performance Overview</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-[#282828]">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Application
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Load Time (s)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Response Time (s)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Throughput (req/s)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Performance Score
            </th>
          </tr>
              </thead>
              <tbody className="bg-[#181818] divide-y divide-gray-700">
          {performanceData.map((app, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-[#181818]' : 'bg-[#282828]'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                {app.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {app.loadTime}s
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {app.responseTime}s
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {app.throughput}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
            <div className="w-full bg-gray-600 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${
                  app.score >= 90 ? 'bg-green-500' : 
                  app.score >= 80 ? 'bg-blue-500' : 
                  app.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`} 
                style={{ width: `${app.score}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm text-gray-400">{app.score}</span>
                </div>
              </td>
            </tr>
          ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Performance Trends */}
        <div className="bg-[#181818] shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4">Performance Trends</h3>
          <p className="text-gray-400 mb-6">Weekly performance metrics showing improvements across all applications.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Line Chart - Load Time Trends */}
            <div className="bg-[#282828] rounded-lg p-4 border border-gray-700">
              <h4 className="text-md font-medium text-white mb-4">Load Time Trends (seconds)</h4>
              <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData}>
            <XAxis dataKey="labels" tick={{ fill: '#FFFFFF' }} />
            <YAxis tick={{ fill: '#FFFFFF' }} />
            <Tooltip contentStyle={{ backgroundColor: '#282828', color: '#FFFFFF' }} />
            <Legend wrapperStyle={{ color: '#FFFFFF' }} />
            <Line type="monotone" dataKey="data" stroke="#8884d8" />
          </LineChart>
              </ResponsiveContainer>
            </div>
            
            {/* Radar Chart - Performance Metrics */}
            <div className="bg-[#282828] rounded-lg p-4 border border-gray-700">
              <h4 className="text-md font-medium text-white mb-4">Performance Metrics Comparison</h4>
              <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
            <PolarGrid stroke="#FFFFFF" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#FFFFFF' }} />
            <PolarRadiusAxis tick={{ fill: '#FFFFFF' }} />
          <Radar name="Current" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Performance Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#282828] p-4 rounded-lg">
              <h4 className="text-md font-medium text-white mb-2">Overall Improvement</h4>
              <div className="flex items-center">
          <div className="text-3xl font-bold text-green-600">24%</div>
          <div className="ml-2 text-sm text-gray-400">faster load times</div>
              </div>
            </div>
            
            <div className="bg-[#282828] p-4 rounded-lg">
              <h4 className="text-md font-medium text-white mb-2">Reliability Score</h4>
              <div className="flex items-center">
          <div className="text-3xl font-bold text-indigo-600">99.8%</div>
          <div className="ml-2 text-sm text-gray-400">uptime</div>
              </div>
            </div>
            
            <div className="bg-[#282828] p-4 rounded-lg">
              <h4 className="text-md font-medium text-white mb-2">User Satisfaction</h4>
                <div className="flex items-center">
                <div className="text-3xl font-bold text-indigo-600">92%</div>
                <div className="ml-2 text-sm text-gray-400">positive feedback</div>
                </div>
              </div>
              </div>
            </div>

            <div className="mt-8"></div> {/* Add space between sections */}
            
            <div className="p-4 bg-[#181818] shadow-lg rounded-xl gap-6 mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">Response Time of Last Runs</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={responseTimeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" tick={{ fill: '#FFFFFF' }} />
              <YAxis tick={{ fill: '#FFFFFF' }} />
              <Tooltip contentStyle={{ backgroundColor: '#282828', color: '#FFFFFF' }} />
              <Legend wrapperStyle={{ color: '#FFFFFF' }} />
              <Line type="monotone" dataKey="responseTime" stroke="#4F46E5" strokeWidth={2} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-[#181818] p-6 rounded-lg">
            <h3 className="text-white font-semibold mb-4">Areas of Improvement</h3>
            <div className="space-y-4">
              <div className="p-3 bg-[#282828] rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Database Query Optimization</span>
                  <span className="text-red-500">High Priority</span>
                </div>
                <p className="text-gray-400 text-sm">Slow queries detected in user profile service. Consider adding indexes and query optimization.</p>
              </div>
              <div className="p-3 bg-[#282828] rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Cache Hit Ratio</span>
                  <span className="text-yellow-500">Medium Priority</span>
                </div>
                <p className="text-gray-400 text-sm">Current ratio at 65%. Implement Redis caching for frequently accessed data.</p>
              </div>
              <div className="p-3 bg-[#282828] rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">API Rate Limiting</span>
                  <span className="text-yellow-500">Medium Priority</span>
                </div>
                <p className="text-gray-400 text-sm">Implement rate limiting to prevent API abuse and improve stability.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#181818] p-6 rounded-lg">
            <h3 className="text-white font-semibold mb-4">Common Errors & Solutions</h3>
            <div className="space-y-4">
              <div className="p-3 bg-[#282828] rounded-md">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertOctagon className="w-4 h-4 text-red-500" />
                  <span className="text-white font-medium">Connection Timeout</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">Database connections exceeding pool limit.</p>
                <div className="text-red-500 text-sm">Solution: Increase connection pool size and implement connection recycling.</div>
              </div>
              <div className="p-3 bg-[#282828] rounded-md">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertOctagon className="w-4 h-4 text-red-500" />
                  <span className="text-white font-medium">Memory Leak</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">Gradual memory increase in payment service.</p>
                <div className="text-red-500 text-sm">Solution: Fix object disposal in payment processing loop.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#181818] p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-semibold">Latest Performance Runs</h3>
            <select className="bg-[#282828] text-gray-400 border-none rounded-md px-3 py-1">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
            </select>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-[#282828] rounded-md">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <span className="text-white block">SHOP-1030 Load Test</span>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <User className="w-3 h-3" />
                    <span>John Doe</span>
                    <span>•</span>
                    <Calendar className="w-3 h-3" />
                    <span>Mar 15, 2024</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>14:30</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <span className="text-white block">95% Success</span>
                <span className="text-gray-400 text-sm">Duration: 45m</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#282828] rounded-md">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div>
                  <span className="text-white block">SHOP-1029 Stress Test</span>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <User className="w-3 h-3" />
                    <span>Jane Smith</span>
                    <span>•</span>
                    <Calendar className="w-3 h-3" />
                    <span>Mar 14, 2024</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>10:15</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <span className="text-white block">82% Success</span>
                <span className="text-gray-400 text-sm">Duration: 1h 15m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;