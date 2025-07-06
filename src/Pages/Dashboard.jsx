import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setfullname] = useState("");
  const [cookies, removeCookies] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyCookie = async () => {
      const { data } = await axios.post(
        "https://prevyea-server.vercel.app/",
        {},
        { withCredentials: true }
      );
      const { status, user, email, fullname } = data;
      setUsername(user);
      setEmail(email);
      setfullname(fullname);
      if (!success) {
        navigate("/login");
      }
      return;
    };
    verifyCookie();
  }, [cookies, navigate, removeCookies]);
  return (
    <>
      <div className="w-full flex flex-col justify-center text-center min-h-screen">
        <h1>Dashboard</h1>

        <div>
          <h3>Username: {username}</h3>
          <h3>Fullname: {fullname}</h3>
          <h3>E-mail: {email}</h3>
        </div>
      </div>
    </>
  );
}
