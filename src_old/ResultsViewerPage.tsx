import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Download,
  Mail,
  BarChart3,
  Trash2,
  Layers,
  Filter,
  List,
  Grid,
} from "lucide-react";
import Sidebar from "./leftnav";
import WorkspaceSelector from "./WorkspaceSelector";
import UserProfileDropdown from "./UserProfileDropdown";

const experiments = Array.from({ length: 14 }, (_, i) => `Experiment ${i + 1}`);

const results = Array.from({ length: 14 }, (_, i) => ({
  number: `EXP-${String(i + 1).padStart(3, "0")}`,
  name: `Test - Scenario ${i + 1}`,
  triggeredBy: ["John Doe", "Alice Smith", "Michael Lee", "Emma Wilson", "Robert Brown", "Sophia Green"][i % 6],
  date: `Feb ${9 - (i % 7)}, 2025`,
  time: `${14 + (i % 6)}:30`,
  mode: i % 2 === 0 ? "Scheduled" : "Ad-hoc",
  endTime: `${15 + (i % 6)}:30`,
  status: ["Passed", "Failed", "Warning", "Running", "Stopped"][i % 5],
  success: i % 5 === 3 ? "--" : `${50 + (i % 50)}%`,
  duration: `${30 + (i % 30)} min`
}));

function ExperimentUI() {
  const [selectedExperiment, setSelectedExperiment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isGridView, setIsGridView] = useState(true);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const filteredExperiments = experiments.filter((exp) =>
    exp.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex h-screen bg-black text-gray-200">
      {/* Side Navigation */}
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />

      <div className={`flex flex-col flex-grow transition-all duration-300 ${isSidebarExpanded ? "ml-64" : "ml-16"}`}>
        {/* Top Navbar */}
        <div className="flex items-center justify-between p-4 bg-black shadow-md border border-gray-700 rounded-lg m-2 w-full">
          <WorkspaceSelector />
          <UserProfileDropdown />
        </div>

        {/* Experiment Selection + Search + Filters */}
        <div className="p-4 border border-gray-600 bg-black rounded-lg w-full">
          <h2 className="text-sm font-semibold text-gray-300 mb-2">SELECT EXISTING EXPERIMENT</h2>
          <div className="flex items-center space-x-4 w-full">
            {/* Experiment Dropdown */}
            <div className="relative w-1/4">
              <button
                className="flex items-center justify-between w-full px-3 py-2 bg-gray-800 text-gray-300 rounded-md border border-gray-600 hover:bg-gray-700"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedExperiment || "Select Experiment"}
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-full bg-gray-800 border border-gray-600 rounded-md shadow-lg z-50">
                  <div className="flex items-center px-3 py-2 border-b border-gray-700 bg-gray-900">
                    <Search className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type="text"
                      className="w-full bg-transparent text-gray-300 placeholder-gray-500 outline-none"
                      placeholder="Search experiment..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="max-h-40 overflow-y-auto">
                    {filteredExperiments.length > 0 ? (
                      filteredExperiments.map((exp) => (
                        <div
                          key={exp}
                          className="px-3 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer"
                          onClick={() => {
                            setSelectedExperiment(exp);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {exp}
                        </div>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-gray-500">No results found</div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Search Bar */}
            <input
              type="text"
              className="w-1/4 bg-gray-800 border border-gray-600 p-2 text-white rounded-lg"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Filter, Search & View Buttons */}
            <button className="p-2 bg-gray-700 rounded-lg">
              <Filter className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 bg-gray-700 rounded-lg">
              <Search className="w-5 h-5 text-white" />
            </button>
            <button
              className={`p-2 rounded-lg ${isGridView ? "bg-blue-600" : "bg-gray-700"}`}
              onClick={() => setIsGridView(true)}
            >
              <Grid className="w-5 h-5 text-white" />
            </button>
            <button
              className={`p-2 rounded-lg ${!isGridView ? "bg-blue-600" : "bg-gray-700"}`}
              onClick={() => setIsGridView(false)}
            >
              <List className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Experiment Results */}
          <h2 className="text-sm font-semibold text-gray-300 mt-6 mb-2">EXPERIMENT RESULTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {results.map((result, index) => (
              <div key={index} className="bg-black border border-gray-700 rounded-lg p-4 w-full">
                <h3 className="text-md font-semibold text-gray-300">{result.number} - {result.name}</h3>
                <p className="text-sm text-gray-400">Triggered by: {result.triggeredBy}</p>
                <p className="text-sm text-gray-500">{result.date} | {result.time}</p>
                <p className="text-sm text-gray-400">Mode: {result.mode}</p>
                <p className="text-sm text-gray-400">End Time: {result.endTime}</p>
                <p className="text-sm text-gray-400">Duration: {result.duration}</p>
                <p className={`text-sm font-semibold ${
                  result.status === "Passed" ? "text-green-500" :
                  result.status === "Failed" ? "text-red-500" :
                  result.status === "Warning" ? "text-yellow-500" :
                  result.status === "Running" ? "text-blue-500" :
                  "text-gray-400"
                }`}>
                  Status: {result.status}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center mt-2 space-x-4">
                  <Download className="w-5 h-5 text-gray-300 hover:text-white" />
                  <Mail className="w-5 h-5 text-gray-300 hover:text-white" />
                  <BarChart3 className="w-5 h-5 text-gray-300 hover:text-white" />
                  <Layers className="w-5 h-5 text-gray-300 hover:text-white" />
                  <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperimentUI;
