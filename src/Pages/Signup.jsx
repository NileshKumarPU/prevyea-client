import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthOTP } from "../components";
import { toast, ToastContainer } from "react-toastify";
import { PacmanLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  document.title="Signup | Prevyea "

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

  function showpass() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

  return (
    <>
      {/* <div className="flex justify-center w-4/5 m-auto mt-4 mb-4 min-h-screen"> */}
        <ToastContainer />
        {showAuth ? (
          <AuthOTP userData={user} />
        ) : (
          // <div className=" p-6 bg-amber-50 min-h-screen ">
          //   <div className="max-w-md mx-auto p-6 bggreen shadow-md rounded-xl min-w-sm ">
          //     <h2 className="text-2xl font-bold mb-6 text-center">
          //       User SignUp
          //     </h2>
          //     <form onSubmit={handleSignup}>
          //       <div className="mb-4 ">
          //         <label className="block  ">
          //           Username<span className="text-red-500">*</span>
          //         </label>
          //         <input
          //           type="text"
          //           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 bg-amber-50"
          //           value={username}
          //           placeholder="abcd34"
          //           onChange={(e) => setUsername(e.target.value)}
          //           required
          //         />
          //       </div>
          //       <div className="mb-4 ">
          //         <label className="block  ">
          //           Fullname<span className="text-red-500">*</span>
          //         </label>
          //         <input
          //           type="text"
          //           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 bg-amber-50"
          //           value={fullname}
          //           placeholder="John Doe"
          //           onChange={(e) => setfullname(e.target.value)}
          //           required
          //         />
          //       </div>
          //       <div className="mb-4 ">
          //         <label className="block  ">
          //           Email<span className="text-red-500">*</span>
          //         </label>
          //         <input
          //           type="email"
          //           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 bg-amber-50"
          //           value={email}
          //           placeholder="abcd@xyz.com"
          //           onChange={(e) => setEmail(e.target.value.toLowerCase())}
          //           required
          //         />
          //       </div>
          //       <div className="mb-6">
          //         <label className="block  ">
          //           Password<span className="text-red-500">*</span>
          //         </label>
          //         <input
          //           type="password"
          //           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 bg-amber-50"
          //           value={password}
          //           placeholder="Abc@123"
          //           onChange={(e) => setPassword(e.target.value)}
          //           required
          //         />
          //       </div>
          //       <div className="w-full my-2 rounded-lg flex justify-between">
          //         <div className="w-1/2 border rounded-lg ">
          //           <button
          //             className="w-full rounded-lg px-4 py-2 bgblue"
          //             ref={user_ref}
          //             onClick={() => {
          //               setAdmin(false);
          //             }}
          //           >
          //             {" "}
          //             User
          //           </button>
          //         </div>

          //         <div className="w-1/2 border rounded-lg ">
          //           <button
          //             className="w-full rounded-lg px-4 py-2 "
          //             ref={admin_ref}
          //             onClick={() => {
          //               alert("Not allowed to Signup as Admin");
          //             }}
          //           >
          //             Admin
          //           </button>
          //         </div>
          //       </div>
          //       {loading ? (
          //         <div className="flex justify-center">
          //           {" "}
          //           <HashLoader />
          //         </div>
          //       ) : (
          //         <button
          //           type="submit"
          //           className="w-full outline-1  py-2 rounded-lg  "
          //         >
          //           SignUp
          //         </button>
          //       )}

          //       <ToastContainer />
          //     </form>
          //   </div>
          // </div>
          
          <div className="min-h-screen md:min-h-fit bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* icon on top */}

        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                PrevYea
              </span> account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSignup}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="usernamae"
                  name="username"
                  type="username"
                  
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Fullname
              </label>
              <div className="mt-1">
                <input
                  id="fullname"
                  name="fullname"
                  type="fullname"
                 
                  required
                  value={fullname}
                  onChange={(e) => setfullname(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value.toLowerCase())}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="show_password"
                  name="show_password"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  onClick={showpass}
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Show Password
                </label>
              </div>

              {/* <div className="text-sm">
                 <Link to="/forgotpass" className="font-medium text-indigo-600 hover:text-indigo-500">
                
                 Forgot Password?</Link>
              </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading? <PacmanLoader color="rgba(255, 255, 255, 1)" size={11}/> : "Sign Up"}
              
              </button>
            </div>
          </form>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <button
                type="button"
                className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <img className="w-5 h-5 mr-2" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
                Google
              </button>
            </div>

            <div>
              <button
                type="button"
                className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12a12.004 12.004 0 008.207 11.387c.6.11.82-.26.82-.577v-2.016c-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.091-.746.082-.73.082-.73 1.205.084 1.838 1.24 1.838 1.24 1.072 1.835 2.812 1.305 3.497.998.108-.776.42-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.932 0-1.31.467-2.38 1.236-3.22-.124-.303-.536-1.524.116-3.176 0 0 1.008-.323 3.3 1.23a11.49 11.49 0 013.003-.404c1.018.005 2.044.138 3.003.404 2.292-1.553 3.3-1.23 3.3-1.23.652 1.652.24 2.873.117 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.804 5.628-5.475 5.922.43.372.814 1.104.814 2.227v3.293c0 .32.218.694.825.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z"
                  />
                </svg>
                GitHub
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already a member?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign In Here     
            </Link>
          </p>
        </div>
      </div>
        <ToastContainer />
    </div>
        )}
      {/* </div> */}
    </>
  );
}
