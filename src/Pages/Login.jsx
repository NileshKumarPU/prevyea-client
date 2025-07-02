import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";
import MovingText from "../components/MovingText";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
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

    if (success) {
      toast.success(message, {
        position: "bottom-right",
      });
      setTimeout(() => {
        navigate("/admin");
        location.reload();
      }, 1000);
    } else {
      toast.error(message, {
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      {/* <button value={"Signup"}>
        <Link to="/signup">Sign Up</Link>
      </button> */}

      {/* ff */}
      <div className=" p-6 bg-amber-50 min-h-screen ">
        <MovingText text="Register now to unlock more features."/>

        <div className="max-w-md mx-auto p-6 bggreen shadow-md rounded-xl ">
          <h2 className="text-2xl font-bold mb-6 text-center">
            User Login
          </h2>
          <form onSubmit={login}>
            <div className="mb-4 ">
              <label className="block  mb-2">Email<span className="text-red-500">*</span></label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 bg-amber-50"
                value={email}
                placeholder="abcd@xyz.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block  mb-2">Password<span className="text-red-500">*</span></label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 bg-amber-50"
                value={pass}
                placeholder="Abc@123"
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </div>
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
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
}
