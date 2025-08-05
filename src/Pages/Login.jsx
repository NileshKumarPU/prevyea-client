import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link, Route, Router, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";
import MovingText from "../components/MovingText";
import { ClipLoader, HashLoader, MoonLoader, PacmanLoader } from "react-spinners";
import { ForgotPass } from "../components";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  document.title="Log In | Prevyea "

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await axios({
        method: "post",
        url: `https://prevyea-server.vercel.app/login`,
        data: {
          email: email,
          password: pass,
        },
        withCredentials: true,
      });

      const { success, message } = result.data;
      setLoading(false);
      if (success) {
        toast.success(message, {
          position: "bottom-right",
        });

        setTimeout(() => {
          window.location.href = "/"; // Navigates + reloads the whole app
        }, 1000);
      } else {
        toast.error(message, {
          position: "bottom-left",
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
    <div className="min-h-screen md:min-h-fit bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* icon on top */}
        {/* <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100">
          <svg
            className="w-8 h-8 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2C5.58 2 2 6.48 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" />
          </svg>
        </div> */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={login}>
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
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                 <Link to="/forgotpass" className="font-medium text-indigo-600 hover:text-indigo-500">
                
                 Forgot Password?</Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading? <PacmanLoader color="rgba(255, 255, 255, 1)" size={11}/> : "Sign in"}
              
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
            Not a member?{' '}
            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign Up Here     
            </Link>
          </p>
        </div>
      </div>
        <ToastContainer />
    </div>


    {/* old login */}
      {/* <div className=" p-6 bg-amber-50 min-h-screen ">
        <MovingText text="Register now to unlock more features." />

        <div className="max-w-md mx-auto p-6 bggreen shadow-md rounded-xl ">
          <h2 className="text-2xl font-bold mb-6 text-center">User Login</h2>
          <form onSubmit={login}>
            <div className="mb-4 ">
              <label className="block  mb-2">
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
              <label className="block  mb-2">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 bg-amber-50"
                value={pass}
                placeholder="Abc@123"
                onChange={(e) => setPass(e.target.value)}
                required
              />
              <Link to="/forgotpass">Forgot Password?</Link>
            </div>

            {loading ? (
              <div className="flex justify-center">
                <HashLoader />
              </div>
            ) : (
              <div>
                <button
                  type="submit"
                  className="w-full outline-1  py-2 rounded-lg hover:bg-blue-700 transition duration-300 "
                >
                  Login
                </button>

                <h4 className="text-center">OR</h4>
                <Link to="/signup">
                  <button
                    value={"Signup"}
                    type="button"
                    className="w-full bgblue py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Sign Up{" "}
                    <SquareArrowOutUpRight className="inline align-middle  " />
                  </button>
                </Link>
              </div>
            )}

            <ToastContainer />
          </form>
        </div>
      </div> */}
    </>
  );
}
