import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function CampusConnect() {
  const cookies = useCookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      const { data } = await axios.post(
        "https://prevyea-server.vercel.app/",
        {},
        { withCredentials: true }
      );
      const { success, user } = data;
      setIsLoggedIn(success);

      return;
    };
    verifyCookie();
  }, [cookies]);



  return (
   <>
   
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="bg-gray-900 rounded-2xl shadow-xl max-w-xl w-full text-center p-10">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to ChatZone 💬
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          A place to chat, connect, and collaborate in real-time.
        </p>
        <a
          href="/chat"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Enter Chat App 🚀
        </a>
      </div>
    </div>
   </>
  );
}
