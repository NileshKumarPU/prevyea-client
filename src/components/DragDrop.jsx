import { useState } from "react";
import axios from "axios";

export default function DragDrop() {
  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("")

  const handleUpload = async () => {
  
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:8001/upload", formData);
      console.log(res.data)
      setUploadedUrl(res.data.url);
      
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <>
      <div
        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all bg-gray-50 border-gray-300'
        }`}
      >
        <input type="file"  onChange={(e) => setFile(e.target.files[0])}   />

       
        <button onClick={handleUpload}>Upload</button>
        <p>URL: {uploadedUrl}</p>
      </div>

    </>
  );
}
