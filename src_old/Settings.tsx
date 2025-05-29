import React, { useState } from 'react';
import { ChevronDown, Settings, Edit, Trash2, Eye } from 'lucide-react';
import Sidebar from "./leftnav";
import WorkspaceSelector from "./WorkspaceSelector";
import UserProfileDropdown from "./UserProfileDropdown";

function SettingsPage() {
  const [monitoringTool, setMonitoringTool] = useState('appdynamics');
  const [parentPage, setParentPage] = useState('');
  const [teamsChannel, setTeamsChannel] = useState('');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleMonitoringToolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonitoringTool(event.target.value);
  };

  const handleParentPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParentPage(event.target.value);
  };

  const handleTeamsChannelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamsChannel(event.target.value);
  };

  const handleRuleAction = (action: string) => {
    alert(`${action} rule`);
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex h-screen bg-black text-gray-200">
      {/* Left Navigation */}
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`flex flex-col flex-grow transition-all duration-300 ${isSidebarExpanded ? "ml-64" : "ml-16"}`}>
        {/* Top Navbar */}
        <div className="flex items-center justify-between p-4 bg-black shadow-md border border-gray-700 rounded-lg">
          <WorkspaceSelector />
          <UserProfileDropdown />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Top Bar */}
          <div className="bg-[#181818] p-4 rounded-lg mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Settings</h1>
          </div>

          {/* Application Monitoring Section */}
          <div className="bg-[#181818] p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Application Monitoring</h2>
            <div className="mb-4">
              <label className="text-white block mb-2">Select Monitoring Tool</label>
              <select
                value={monitoringTool}
                onChange={handleMonitoringToolChange}
                className="bg-[#282828] text-white px-3 py-2 rounded-md w-full"
              >
                <option value="appdynamics">AppDynamics</option>
                <option value="splunk">Splunk</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="text-white block mb-2">Application Name</label>
              <p className="bg-[#282828] text-white px-3 py-2 rounded-md">E-Commerce Platform</p>
            </div>
            <div className="mb-4">
              <label className="text-white block mb-2">Server Name</label>
              <p className="bg-[#282828] text-white px-3 py-2 rounded-md">Server-001</p>
            </div>
            <div>
              <h3 className="text-white mb-2">Monitoring Metrics</h3>
              <ul className="text-gray-400 bg-[#282828] p-3 rounded-md">
                <li>Hardware Memory Metrics</li>
                <li>Java Memory Usage</li>
                <li>Calls per Minute</li>
              </ul>
            </div>
          </div>

          {/* Notification Section */}
          <div className="bg-[#181818] p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Notifications</h2>
            <div className="mb-4">
              <h3 className="text-white mb-2">Confluence</h3>
              <input
                type="text"
                value={parentPage}
                onChange={handleParentPageChange}
                placeholder="Parent Page"
                className="bg-[#282828] text-white px-3 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <h3 className="text-white mb-2">MS Teams</h3>
              <input
                type="text"
                value={teamsChannel}
                onChange={handleTeamsChannelChange}
                placeholder="Teams Channel Link"
                className="bg-[#282828] text-white px-3 py-2 rounded-md w-full"
              />
            </div>
          </div>

          {/* Admin Rules Section */}
          <div className="bg-[#181818] p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Admin Rules</h2>
            <div className="flex items-center justify-between">
              <div className="text-white">Performance Test Stage cannot be removed from stages</div>
              <div className="space-x-4 flex items-center">
                <div className="relative group">
                  <Eye className="w-5 h-5 text-white cursor-pointer" title="View" onClick={() => handleRuleAction('View')} />
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-6 px-2 py-1 bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100">View</span>
                </div>
                <div className="relative group">
                  <Edit className="w-5 h-5 text-gray-400 cursor-not-allowed" />
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-6 px-2 py-1 bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100">Edit (Disabled by Admin)</span>
                </div>
                <div className="relative group">
                  <Trash2 className="w-5 h-5 text-gray-400 cursor-not-allowed" />
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-6 px-2 py-1 bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100">Delete (Disabled by Admin)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
