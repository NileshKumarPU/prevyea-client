import {React, useEffect, useState } from "react";
import axios from "axios";
import { HashLoader, MoonLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [seconds, setSeconds] = useState(5);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate= useNavigate();
    
  const success =() =>{

      useEffect(() => {
          const interval = setInterval(() => {
              setSeconds((prev) => prev - 1);
            }, 1000);
            
            // Redirect when countdown hits 0
            if (seconds === 0) {
                navigate('/login');
            }
            
            return () => clearInterval(interval);
        }, [seconds, navigate]);
    }

  // Step 1: Send OTP to email
  const sendOtp = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await axios.post(
        "https://prevyea-server.vercel.app/forgotpassreqotp",
        {
          email,
        }
      );
      const { success, message } = res.data;
      if (success) {
        setLoading(false);
        toast.success(message);
        setTimeout(() => {
          setOtpSent(true);
        }, 1000);
      } else {
        setLoading(false);
        toast.error(message);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Error sending OTP");
    }
  };

  // Step 2: Verify OTP and update password
  const resetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://prevyea-server.vercel.app/resetpass",
        {
          email,
          otp,
          newPassword,
        }
      );
      setLoading(false);
      if (res.data.success) {
        toast.success("Password updated successfully");
        success();
        // <p>You will be redirected to the homepage in 5 seconds...</p>
      } else {
        toast.error("Invalid OTP or request");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error resetting password");
      setLoading(false);
      setTimeout(()=>{
          setOtpSent(false);

      },1000)
    }
  };

  return (
    <div className="max-w-md  mx-auto p-6 bggreen shadow-lg rounded-lg my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>

      {!otpSent ? (
        <>
          {" "}
          <form onSubmit={sendOtp}>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-white p-2 border rounded mb-4"
              value={email}
              placeholder="abc@xyz.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {loading ? (
              <div className="flex justify-center">
                <HashLoader />
              </div>
            ) : (
              <button
                type="submit"
                className="bgblue text-black px-4 py-2 rounded w-full"
              >
                Send OTP
              </button>
            )}
          </form>
        </>
      ) : (
        <>
        {}
          <form onSubmit={resetPassword}>
            <label className="block mb-2">Enter OTP</label>
            <input
              type="text"
              className="w-full p-2 bg-white border rounded mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />

            <label className="block mb-2">New Password</label>
            <input
              type="password"
              className="w-full p-2 bg-white border rounded mb-4"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            {loading ? (
              <div className="flex justify-center">
                <HashLoader />
              </div>
            ) : (
              <button
                type="submit"
                className="bgblue text-white px-4 py-2 rounded w-full"
              >
                Reset Password
              </button>
            )}
          </form>
        </>
      )}

      {status && (
        <p className="mt-4 text-lg">
        Redirecting to homepage in <span className="font-semibold">{seconds}</span> second{seconds !== 1 ? 's' : ''}...
      </p>
      )}
    </div>
  );
};

export default ForgotPass;
