import { useState } from "react";
import axios from "axios";
import logo3 from "../assets/Logo.png";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function AuthOTP({ userData }) {
  const [otp, setOtp] = useState();
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);


  const handleVerify = async (e) => {
    setLoading(true);
    e.preventDefault();
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
            setLoading(false);
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
    
    if (success) {
      setLoading(false);      
      toast.success(message);
      setTimeout(()=>{navigate("/dashboard");}, 2000);
    } else {
      setLoading(false);
      setTimeout(()=>{navigate("/signup");}, 1000);
      toast.error(message);
    }
  };
  return (
    <>
      <div>
      <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
         <div>
            <img src={logo3} width={256} className="m-auto" />
          </div>
    <header className="mb-8 mt-8">
        <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
        <p className="text-[15px] text-slate-500">Enter the 6-digit verification code that was sent to your Email ID : {userData.email}</p>
    </header>
    <form>
        <div className="flex items-center justify-center gap-3">
            <input
                type="text"
                className="w-60 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                pattern="\d*" maxLength="6" value={otp} onChange={(e) => {
                  setOtp(e.target.value);
                }} />
            
        </div>
        <div className="max-w-[260px] mx-auto mt-4">
            <button type="submit"
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                onClick={handleVerify}
                >Verify
                Account</button>
        </div>
    </form>
    <div className="text-sm text-slate-500 mt-4">Didn't receive code? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div>
</div>



        <ToastContainer/>
     
          {/* <div classNameName="bggreen w-full m-auto my-4 border-2 rounded-lg p-4 text-center ">
          <div classNameName="bg-white rounded-lg">
            <img src={logo3} width={350} />
          </div>
            <p classNameName="mt-6 font-bold">
              Enter the 6-Digit OTP sent {userData.email}
            </p>

            <div classNameName="w-2/3 flex justify-between m-auto my-4 gap-1.5 ">
              <input
                type="text"
                name=""
                id=""
                value={otp}
                placeholder="000-000"
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                classNameName="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 bg-amber-50"
              />
              <button
                onClick={handleVerify}
                classNameName="w-full bgblue py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300"
              >
                Verify OTP
              </button>
            </div>
          </div>
          */}
        </div>
    </>
  );
}
