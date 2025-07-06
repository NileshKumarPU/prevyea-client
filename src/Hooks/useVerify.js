import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useVerifyCookie = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          "https://prevyea-server.vercel.app/",
          {},
          { withCredentials: true }
        );

        const { success, user, email, fullname } = data;

        if (!success) {
          navigate("/login");
        } else {
          setUsername(user);
          setEmail(email);
          setFullname(fullname);
        }
      } catch (err) {
        console.error("Error verifying cookie:", err);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    verifyCookie();
  }, [navigate]);

  return { username, email, fullname, loading };
};

export default useVerifyCookie;
