import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {
    const my_Email='codemate18@gmail.com';
      const [dark, setDark] = useState(false);

      const bg = dark ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900";
  const card = dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";
  const nav = dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";
  const input = dark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400";
  const subtext = dark ? "text-gray-400" : "text-gray-500";
  const tagBtn = dark ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200";

  return (
    <>
       {/* Footer */}
      <footer className={`mt-12 border-t ${dark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">P</div>
              <span className="font-bold text-blue-600">PrevYea!</span>
            </div>
            <p className={`text-xs ${subtext} mb-4`}>Your one stop platform for Previous Year Questions, Notes & More.</p>
            <div className="flex gap-3">
              {["📸", "💼", "🐙", "▶️"].map((icon, i) => (
                <button key={i} className={`w-7 h-7 rounded-full ${tagBtn} flex items-center justify-center text-xs transition-colors`}>{icon}</button>
              ))}
            </div>
          </div>
          {[
            { title: "Quick Links", links: ["Home", "PYQs", "Resources", "AI Assistant"] },
            { title: "CampusConnect", links: ["Notes Sharing", "Discussions", "Projects", "Internships"] },
            { title: "Resources", links: ["Syllabus", "Study Material", "Exam Tips", "Blog"] },
          ].map(col => (
            <div key={col.title}>
              <h3 className="font-bold text-sm mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map(l => (
                  <li key={l}><button className={`text-xs ${subtext} hover:text-blue-600 transition-colors`}>{l}</button></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-bold text-sm mb-3">Contact Us</h3>
            <div className={`space-y-2 text-xs ${subtext}`}>
              <div className="flex items-center gap-1.5">📧 <span>prevyea@gmail.com</span></div>
              <div className="flex items-center gap-1.5">📍 <span>Patna, Bihar, India</span></div>
            </div>
          </div>
        </div>
        <div className={`border-t ${dark ? "border-gray-800" : "border-gray-100"} px-4 py-4 flex items-center justify-between max-w-7xl mx-auto`}>
          <span className={`text-xs ${subtext}`}>© 2026 PrevYea. All rights reserved.</span>
          <span className={`text-xs ${subtext}`}>Made with ❤️ for Students</span>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center z-50">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
      </button>
    </>
  );
}

export default Footer;
