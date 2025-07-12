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
   
   <h1>hhhhhhhhhhhhhhh</h1>
   </>
  );
}
