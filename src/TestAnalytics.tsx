import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import Sidebar from "./leftnav";
import WorkspaceSelector from "./WorkspaceSelector";
import UserProfileDropdown from "./UserProfileDropdown";

const dummyReport = {
  testNumber: "TST-20250210-001",
  triggeredBy: "John Doe",
  triggeredTime: "Feb 10, 2025 - 14:30",
  endTime: "Feb 10, 2025 - 15:00",
  mode: "Ad-hoc",
  duration: "30m",
  status: "Passed",
  errorPercentage: "1.2%",
  avgResponseTime: "250ms",
  peakLoad: "5000 users",
  volume: "150k requests",
  numUsers: "500",
  scriptName: "Checkout_Script"
};

const transactionData = [
  { transaction: "Login", mean: 180, avg: 200, max: 250, min: 160, error: 2, passed: 98, total: 100, p90: 210, p95: 230, p99: 245 },
  { transaction: "Add to Cart", mean: 320, avg: 350, max: 400, min: 300, error: 5, passed: 95, total: 100, p90: 370, p95: 390, p99: 398 },
  { transaction: "Checkout", mean: 480, avg: 500, max: 550, min: 450, error: 3, passed: 97, total: 100, p90: 520, p95: 540, p99: 548 },
  { transaction: "Payment", mean: 550, avg: 600, max: 700, min: 520, error: 6, passed: 94, total: 100, p90: 640, p95: 680, p99: 695 }
];

function TestAnalyticsInsights() {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleChatSubmit = () => {
    if (chatInput.trim() === "") return;
    setChatMessages([...chatMessages, { message: chatInput, sender: "User" }]);
    setChatInput("");
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex h-screen bg-black text-gray-200">
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div className={`flex flex-grow flex-col p-6 transition-all duration-300 ${isSidebarExpanded ? "ml-64" : "ml-16"}`}>
        <div className="flex items-center justify-between p-4 bg-black shadow-md border border-gray-700 rounded-lg">
          <WorkspaceSelector />
          <UserProfileDropdown />
        </div>

        <h1 className="text-2xl font-bold text-white mb-6">Test Analytics & Insights</h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Performance Report</h2>
            <ul className="text-gray-300 text-sm grid grid-cols-2 gap-4">
              {Object.entries(dummyReport).map(([key, value]) => (
                <li key={key} className="mb-2 p-2 bg-gray-800 rounded-md shadow-sm"><strong className="text-white capitalize">{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6">Trend Graph</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={transactionData}>
                <XAxis dataKey="transaction" tick={{ fill: "#FFFFFF" }} />
                <YAxis tick={{ fill: "#FFFFFF" }} />
                <CartesianGrid stroke="#444" />
                <Tooltip contentStyle={{ backgroundColor: "#222", color: "#FFF" }} />
                <Bar dataKey="avg" fill="#4F46E5" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Chat Window */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 flex flex-col">
            <h2 className="text-xl font-semibold text-white mb-4">AI Insights Chat</h2>
            <div className="flex-1 overflow-y-auto bg-gray-800 p-3 rounded-md h-60">
              {chatMessages.map((chat, index) => (
                <p key={index} className="text-gray-300 mb-2"><strong>{chat.sender}:</strong> {chat.message}</p>
              ))}
            </div>
            <div className="mt-3 flex">
              <input
                type="text"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                placeholder="Ask AI about results..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <button
                className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={handleChatSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mt-6">
          <h2 className="text-xl font-semibold text-white mb-4">Transaction Metrics</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-300">
              <thead>
                <tr className="bg-gray-800">
                  {Object.keys(transactionData[0]).map((key) => (
                    <th key={key} className="p-2 text-left text-white capitalize hover:tooltip hover:bg-gray-700" title={`Description for ${key}`}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transactionData.map((txn, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                    {Object.values(txn).map((value, idx) => (
                      <td key={idx} className="p-2">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestAnalyticsInsights;
