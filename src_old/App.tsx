import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./leftnav";
import HomePage from "./homepage";
import WorkspaceSelector from "./WorkspaceSelector";
import UserProfileDropdown from "./UserProfileDropdown";
import ExperimentUI from "./ExperimentUI";
import ResultViewer from "./ResultsViewerPage";
import TestMonitoring from "./TestMonitoring";
import SettingsPage from "./Settings";
import TestAnalyticsInsights from "./TestAnalytics";
import LoginPage from "./Login";

function Layout({ setIsAuthenticated }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <div className="flex h-screen">
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      
      <div className={`flex flex-col flex-grow transition-all duration-300 ${isSidebarExpanded ? "ml-64" : "ml-16"}`}>
        <div className="flex items-center justify-between p-4 bg-[#282828] shadow-md border border-gray-700 rounded-lg m-2">
          <WorkspaceSelector />
          <UserProfileDropdown setIsAuthenticated={setIsAuthenticated} />
        </div>

        <div className="transition-all duration-300 flex-grow p-4">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/" element={isAuthenticated ? <Layout setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" />} />
        <Route path="/experiment" element={isAuthenticated ? <ExperimentUI /> : <Navigate to="/login" />} />
        <Route path="/results" element={isAuthenticated ? <ResultViewer /> : <Navigate to="/login" />} />
        <Route path="/test-monitoring" element={isAuthenticated ? <TestMonitoring /> : <Navigate to="/login" />} />
        <Route path="/settings" element={isAuthenticated ? <SettingsPage /> : <Navigate to="/login" />} />
        <Route path="/analysis" element={isAuthenticated ? <TestAnalyticsInsights /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
