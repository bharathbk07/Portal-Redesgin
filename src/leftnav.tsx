import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  TestTube2,
  Activity,
  BarChart3,
  LineChart,
  Settings,
  ChevronRight,
  ChevronLeft,
  Gauge,
} from "lucide-react";

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}


function Sidebar({ isExpanded, toggleSidebar }: SidebarProps) {
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: TestTube2, label: "Test Configuration", path: "/experiment" },
    { icon: Activity, label: "Test Monitoring", path: "/test-monitoring" },
    { icon: BarChart3, label: "Results Viewer", path: "/results" },
    { icon: LineChart, label: "Analysis & Insights", path: "/analysis" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div
      className={`transition-all duration-300 bg-gray-900 text-white h-screen ${
        isExpanded ? "w-64" : "w-16"
      } flex flex-col p-3 shadow-xl fixed left-0 top-0 z-10`}
    >
      <div className="flex items-center mb-8 mt-4 px-2">
        {isExpanded ? (
          <>
            <Gauge className="h-8 w-8 text-blue-500 mr-2" />
            <span className="text-xl font-bold">PerformanceHub</span>
          </>
        ) : (
          <Gauge className="h-8 w-8 text-blue-500 mx-auto" />
        )}
      </div>

      <nav className="space-y-2 flex-grow">
        {navItems.map(({ icon: Icon, label, path }) => (
          <div
            key={label}
            className="relative flex items-center group"
          >
            <div
              className="flex items-center p-3 hover:bg-gray-700 rounded-md cursor-pointer transition-all w-full"
              onClick={() => navigate(path)}
            >
              <Icon className={`w-6 h-6 ${isExpanded ? "" : "mx-auto"}`} />
              <span
                className={`overflow-hidden transition-all duration-300 ${
                  isExpanded ? "ml-3 opacity-100 w-auto" : "opacity-0 w-0"
                }`}
              >
                {label}
              </span>
            </div>
            {!isExpanded && (
              <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                {label}
              </span>
            )}
          </div>
        ))}
      </nav>

      {/* Expand/Collapse Button */}
      <button
        onClick={toggleSidebar}
        className="p-3 bg-gray-800 rounded-md hover:bg-gray-700 flex items-center justify-center transition-all mt-auto"
      >
        {isExpanded ? (
          <span className="flex items-center">
            <ChevronLeft className="w-6 h-6" />
            <span className="ml-2">Collapse</span>
          </span>
        ) : (
          <ChevronRight className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}

export default Sidebar;