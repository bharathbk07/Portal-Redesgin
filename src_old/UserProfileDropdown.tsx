import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Settings, LogOut, ChevronDown, Bell, Sun, Moon, X } from "lucide-react";

function UserProfileDropdown({ setIsAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Dummy state for theme toggle
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    "Load test completed successfully.",
    "High response time detected in checkout flow.",
    "New performance report is available.",
    "Scheduled test will run at 10:00 AM tomorrow.",
    "CPU usage crossed threshold in API service."
  ]);

  const navigate = useNavigate();
  const userName = "Bharath Kumar M"; // Replace with dynamic user name
  const userEmail = "bharath@example.com"; // Replace with dynamic email
  const lastLogin = "Last login: Mar 15, 2024 - 14:30"; // Replace with dynamic last login

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  const clearNotifications = () => {
    setNotifications([]);
    setShowNotifications(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="relative inline-flex items-center space-x-4">
      {/* Notification Icon */}
      <div
        className="relative cursor-pointer p-2 bg-[#282828] rounded-md hover:bg-[#383838] transition"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <Bell className="w-5 h-5 text-gray-400" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
        )}
      </div>

      {/* Notification Panel - Positioned Below Notification Icon */}
      {showNotifications && (
        <div className="absolute top-full mt-2 right-0 w-64 bg-[#282828] rounded-md shadow-lg z-50 border border-gray-700 p-3">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-gray-300">Notifications</h3>
            <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" onClick={clearNotifications} />
          </div>
          {notifications.length > 0 ? (
            <ul className="text-sm text-gray-400 space-y-2">
              {notifications.map((notification, index) => (
                <li key={index} className="bg-gray-700 p-2 rounded-md">{notification}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No new notifications</p>
          )}
        </div>
      )}

      {/* Theme Toggle Slider */}
      <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700 transition">
        {isDarkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
      </button>

      {/* Profile Button */}
      <div
        className="relative flex items-center space-x-2 px-4 py-2 bg-[#282828] rounded-md cursor-pointer hover:bg-[#383838] transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <User className="w-5 h-5 text-gray-400" />
        <span className="text-white text-sm font-medium">{userName}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-[#282828] rounded-md shadow-lg z-50 border border-gray-700">
          <div className="px-4 py-2 text-gray-300">
            <p className="text-sm">{userEmail}</p>
            <p className="text-xs text-gray-500">{lastLogin}</p>
          </div>
          <div
            className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:bg-[#3a3a3a] hover:text-white cursor-pointer transition"
            onClick={() => console.log("Profile Settings")}
          >
            <Settings className="w-4 h-4" />
            <span>Profile Settings</span>
          </div>
          <div
            className="flex items-center space-x-2 px-4 py-2 text-red-400 hover:bg-[#3a3a3a] hover:text-red-500 cursor-pointer transition"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfileDropdown;
