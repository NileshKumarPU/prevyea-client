import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthOTP } from "../components";
import { toast, ToastContainer } from "react-toastify";
import { HashLoader } from "react-spinners";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidGmail = (email) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const user = {
    username: username,
    fullname: fullname,
    email: email,
    password: password,
    admin: admin,
  };
  const admin_ref = useRef(null);
  const user_ref = useRef(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isValidGmail(email)) {
      toast.error("Please enter a valid Gmail address.");
      setLoading(false);
      return;
    }

    const result = await axios({
      method: `post`,
      url: `https://prevyea-server.vercel.app/otp`,
      data: {
        email: email,
      },
    });

    setLoading(false);
    const { success, message } = result.data;
    if (success) {
      setShowAuth(success); // Shows screen for entering otp.
      toast.success(message);
    } else {
      toast(message, { position: "bottom-right" });
    }
  };

  return (
    <>
      <div className="flex justify-center w-4/5 m-auto mt-4 mb-4 min-h-screen">
        <ToastContainer />
        {showAuth ? (
          <AuthOTP userData={user} />
        ) : (
          <div className=" p-6 bg-amber-50 min-h-screen ">
            <div className="max-w-md mx-auto p-6 bggreen shadow-md rounded-xl min-w-sm ">
              <h2 className="text-2xl font-bold mb-6 text-center">
                User SignUp
              </h2>
              <form onSubmit={handleSignup}>
                <div className="mb-4 ">
                  <label className="block  ">
                    Username<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 bg-amber-50"
                    value={username}
                    placeholder="abcd34"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 ">
                  <label className="block  ">
                    Fullname<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 bg-amber-50"
                    value={fullname}
                    placeholder="John Doe"
                    onChange={(e) => setfullname(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 ">
                  <label className="block  ">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 bg-amber-50"
                    value={email}
                    placeholder="abcd@xyz.com"
                    onChange={(e) => setEmail(e.target.value.toLowerCase())}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block  ">
                    Password<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 bg-amber-50"
                    value={password}
                    placeholder="Abc@123"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full my-2 rounded-lg flex justify-between">
                  <div className="w-1/2 border rounded-lg ">
                    <button
                      className="w-full rounded-lg px-4 py-2 bgblue"
                      ref={user_ref}
                      onClick={() => {
                        setAdmin(false);
                      }}
                    >
                      {" "}
                      User
                    </button>
                  </div>

                  <div className="w-1/2 border rounded-lg ">
                    <button
                      className="w-full rounded-lg px-4 py-2 "
                      ref={admin_ref}
                      onClick={() => {
                        alert("Not allowed to Signup as Admin");
                      }}
                    >
                      Admin
                    </button>
                  </div>
                </div>
                {loading ? (
                  <div className="flex justify-center">
                    {" "}
                    <HashLoader />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full outline-1  py-2 rounded-lg  "
                  >
                    SignUp
                  </button>
                )}

                <ToastContainer />
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
