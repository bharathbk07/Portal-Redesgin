import React, { useState } from "react";
import {
  Play,
  Pause,
  CheckCircle,
  BarChart3,
  FileText,
  MessageSquare,
  Mail,
  Activity,
  Save,
  XCircle,
  RotateCw,
} from "lucide-react";
import Sidebar from "./leftnav";
import WorkspaceSelector from "./WorkspaceSelector";
import UserProfileDropdown from "./UserProfileDropdown";

function ExperimentUI() {
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTool, setSelectedTool] = useState("NeoLoad");
  const [completedStages, setCompletedStages] = useState(3);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const totalStages = 6;

  const progressPercentage = Math.round((completedStages / totalStages) * 100);

  const performanceTools = ["NeoLoad", "Performance Center", "JMeter"];

  
  const stages = [
    { icon: CheckCircle, name: "Health Check ✅", description: "Ensures all services are running smoothly", highlight: false },
    { icon: BarChart3, name: "Performance Test ", description: "Measures system performance under load", highlight: true },
    { icon: FileText, name: "Monitoring Report", description: "Generates a summary of monitored metrics", highlight: false },
    { icon: MessageSquare, name: "Confluence Report", description: "Publishes results to the documentation platform", highlight: false },
    { icon: Activity, name: "MS Teams Alert ✅", description: "Sends an update to Microsoft Teams", highlight: false },
    { icon: Mail, name: "Email Report", description: "Sends a detailed email report", highlight: false },
  ];

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex h-screen bg-black text-gray-200">
      {/* Side Navigation */}
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />

      <div className={`flex flex-col flex-grow p-4 transition-all duration-300 ${isSidebarExpanded ? "ml-64" : "ml-16"}`}>
        {/* Top Navigation */}
        <div className="flex items-center justify-between p-4 bg-gray-900 shadow-md border border-gray-700 rounded-lg">
          <WorkspaceSelector />
          <UserProfileDropdown />
        </div>

        {/* Main Content */}
        <div className="flex flex-grow p-4 space-x-4">
          {/* Left: Experiment Panel */}
          <div className="w-1/4 bg-gray-900 p-4 rounded-md border border-gray-700">
            <h2 className="text-lg font-semibold text-white mb-4">Experiment Builder</h2>
            <div className="flex flex-col space-y-4">
              <button className="w-full py-2 bg-green-600 rounded-lg">Start</button>

              {stages.map(({ icon: Icon, name, description, highlight }, index) => (
                <div key={index} className="relative group">
                  <div className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${
                    highlight ? "bg-yellow-500 text-black font-bold" : "bg-gray-700"
                  }`}>
                    <Icon className="w-5 h-5 text-white mr-3" />
                    <span className="text-sm">{name}</span>
                  </div>

                  {/* Hover Tooltip */}
                  <div className="absolute left-full ml-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {description}
                  </div>
                </div>
              ))}

              <button className="w-full py-2 bg-red-600 rounded-lg">End</button>
            </div>
          </div>

          {/* Middle: Tips & Suggestions Panel */}
          <div className="w-2/4 bg-gray-900 p-6 rounded-md border border-gray-700 flex-grow">
            <h2 className="text-lg font-semibold text-white mb-4">Tips & Suggestions</h2>

            {/* TAP (Tips for Filling Experiment Details) */}
            <div className="bg-gray-800 p-4 rounded-md mb-4">
              <h3 className="text-md font-semibold text-green-400">🟢 TAP - Tips on Experiment Details</h3>
              <ul className="text-sm text-gray-300 mt-2 list-disc pl-4">
                <li><b>Tools:</b> Select the right performance tool (e.g., NeoLoad, JMeter, Performance Center) based on your test needs.</li>
                <li><b>Source Control:</b> Enter the Git repository and branch name to track changes effectively.</li>
                <li><b>Project Details:</b> Provide a clear scenario name to categorize tests efficiently.</li>
                <li><b>Validation:</b> Ensure correct configurations before execution to avoid test failures.</li>
              </ul>
            </div>

            {/* SUGGESTIONS (Why & When Performance Testing) */}
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="text-md font-semibold text-blue-400">🔵 Suggestions - Performance Testing</h3>
              <ul className="text-sm text-gray-300 mt-2 list-disc pl-4">
                <li><b>Why?</b> Performance testing ensures system stability, responsiveness, and scalability under load.</li>
                <li><b>When?</b> Before major releases, after infrastructure updates, or when user traffic spikes are expected.</li>
                <li><b>What?</b> Identify system bottlenecks, optimize response times, and enhance user experience.</li>
                <li><b>How?</b> Simulate real-world traffic, measure system behavior, and analyze failure points.</li>
              </ul>
            </div>
          </div>

          {/* Right: Progress & Experiment Details */}
          <div className="w-1/3 flex flex-col space-y-6">
            {/* Progress Panel */}
            <div className="bg-gray-900 p-6 rounded-md border border-gray-700">
              <h2 className="text-lg font-semibold text-white mb-4">Progress</h2>
              <div className="relative h-3 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-white mt-2">{progressPercentage}% Completed</p>
            </div>

            {/* Experiment Details Panel */}
            <div className="bg-gray-900 p-6 rounded-md border border-gray-700">
              <h2 className="text-lg font-semibold text-white">Experiment Details</h2>

              {/* Tools Selection */}
              <div className="mt-4">
                <h3 className="text-sm text-gray-400">Tools</h3>
                <select
                  className="w-full bg-gray-800 border border-gray-600 p-2 text-white mt-1"
                  value={selectedTool}
                  onChange={(e) => setSelectedTool(e.target.value)}
                >
                  {performanceTools.map((tool) => (
                    <option key={tool} value={tool}>{tool}</option>
                  ))}
                </select>
              </div>

              {/* Source Control */}
              <div className="mt-4">
                <h3 className="text-sm text-gray-400">Source Control</h3>
                <input type="text" className="w-full bg-gray-800 border border-gray-600 p-2 mt-1 text-white" placeholder="Git Repository" />
                <input type="text" className="w-full bg-gray-800 border border-gray-600 p-2 mt-1 text-white" placeholder="Branch Name" />
              </div>

              {/* Project Details */}
              <div className="mt-4">
                <h3 className="text-sm text-gray-400">Project Details</h3>
                <input type="text" className="w-full bg-gray-800 border border-gray-600 p-2 mt-1 text-white" placeholder="Scenario Name" />
              </div>
              
              <button className="w-full py-2 mt-4 bg-blue-600 rounded-lg">Validate</button>
              <button className="w-full py-2 mt-2 bg-gray-600 rounded-lg">Reset</button>
            </div>
          </div>
        </div>

        {/* Bottom: Controls */}
        <div className="flex justify-center space-x-4 mt-4">
          <button className="px-4 py-2 bg-green-600 rounded-md flex items-center space-x-2" onClick={() => setIsRunning(true)} disabled={isRunning}>
            <Play className="w-4 h-4" /> <span>Run</span>
          </button>
          <button className="px-4 py-2 bg-red-600 rounded-md flex items-center space-x-2" onClick={() => setIsRunning(false)} disabled={!isRunning}>
            <Pause className="w-4 h-4" /> <span>Stop</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded-md flex items-center space-x-2">
            <RotateCw className="w-4 h-4" /> <span>Retry</span>
          </button>
          <button className="px-4 py-2 bg-gray-600 rounded-md flex items-center space-x-2">
            <Save className="w-4 h-4" /> <span>Save</span>
          </button>
          <button className="px-4 py-2 bg-gray-600 rounded-md flex items-center space-x-2">
            <XCircle className="w-4 h-4" /> <span>Discard</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExperimentUI;