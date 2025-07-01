import { useState } from "react";
import axios from "axios";
import logo3 from "../assets/Logo.png";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function AuthOTP({ userData }) {
  const [otp, setOtp] = useState();
  const navigate = useNavigate();


  const handleVerify = async () => {
    const result = await axios({
            method: "post",
            url: "https://prevyea-server.vercel.app/verify",
            data: {
              otp: otp,
              ...userData,
            },  });
          const { success, message } = result.data;
          
          if (success) { 
            updateDb();
          }else {
            toast.error(message);
            
            setTimeout(()=>{navigate("/signup");}, 1000);
          }
  };

  const updateDb = async () => {
    const result = await axios({
      method: "post",
      url: "https://prevyea-server.vercel.app/signup",
      data: {
        ...userData,
      },
    });
            
    const { success, message } = result.data;
    console.log(success,message);
    
    if (success) {
            
      toast.success(message);
      setTimeout(()=>{navigate("/dashboard");}, 2000);
    } else {
      setTimeout(()=>{navigate("/signup");}, 1000);
      toast.error(message);
    }
  };
  return (
    <>
      <div>
        <ToastContainer/>
        <div className="flex m-8 my-16 gap-4 mt-20 justify-center text-center ">
          <div>
            <img src={logo3} />
          </div>
          <div className="w-full m-auto my-4 border-2 rounded-lg p-4 text-center ">
            <p className="mt-6 font-bold">
              Enter the 6-Digit OTP sent {userData.email}
            </p>

            <div className="w-2/3 flex justify-between m-auto my-4 gap-1.5 ">
              <input
                type="text"
                name=""
                id=""
                value={otp}
                placeholder="000-000"
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 bg-amber-50"
              />
              <button
                onClick={handleVerify}
                className="w-full bgblue py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300"
              >
                Verify OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
