import useVerifyCookie from "../Hooks/useVerify";
import { useState } from "react";
import Profile from "../components/Profile";

export default function Dashboard() {
  const { username, email, fullname, loading } = useVerifyCookie();
  const [activeTab, setActiveTab] = useState("profile");
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile username={username} email={email} fullname={fullname}/>;
      case "settings":
        return <div>Settings Content</div>;
      case "security":
        return <div>Security Content</div>;
      case "notifications":
        return <div>Notifications Content</div>;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bggreen text-black flex flex-col p-4 space-y-4">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
            <div className="grid space-y-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`text-left px-2 py-1 rounded ${
                  activeTab === "profile" ? "bg-gray-600" : ""
                }`}
                >
                Update Profile
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`text-left px-2 py-1 rounded ${
                  activeTab === "settings" ? "bg-gray-600" : ""
                }`}
              >
                Settings
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`text-left px-2 py-1 rounded ${
                  activeTab === "security" ? "bg-gray-600" : ""
                }`}
              >
                Security
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`text-left px-2 py-1 rounded ${
                  activeTab === "notifications" ? "bg-gray-600" : ""
                }`}
                >
                Notifications
              </button>
            </div>
            </div>

                {loading ? (
                  <div className="w-full flex justify-center max-h-screen m-auto">
                    <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-[#2CB8C6]"></div>
                    <p>Checking authentication...</p>
                  </div>
                ) : (
                  
                  
        <div className="flex-1 bg-amber p-6">{renderContent()}</div>
      )}
      </div>
    </>
  );
}
