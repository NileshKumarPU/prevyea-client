import React from "react";
import { ShieldAlert } from "lucide-react";

export default function UnauthorizedAccess(){


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-md w-full">
        <div className="flex justify-center text-red-600 mb-6">
          <ShieldAlert size={64} strokeWidth={1.5} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Unauthorized Access</h1>
        <p className="text-gray-600 mb-6">
          You don’t have permission to access this page. Only Admin allowed.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="bgblue hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-all"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};
