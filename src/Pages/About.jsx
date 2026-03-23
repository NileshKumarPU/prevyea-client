import React from "react";

const About = () => {

  
  document.title="About | Prevyea "
  return ( <>
    <div className="bg-emerald-100" style={{ padding: "2rem",  minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <h1 style={{ color: "#2CB8C6", fontSize: "2.5rem", marginBottom: "0.5rem" }}>About PrevYea</h1>
        <h3 style={{ color: "#666", marginBottom: "1.5rem" }}>Your One-Stop PYQ Search</h3>

        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          <strong>PrevYea</strong> is a smart, student-first platform designed to simplify your exam preparation. Whether you're hunting for previous year papers, quick revision material, or just need instant help — Prevyea has got you covered.
        </p>

        <ul style={{ paddingLeft: "1.2rem", marginBottom: "1.5rem", lineHeight: "1.6" }}>
          <li><strong>📚 Previous Year Papers:</strong> Access a growing library of organized PYQs across subjects and universities.</li>
          <li><strong>🤖 AI Chatbot:</strong> Instantly get explanations, solve doubts, and navigate the platform easily — 24/7.</li>
          <li><strong>📝 Exam Cheat Sheets:</strong> Regularly updated, concise notes to help you revise smarter and faster.</li>
        </ul>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Our mission is simple: make learning effortless, efficient, and accessible to every student preparing for competitive or semester exams.
        </p>

        <p style={{ fontSize: "1.1rem", fontStyle: "italic", color: "#555" }}>
          Whether you’re stuck on a topic, revising last minute, or planning ahead — Prevyea is your trusted companion.
        </p>
      </div>

        
      </div>
      <div className="py-12 bg-amber-50 m-auto text-center">
      
      <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Changelogs</h1>
        

      

        <ul style={{ paddingLeft: "1.2rem", marginBottom: "1.5rem", lineHeight: "1.6", textAlign:"left", }}>
          <li><strong className="font-mono">• 23/03/2026:</strong> Added DSE-2 CheatSheet for Sem V</li>
          <li><strong className="font-mono">• 17/03/2026:</strong> Added DSE-1 CheatSheet for Sem V</li>
          <li><strong className="font-mono">• 17/03/2026:</strong> Added CC-6 CheatSheet for Sem III</li>
          <li><strong className="font-mono">• 16/03/2026:</strong> Added CC-12 CheatSheet for Sem V</li>
          <li><strong className="font-mono">• 13/03/2026:</strong> Added CC-11 CheatSheet for Sem V</li>
          <li><strong className="font-mono">• 07/03/2026:</strong> Gemini AI answer fixes, Added Last Upated Timing in header.</li>
          <li><strong className="font-mono">• 29/12/2025:</strong> Added new PYQs for Sem V</li>
          
        </ul>

    

        <p style={{ fontSize: "1.1rem", fontStyle: "italic", color: "#555" }}>
          Feel free to email me your suggestions.
        </p>
      </div>

    </div>
 /</> );
};

export default About;
