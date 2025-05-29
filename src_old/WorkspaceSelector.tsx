import React, { useState } from "react";
import { GitBranch, ChevronDown } from "lucide-react";

function WorkspaceSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const workspaces = [
    "Online Shop [DEV]",
    "Payment Gateway [PROD]",
    "User Service [STAGE]",
    "Auth Service [DEV]",
    "Order Processing [PROD]",
  ];

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <div
        className="flex items-center justify-between px-4 py-2 bg-[#282828] rounded-md cursor-pointer hover:bg-[#383838] transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <GitBranch className="w-4 h-4 text-gray-400" />
          <span className="text-white text-sm font-medium">
            Online Shop [DEV]
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 w-56 bg-[#282828] rounded-md shadow-lg mt-2 z-20 border border-gray-700">
          {workspaces.map((workspace, index) => (
            <div
              key={index}
              className="px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white rounded-md cursor-pointer transition"
              onClick={() => setIsOpen(false)}
            >
              {workspace}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WorkspaceSelector;
