import { useState } from "react";
import useToken from "../Hooks/useToken";
import Login from "./Login";
import axios from "axios";
import { DragDrop } from "../components";


export default function Admin(){

    const { token, setToken } = useToken();
    if (!token) {
      return <Login setToken={setToken} />;

    }

    const [paperCode,setPaperCode] = useState();
    const [year,setYear]= useState();
    const [url,setUrl] = useState();


    function clearForm(){
      setPaperCode('');
      setYear(0);
      setUrl('');
    }

    function handleSubmit(e){
      e.preventDefault();
      axios({
        method:"post",
        url:`https://prevyea-server.vercel.app/addurls`,
        data:{
          paperCode:paperCode,
          year:year,
          url:url
        },
      }).then((result)=>{
        if(result.status==201) {alert("Added Successfully"); clearForm()}
          else alert("spmething went wrong")
      })
    }
    return(
        <>
       <div className="mt-6 mb-6 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-2xl shadow-lg bggreen w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Welcome Back 👋</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-sm font-medium  mb-1">Enter Paper Code </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={paperCode}
              onChange={(e) => setPaperCode(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium  mb-1">Enter Year </label>
            <input
              type="number"
              className="w-full px-4 py-2 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium  mb-1">Enter URL</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-xl border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full  py-2 rounded-xl hover:bg-purple-700 transition duration-300"
          >
            ADD
          </button>
          
        </form>

      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg bggreen w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Welcome Back 👋</h2>
        <img src="" alt="" />
      </div>
    </div>
        
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-xl font-bold mb-4 text-center">
          Upload Your Documents
        </h1>
        <DragDrop/>
      </div>
        </>
    )
}